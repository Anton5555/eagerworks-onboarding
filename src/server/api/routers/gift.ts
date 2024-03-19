import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const giftRouter = createTRPCRouter({
  getFiltered: privateProcedure
    .input(
      z.object({
        category: z.number(),
        attributes: z.array(z.number()).optional(),
        features: z.array(z.number()).optional(),
        text: z.string().optional(),
        sortProp: z.string(),
        sortDirection: z.string(),
        // cursor: z.number().nullish(),
        // limit: z.number().min(1).max(100).default(10),
      }),
    )
    .query(async ({ ctx, input }) => {
      const filters = [];
      // const { cursor, limit } = input;
      filters.push({
        categoryId: {
          equals: input.category,
        },
      });

      if (input.text) {
        filters.push(
          ...[
            {
              name: {
                search: input.text,
              },
            },
          ],
        );
      }

      if (input.attributes!.length > 0) {
        filters.push({
          attributes: {
            some: {
              id: {
                in: input.attributes,
              },
            },
          },
        });
      }

      if (input.features!.length > 0) {
        filters.push({
          features: {
            some: {
              id: {
                in: input.features,
              },
            },
          },
        });
      }

      const gifts = await ctx.db.gift.findMany({
        where: {
          AND: filters,
        },
        orderBy: {
          [input.sortProp]: input.sortDirection,
        },
        include: {
          provider: true,
          reviews: true,
        },
        // cursor: cursor ? { id: cursor } : undefined,
        // take: limit + 1,
      });

      // let nextCursor: typeof cursor | undefined = undefined;

      // if (gifts.length > limit) {
      //   const nextItem = gifts.pop()!;

      //   nextCursor = nextItem.id;
      // }

      return gifts;
      // nextCursor,
    }),

  getById: privateProcedure.input(z.number()).query(({ ctx, input }) =>
    ctx.db.gift.findUnique({
      where: {
        id: input,
      },
      include: {
        provider: true,
        items: true,
      },
    }),
  ),

  getAttributesAndFeaturesByCategoryId: privateProcedure
    .input(
      z.object({
        categoryId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return {
        attributes: await ctx.db.giftAttribute.findMany({
          where: {
            categoryId: input.categoryId,
          },
        }),
        features: await ctx.db.giftFeature.findMany({
          where: {
            categoryId: input.categoryId,
          },
        }),
      };
    }),
});

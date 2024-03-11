import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const giftRouter = createTRPCRouter({
  getGifts: privateProcedure
    .input(
      z.object({
        category: z.number(),
        attributes: z.array(z.number()),
        features: z.array(z.number()),
        text: z.string(),
        sort: z.string(),
        skip: z.number(),
        take: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.gift.findMany({
        where: {
          categoryId: {
            equals: input.category,
          },
          attributes: {
            some: {
              id: {
                in: input.attributes,
              },
            },
          },
          features: {
            some: {
              id: {
                in: input.features,
              },
            },
          },
          AND: [
            {
              name: {
                contains: input.text,
              },
            },
            {
              description: {
                contains: input.text,
              },
            },
          ],
        },
        orderBy: {
          [input.sort]: "asc",
        },
        include: {
          provider: true,
        },
        skip: input.skip,
        take: input.take,
      });
    }),

  getGiftById: privateProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      return ctx.db.gift.findUnique({
        where: {
          id: input,
        },
        include: {
          provider: true,
          items: {
            include: {
              giftItem: true,
            },
          },
        },
      });
    }),
});

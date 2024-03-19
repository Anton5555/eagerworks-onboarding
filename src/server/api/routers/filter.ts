import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const filterRouter = createTRPCRouter({
  getByCategoryId: privateProcedure
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

// import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { giftRouter } from "./routers/gift";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  gift: giftRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

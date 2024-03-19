import { createTRPCRouter } from "~/server/api/trpc";
import { giftRouter } from "./routers/gift";

export const appRouter = createTRPCRouter({
  gift: giftRouter,
});

export type AppRouter = typeof appRouter;

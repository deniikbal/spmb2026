import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Header } from "./header-CgyCn5NN.mjs";
import "@tanstack/react-router";
import "./auth-client-CSQiEf28.mjs";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./middleware-CrCawx5q.mjs";
import "./server.mjs";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "zod";
import "drizzle-orm";
import "drizzle-orm/neon-http";
import "drizzle-orm/pg-core";
import "react";
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex flex-col items-center justify-center pt-20 gap-4", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "TanStack Start Better Auth Starter" }) })
  ] });
}
export {
  App as component
};

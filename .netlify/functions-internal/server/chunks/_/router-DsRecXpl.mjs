import { createRouter, createRootRoute, createFileRoute, lazyRouteComponent, HeadContent, Scripts } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
import { c as createServerFn, j as json, T as TSS_SERVER_FUNCTION, g as getServerFnById, a as getRequest } from "./server.mjs";
import { b as auth, a as authMiddleware, d as db, u as user, s as student } from "./middleware-CrCawx5q.mjs";
import { eq } from "drizzle-orm";
import fs from "node:fs";
import { forwardRef, createElement } from "react";
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$4);
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$3);
const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  [
    "path",
    {
      d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
      key: "2d38gg"
    }
  ],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const OctagonX = createLucideIcon("octagon-x", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const appCss = "/assets/styles-WXQzs8wJ.css";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(CircleCheck, { className: "size-4 text-emerald-600" }),
        info: /* @__PURE__ */ jsx(Info, { className: "size-4 text-blue-600" }),
        warning: /* @__PURE__ */ jsx(TriangleAlert, { className: "size-4 text-amber-600" }),
        error: /* @__PURE__ */ jsx(OctagonX, { className: "size-4 text-red-600" }),
        loading: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-4 animate-spin" })
      },
      ...props
    }
  );
};
const Route$e = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(
        Toaster,
        {
          position: "top-right",
          toastOptions: {
            classNames: {
              toast: "group border-border bg-background text-foreground shadow-lg font-medium",
              success: "!bg-emerald-50 !text-emerald-700 !border-emerald-200",
              error: "!bg-red-50 !text-red-700 !border-red-200",
              info: "!bg-blue-50 !text-blue-700 !border-blue-200",
              warning: "!bg-amber-50 !text-amber-700 !border-amber-200"
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const getUsers_createServerFn_handler = createSsrRpc("a47133f431807caf990c57bb99fe3abf7a2c7844241987f2c257059ea4d1668b");
const getUsers = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getUsers_createServerFn_handler, async () => {
  return await db.select().from(user);
});
const createUser_createServerFn_handler = createSsrRpc("97ad6c255a2a8bba0cc5ed44f5ccad4b3846167e4494c49452292f554fcf27d1");
const createUser = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(createUser_createServerFn_handler, async ({
  data
}) => {
  const {
    name,
    email,
    password,
    role,
    image
  } = data;
  const request = getRequest();
  const result = await auth.api.createUser({
    headers: request?.headers,
    body: {
      email,
      password: password || "password123",
      name,
      role: role || "user"
    }
  });
  if (result && image) {
    await db.update(user).set({
      image
    }).where(eq(user.id, result.user.id));
  }
  return result;
});
const updateUser_createServerFn_handler = createSsrRpc("8861ae61bb27bd1a8efc7e8f06f8bb70a094669e5dea893af4008a40d1f6ecc6");
const updateUser = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(updateUser_createServerFn_handler, async ({
  data
}) => {
  const {
    id,
    password,
    ...updateData
  } = data;
  const request = getRequest();
  await db.update(user).set({
    ...updateData,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(user.id, id));
  if (password && password.length >= 6) {
    await auth.api.setUserPassword({
      headers: request?.headers,
      body: {
        userId: id,
        newPassword: password
      }
    });
  }
  return {
    success: true
  };
});
const deleteUser_createServerFn_handler = createSsrRpc("bba7d69e24ea7b0f4728b4e0bb1bef4462b624d542cee6dfb43f2cd7a4ecaae4");
const deleteUser = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(deleteUser_createServerFn_handler, async ({
  data
}) => {
  const request = getRequest();
  return await auth.api.removeUser({
    headers: request?.headers,
    body: {
      userId: data.id
    }
  });
});
const $$splitComponentImporter$b = () => import("./users-9jsjbpLo.mjs");
const Route$d = createFileRoute("/users")({
  server: {
    middleware: [authMiddleware]
  },
  loader: async () => {
    const users = await getUsers();
    return users;
  },
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const getStudents_createServerFn_handler = createSsrRpc("32e5f1dd773db80dba193f47a4b630f96e7bcfb914f172cd244fb4e0f4d9f4a8");
const getStudents = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getStudents_createServerFn_handler, async () => {
  return await db.select().from(student);
});
const createStudent_createServerFn_handler = createSsrRpc("dea90d935c181152caa16e99726ca741e2d22b4228d570ec807c71cb5066ef9c");
const createStudent = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(createStudent_createServerFn_handler, async ({
  data
}) => {
  const id = crypto.randomUUID();
  await db.insert(student).values({
    ...data,
    id,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  });
  return {
    id
  };
});
const updateStudent_createServerFn_handler = createSsrRpc("30a8326ca5bebbc8cbbf7a5ef2c1d0de3a2333b435aacd2be57292983e297a62");
const updateStudent = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(updateStudent_createServerFn_handler, async ({
  data
}) => {
  const {
    id,
    ...updateData
  } = data;
  await db.update(student).set({
    ...updateData,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(student.id, id));
  return {
    success: true
  };
});
const deleteStudent_createServerFn_handler = createSsrRpc("70394260b5eb8acf3fb44e34f0a47f8714604beca58e4da14f3a52a07bf1c6c5");
const deleteStudent = createServerFn({
  method: "POST"
}).inputValidator((data) => data).middleware([authMiddleware]).handler(deleteStudent_createServerFn_handler, async ({
  data
}) => {
  await db.delete(student).where(eq(student.id, data.id));
  return {
    success: true
  };
});
const $$splitComponentImporter$a = () => import("./students-DJGDbejW.mjs");
const Route$c = createFileRoute("/students")({
  server: {
    middleware: [authMiddleware]
  },
  loader: async () => {
    const students = await getStudents();
    return students;
  },
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./signup-Bhwh79Du.mjs");
const Route$b = createFileRoute("/signup")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./login-ej5j8vf8.mjs");
const Route$a = createFileRoute("/login")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-CG5Lwv3z.mjs");
const Route$9 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  server: {
    middleware: [authMiddleware]
  }
});
const $$splitComponentImporter$6 = () => import("./index-Da-iDE3L.mjs");
const Route$8 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./start.server-funcs-2Wup22d7.mjs");
const TODOS_FILE = "todos.json";
async function readTodos() {
  return JSON.parse(await fs.promises.readFile(TODOS_FILE, "utf-8").catch(() => JSON.stringify([{
    id: 1,
    name: "Get groceries"
  }, {
    id: 2,
    name: "Buy a new phone"
  }], null, 2)));
}
const getTodos_createServerFn_handler = createSsrRpc("c9d51a5243700889c80f82ed57a4ce74b25f188e5ebd534c9c64965dc44e8e8d");
const getTodos = createServerFn({
  method: "GET"
}).handler(getTodos_createServerFn_handler, async () => await readTodos());
const Route$7 = createFileRoute("/demo/start/server-funcs")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: async () => await getTodos()
});
const $$splitComponentImporter$4 = () => import("./start.api-request-DhPN1_Dc.mjs");
const Route$6 = createFileRoute("/demo/start/api-request")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const Route$5 = createFileRoute("/demo/api/names")({
  server: {
    handlers: {
      GET: () => json(["Alice", "Bob", "Charlie"])
    }
  }
});
const Route$4 = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return await auth.handler(request);
      },
      POST: async ({ request }) => {
        return await auth.handler(request);
      }
    }
  }
});
const $$splitComponentImporter$3 = () => import("./start.ssr.index-BmCCCK3g.mjs");
const Route$3 = createFileRoute("/demo/start/ssr/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./start.ssr.spa-mode-Bn28wW0l.mjs");
const Route$2 = createFileRoute("/demo/start/ssr/spa-mode")({
  ssr: false,
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getPunkSongs_createServerFn_handler = createSsrRpc("f74da881407a186b78a7af058df21dafb0126eb11e5a4d54fd322e8feb5038f1");
const getPunkSongs = createServerFn({
  method: "GET"
}).handler(getPunkSongs_createServerFn_handler, async () => [{
  id: 1,
  name: "Teenage Dirtbag",
  artist: "Wheatus"
}, {
  id: 2,
  name: "Smells Like Teen Spirit",
  artist: "Nirvana"
}, {
  id: 3,
  name: "The Middle",
  artist: "Jimmy Eat World"
}, {
  id: 4,
  name: "My Own Worst Enemy",
  artist: "Lit"
}, {
  id: 5,
  name: "Fat Lip",
  artist: "Sum 41"
}, {
  id: 6,
  name: "All the Small Things",
  artist: "blink-182"
}, {
  id: 7,
  name: "Beverly Hills",
  artist: "Weezer"
}]);
const $$splitComponentImporter$1 = () => import("./start.ssr.full-ssr-BYuX3qcp.mjs");
const Route$1 = createFileRoute("/demo/start/ssr/full-ssr")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => await getPunkSongs()
});
const $$splitComponentImporter = () => import("./start.ssr.data-only-DIGIASvi.mjs");
const Route = createFileRoute("/demo/start/ssr/data-only")({
  ssr: "data-only",
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async () => await getPunkSongs()
});
const UsersRoute = Route$d.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => Route$e
});
const StudentsRoute = Route$c.update({
  id: "/students",
  path: "/students",
  getParentRoute: () => Route$e
});
const SignupRoute = Route$b.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$e
});
const LoginRoute = Route$a.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$e
});
const DashboardRoute = Route$9.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const DemoStartServerFuncsRoute = Route$7.update({
  id: "/demo/start/server-funcs",
  path: "/demo/start/server-funcs",
  getParentRoute: () => Route$e
});
const DemoStartApiRequestRoute = Route$6.update({
  id: "/demo/start/api-request",
  path: "/demo/start/api-request",
  getParentRoute: () => Route$e
});
const DemoApiNamesRoute = Route$5.update({
  id: "/demo/api/names",
  path: "/demo/api/names",
  getParentRoute: () => Route$e
});
const ApiAuthSplatRoute = Route$4.update({
  id: "/api/auth/$",
  path: "/api/auth/$",
  getParentRoute: () => Route$e
});
const DemoStartSsrIndexRoute = Route$3.update({
  id: "/demo/start/ssr/",
  path: "/demo/start/ssr/",
  getParentRoute: () => Route$e
});
const DemoStartSsrSpaModeRoute = Route$2.update({
  id: "/demo/start/ssr/spa-mode",
  path: "/demo/start/ssr/spa-mode",
  getParentRoute: () => Route$e
});
const DemoStartSsrFullSsrRoute = Route$1.update({
  id: "/demo/start/ssr/full-ssr",
  path: "/demo/start/ssr/full-ssr",
  getParentRoute: () => Route$e
});
const DemoStartSsrDataOnlyRoute = Route.update({
  id: "/demo/start/ssr/data-only",
  path: "/demo/start/ssr/data-only",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  DashboardRoute,
  LoginRoute,
  SignupRoute,
  StudentsRoute,
  UsersRoute,
  ApiAuthSplatRoute,
  DemoApiNamesRoute,
  DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute,
  DemoStartSsrDataOnlyRoute,
  DemoStartSsrFullSsrRoute,
  DemoStartSsrSpaModeRoute,
  DemoStartSsrIndexRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
const routerDsRecXpl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  R: Route$d,
  a: updateStudent,
  b: createStudent,
  c: createUser,
  d: deleteUser,
  e: deleteStudent,
  f: Route$c,
  g: Route$7,
  h: createSsrRpc,
  i: getPunkSongs,
  j: Route$1,
  k: Route,
  r: router,
  u: updateUser
});
export {
  Route$d as R,
  TriangleAlert as T,
  createUser as a,
  Route$c as b,
  createLucideIcon as c,
  deleteUser as d,
  deleteStudent as e,
  updateStudent as f,
  createStudent as g,
  Route$7 as h,
  createSsrRpc as i,
  getPunkSongs as j,
  Route$1 as k,
  Route as l,
  routerDsRecXpl as r,
  updateUser as u
};

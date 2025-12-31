import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { a as authClient, B as Button } from "./auth-client-CSQiEf28.mjs";
function Header() {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();
  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/login" });
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: /* @__PURE__ */ jsx(Link, { to: "/", children: "My App" }) }),
    /* @__PURE__ */ jsx("nav", { className: "flex gap-4", children: session ? /* @__PURE__ */ jsx(Button, { onClick: logout, children: "Logout" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Login" }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/signup", children: "Signup" }) })
    ] }) })
  ] });
}
export {
  Header as H
};

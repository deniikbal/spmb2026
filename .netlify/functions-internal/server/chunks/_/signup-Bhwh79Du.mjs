import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Header } from "./header-CgyCn5NN.mjs";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { a as authClient, c as cn, B as Button } from "./auth-client-CSQiEf28.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-FDMM4CqG.mjs";
import { F as FieldGroup, a as Field, b as FieldSeparator, c as FieldLabel, d as FieldError, e as FieldDescription } from "./field-BqqN2kUv.mjs";
import { I as Input } from "./label-D79tgxsl.mjs";
import * as z from "zod";
import "@tanstack/react-router";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./middleware-CrCawx5q.mjs";
import "./server.mjs";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "drizzle-orm";
import "drizzle-orm/neon-http";
import "drizzle-orm/pg-core";
import "react";
import "./separator-CmV3no0u.mjs";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(1, "Name is required")
});
function SignupForm({
  className,
  ...props
}) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
          callbackURL: "/dashboard"
        },
        {
          onSuccess: () => {
            toast.success("Signup successful");
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          }
        }
      );
    }
  });
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Welcome to the app" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Sign up with your email and password" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        "form",
        {
          id: "signup-form",
          onSubmit: (e) => {
            e.preventDefault();
            form.handleSubmit();
          },
          children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
            /* @__PURE__ */ jsx(Field, { children: /* @__PURE__ */ jsxs(Button, { variant: "outline", type: "button", children: [
              /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                  fill: "currentColor"
                }
              ) }),
              "Sign up with Google"
            ] }) }),
            /* @__PURE__ */ jsx(FieldSeparator, { className: "*:data-[slot=field-separator-content]:bg-card", children: "Or continue with" }),
            /* @__PURE__ */ jsx(
              form.Field,
              {
                name: "email",
                children: (field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Email" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: field.name,
                        name: field.name,
                        value: field.state.value,
                        onBlur: field.handleBlur,
                        onChange: (e) => field.handleChange(e.target.value),
                        "aria-invalid": isInvalid,
                        placeholder: "m@example.com",
                        autoComplete: "off",
                        type: "email"
                      }
                    ),
                    isInvalid && /* @__PURE__ */ jsx(FieldError, { errors: field.state.meta.errors })
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              form.Field,
              {
                name: "name",
                children: (field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Name" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: field.name,
                        name: field.name,
                        value: field.state.value,
                        onBlur: field.handleBlur,
                        onChange: (e) => field.handleChange(e.target.value),
                        "aria-invalid": isInvalid,
                        placeholder: "John Doe",
                        autoComplete: "off"
                      }
                    ),
                    isInvalid && /* @__PURE__ */ jsx(FieldError, { errors: field.state.meta.errors })
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsx(
              form.Field,
              {
                name: "password",
                children: (field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                    /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Password" }),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        id: field.name,
                        name: field.name,
                        value: field.state.value,
                        onBlur: field.handleBlur,
                        onChange: (e) => field.handleChange(e.target.value),
                        "aria-invalid": isInvalid,
                        placeholder: "********",
                        autoComplete: "off",
                        type: "password"
                      }
                    ),
                    isInvalid && /* @__PURE__ */ jsx(FieldError, { errors: field.state.meta.errors })
                  ] });
                }
              }
            ),
            /* @__PURE__ */ jsxs(Field, { children: [
              /* @__PURE__ */ jsx(Button, { type: "submit", children: "Signup" }),
              /* @__PURE__ */ jsxs(FieldDescription, { className: "text-center", children: [
                "Don't have an account? ",
                /* @__PURE__ */ jsx("a", { href: "#", children: "Sign up" })
              ] })
            ] })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(FieldDescription, { className: "px-6 text-center", children: [
      "By clicking continue, you agree to our ",
      /* @__PURE__ */ jsx("a", { href: "#", children: "Terms of Service" }),
      " ",
      "and ",
      /* @__PURE__ */ jsx("a", { href: "#", children: "Privacy Policy" }),
      "."
    ] })
  ] });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex flex-col items-center justify-center pt-20", children: /* @__PURE__ */ jsx(SignupForm, {}) })
  ] });
}
export {
  RouteComponent as component
};

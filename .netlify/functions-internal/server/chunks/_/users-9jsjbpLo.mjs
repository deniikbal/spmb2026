import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout, T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell, B as Badge, A as Avatar, f as AvatarImage, g as AvatarFallback, C as ChevronLeft, h as ChevronRight } from "./badge-CCtm9bTC.mjs";
import React__default, { useState } from "react";
import { B as Button, c as cn } from "./auth-client-CSQiEf28.mjs";
import { c as createLucideIcon, R as Route$d, d as deleteUser, u as updateUser, a as createUser } from "./router-DsRecXpl.mjs";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, D as Dialog, e as DialogTrigger, U as UserPlus, f as DialogContent, g as DialogHeader, h as DialogTitle, i as Search, C as Checkbox, P as Pen, A as AlertDialog, j as AlertDialogTrigger, T as Trash2, k as AlertDialogContent, l as AlertDialogHeader, m as AlertDialogTitle, n as AlertDialogDescription, o as AlertDialogFooter, p as AlertDialogCancel, q as AlertDialogAction, F as Form, r as FormField, s as FormItem, t as FormLabel, u as FormControl, v as FormMessage } from "./checkbox-I6OxH-HC.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { I as Input } from "./label-D79tgxsl.mjs";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
import "./separator-CmV3no0u.mjs";
import "@radix-ui/react-separator";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "clsx";
import "tailwind-merge";
import "./middleware-CrCawx5q.mjs";
import "./server.mjs";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "drizzle-orm";
import "drizzle-orm/neon-http";
import "drizzle-orm/pg-core";
import "next-themes";
import "node:fs";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-select";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-label";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters").optional().or(z.literal("")),
  role: z.enum(["user", "admin"]),
  image: z.string().optional().nullable()
});
function UserForm({ initialData, onSuccess }) {
  const router = useRouter();
  const isEdit = !!initialData;
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: initialData || {
      name: "",
      email: "",
      password: "",
      role: "user",
      image: ""
    }
  });
  async function onSubmit(data) {
    try {
      if (isEdit && data.id) {
        await updateUser({ data });
        toast.success("User updated successfully");
      } else {
        if (!data.password) {
          toast.error("Password is required for new users");
          return;
        }
        await createUser({ data });
        toast.success("User created successfully");
      }
      router.invalidate();
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to save user");
      console.error(error);
    }
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "name",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Name" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "John Doe", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "email",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Email" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "john@example.com", ...field }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "password",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsxs(FormLabel, { children: [
            "Password ",
            isEdit && "(Leave blank to keep current)"
          ] }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: showPassword ? "text" : "password",
                placeholder: isEdit ? "New password (optional)" : "Min. 6 characters",
                ...field
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent",
                onClick: () => setShowPassword(!showPassword),
                children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4 text-muted-foreground" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4 text-muted-foreground" })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "role",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Role" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsxs(
            "select",
            {
              className: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              ...field,
              children: [
                /* @__PURE__ */ jsx("option", { value: "user", children: "User" }),
                /* @__PURE__ */ jsx("option", { value: "admin", children: "Admin" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      FormField,
      {
        control: form.control,
        name: "image",
        render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
          /* @__PURE__ */ jsx(FormLabel, { children: "Image URL (Optional)" }),
          /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "https://...", ...field, value: field.value || "" }) }),
          /* @__PURE__ */ jsx(FormMessage, {})
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end gap-2 text-primary!", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: isEdit ? "Update User" : "Create User" }) })
  ] }) });
}
function UserTable({ users }) {
  const router = useRouter();
  const [isCreateOpen, setIsCreateOpen] = React__default.useState(false);
  const [editingUser, setEditingUser] = React__default.useState(null);
  const [searchQuery, setSearchQuery] = React__default.useState("");
  const [roleFilter, setRoleFilter] = React__default.useState("all");
  const [pageSize, setPageSize] = React__default.useState("5");
  const [currentPage, setCurrentPage] = React__default.useState(1);
  const filteredUsers = React__default.useMemo(() => {
    return users.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, searchQuery, roleFilter]);
  const totalPages = Math.ceil(filteredUsers.length / Number(pageSize));
  const paginatedUsers = React__default.useMemo(() => {
    const start = (currentPage - 1) * Number(pageSize);
    const end = start + Number(pageSize);
    return filteredUsers.slice(start, end);
  }, [filteredUsers, currentPage, pageSize]);
  React__default.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter, pageSize]);
  async function onDelete(id) {
    try {
      await deleteUser({ data: { id } });
      toast.success("User deleted successfully");
      router.invalidate();
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-3 border-b", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap", children: "Show" }),
          /* @__PURE__ */ jsxs(Select, { value: pageSize, onValueChange: setPageSize, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[65px] h-9", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "5" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "5", children: "5" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "20", children: "20" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Dialog, { open: isCreateOpen, onOpenChange: setIsCreateOpen, children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { className: "h-9 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold", children: [
            /* @__PURE__ */ jsx(UserPlus, { className: "size-4 mr-2" }),
            "Add User"
          ] }) }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Add New User" }) }),
            /* @__PURE__ */ jsx(UserForm, { onSuccess: () => setIsCreateOpen(false) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-3 w-full md:max-w-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search user...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9 h-9"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: roleFilter, onValueChange: setRoleFilter, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[120px] h-9", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Role" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All Roles" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "admin", children: "Admin" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "user", children: "User" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { className: "bg-gray-50/50", children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[40px] pl-4", children: /* @__PURE__ */ jsx(Checkbox, {}) }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-semibold text-gray-900 py-2.5", children: "Status" }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-semibold text-gray-900 py-2.5", children: "Nama Lengkap" }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-semibold text-gray-900 py-2.5", children: "Issued Date" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right pr-4 font-semibold text-gray-900 py-2.5", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: paginatedUsers.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, className: "text-center py-8 text-muted-foreground", children: "No users found match your criteria." }) }) : paginatedUsers.map((user) => /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-gray-50/50 transition-colors", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "pl-4 py-2", children: /* @__PURE__ */ jsx(Checkbox, {}) }),
        /* @__PURE__ */ jsx(TableCell, { className: "py-2", children: /* @__PURE__ */ jsx(
          Badge,
          {
            variant: "secondary",
            className: cn(
              "px-2 py-0 h-5 text-[10px] font-bold uppercase",
              user.role === "admin" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100" : "bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-100"
            ),
            children: user.role === "admin" ? "Admin" : "User"
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { className: "py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxs(Avatar, { className: "size-8 border", children: [
            /* @__PURE__ */ jsx(AvatarImage, { src: user.image || "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-emerald-100 text-emerald-700 text-xs font-bold", children: user.name.charAt(0).toUpperCase() })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-gray-900", children: user.name }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground leading-tight", children: user.email })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground text-xs py-2", children: new Date(user.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right pr-4 py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-1", children: [
          /* @__PURE__ */ jsxs(
            Dialog,
            {
              open: editingUser?.id === user.id,
              onOpenChange: (open) => !open && setEditingUser(null),
              children: [
                /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "size-7 text-muted-foreground hover:text-emerald-600",
                    onClick: () => setEditingUser(user),
                    children: /* @__PURE__ */ jsx(Pen, { className: "size-3.5" })
                  }
                ) }),
                /* @__PURE__ */ jsxs(DialogContent, { children: [
                  /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Edit User" }) }),
                  /* @__PURE__ */ jsx(
                    UserForm,
                    {
                      initialData: user,
                      onSuccess: () => setEditingUser(null)
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(AlertDialog, { children: [
            /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "size-7 text-muted-foreground hover:text-destructive",
                children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
              }
            ) }),
            /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Hapus Pengguna?" }),
                /* @__PURE__ */ jsx(AlertDialogDescription, { children: "Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak dapat dibatalkan dan data pengguna akan dihapus secara permanen." })
              ] }),
              /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Batal" }),
                /* @__PURE__ */ jsx(
                  AlertDialogAction,
                  {
                    onClick: () => onDelete(user.id),
                    className: "bg-red-600 text-white hover:bg-red-700 font-semibold",
                    children: "Hapus"
                  }
                )
              ] })
            ] })
          ] })
        ] }) })
      ] }, user.id)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-[12px] text-muted-foreground font-medium", children: [
        "Showing ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: (currentPage - 1) * Number(pageSize) + 1 }),
        " to",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: Math.min(currentPage * Number(pageSize), filteredUsers.length) }),
        " of",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: filteredUsers.length }),
        " entries"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
            disabled: currentPage === 1,
            className: "h-8 px-2 text-xs text-muted-foreground hover:text-foreground",
            children: [
              /* @__PURE__ */ jsx(ChevronLeft, { className: "size-3.5 mr-1" }),
              "Previous"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mx-1", children: Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ jsx(
          Button,
          {
            variant: currentPage === page ? "secondary" : "ghost",
            size: "sm",
            onClick: () => setCurrentPage(page),
            className: cn(
              "size-8 p-0 rounded-md text-xs",
              currentPage === page ? "bg-emerald-600 text-white hover:bg-emerald-700 font-bold" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            ),
            children: page
          },
          page
        )) }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
            disabled: currentPage === totalPages || totalPages === 0,
            className: "h-8 px-2 text-xs text-muted-foreground hover:text-foreground",
            children: [
              "Next",
              /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 ml-1" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function UsersPage() {
  const users = Route$d.useLoaderData();
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsx(UserTable, { users }) });
}
export {
  UsersPage as component
};

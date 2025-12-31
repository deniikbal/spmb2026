import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout, T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell, G as GraduationCap, B as Badge, C as ChevronLeft, h as ChevronRight, U as User, i as Users } from "./badge-CCtm9bTC.mjs";
import * as React from "react";
import React__default from "react";
import { B as Button, c as cn } from "./auth-client-CSQiEf28.mjs";
import { b as Route$c, e as deleteStudent, f as updateStudent, g as createStudent } from "./router-DsRecXpl.mjs";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, D as Dialog, e as DialogTrigger, U as UserPlus, f as DialogContent, g as DialogHeader, h as DialogTitle, i as Search, C as Checkbox, P as Pen, A as AlertDialog, j as AlertDialogTrigger, T as Trash2, k as AlertDialogContent, l as AlertDialogHeader, m as AlertDialogTitle, n as AlertDialogDescription, o as AlertDialogFooter, p as AlertDialogCancel, q as AlertDialogAction, F as Form, r as FormField, s as FormItem, t as FormLabel, u as FormControl, v as FormMessage, w as DialogFooter } from "./checkbox-I6OxH-HC.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { I as Input } from "./label-D79tgxsl.mjs";
import { S as Separator } from "./separator-CmV3no0u.mjs";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import "@radix-ui/react-avatar";
import "@radix-ui/react-slot";
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
import "@radix-ui/react-separator";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const studentSchema = z.object({
  id: z.string().optional(),
  nis: z.string().optional().nullable(),
  nisn: z.string().optional().nullable(),
  nmSiswa: z.string().min(1, "Nama Siswa is required"),
  tempatLahir: z.string().optional().nullable(),
  tanggalLahir: z.string().optional().nullable(),
  jenisKelamin: z.string().optional().nullable(),
  agama: z.string().optional().nullable(),
  alamatSiswa: z.string().optional().nullable(),
  teleponSiswa: z.string().optional().nullable(),
  diterimaTanggal: z.string().optional().nullable(),
  nmAyah: z.string().optional().nullable(),
  nmIbu: z.string().optional().nullable(),
  pekerjaanAyah: z.string().optional().nullable(),
  pekerjaanIbu: z.string().optional().nullable(),
  nmWali: z.string().optional().nullable(),
  pekerjaanWali: z.string().optional().nullable(),
  alamatOrtu: z.string().optional().nullable(),
  teleponOrtu: z.string().optional().nullable(),
  alamatWali: z.string().optional().nullable(),
  teleponWali: z.string().optional().nullable(),
  statusDalamKel: z.string().optional().nullable(),
  anakKe: z.string().optional().nullable(),
  sekolahAsal: z.string().optional().nullable(),
  diterimaKelas: z.string().optional().nullable(),
  fotoSiswa: z.string().optional().nullable(),
  noIjasahnas: z.string().optional().nullable(),
  tglLulus: z.string().optional().nullable(),
  noTranskrip: z.string().optional().nullable()
});
function StudentForm({ initialData, onSuccess }) {
  const router = useRouter();
  const isEdit = !!initialData;
  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: initialData || {
      nmSiswa: "",
      nis: "",
      nisn: "",
      tempatLahir: "",
      tanggalLahir: "",
      jenisKelamin: "",
      agama: "",
      alamatSiswa: "",
      teleponSiswa: "",
      diterimaTanggal: "",
      nmAyah: "",
      nmIbu: "",
      pekerjaanAyah: "",
      pekerjaanIbu: "",
      nmWali: "",
      pekerjaanWali: "",
      alamatOrtu: "",
      teleponOrtu: "",
      alamatWali: "",
      teleponWali: "",
      statusDalamKel: "",
      anakKe: "",
      sekolahAsal: "",
      diterimaKelas: "",
      fotoSiswa: "",
      noIjasahnas: "",
      tglLulus: "",
      noTranskrip: ""
    }
  });
  async function onSubmit(data) {
    try {
      if (isEdit && data.id) {
        await updateStudent({ data });
        toast.success("Student updated successfully");
      } else {
        await createStudent({ data });
        toast.success("Student created successfully");
      }
      router.invalidate();
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to save student");
      console.error(error);
    }
  }
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col max-h-[85vh]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-visible", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "identitas", className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-3 h-12 bg-emerald-50/50 p-1 mb-6 border border-emerald-100/50", children: [
        /* @__PURE__ */ jsxs(
          TabsTrigger,
          {
            value: "identitas",
            className: "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(User, { className: "size-4" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Identitas Diri" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Identitas" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          TabsTrigger,
          {
            value: "ortu",
            className: "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(Users, { className: "size-4" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Orang Tua / Wali" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Keluarga" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          TabsTrigger,
          {
            value: "pelengkap",
            className: "data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(GraduationCap, { className: "size-4" }),
              /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Akademik & Pelengkap" }),
              /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Akademik" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-h-[50vh] overflow-y-auto px-1 pr-4 pb-8 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent", children: [
        /* @__PURE__ */ jsx(TabsContent, { value: "identitas", className: "mt-0 animate-in fade-in-50 duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nmSiswa", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Nama Lengkap" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nama Siswa", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nis", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "NIS" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "NIS", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nisn", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "NISN" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "NISN", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "tempatLahir", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Tempat Lahir" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Tempat Lahir", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "tanggalLahir", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Tgl Lahir" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "date", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "jenisKelamin", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Jenis Kelamin" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value || "", children: [
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Pilih" }) }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "L", children: "Laki-laki" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "P", children: "Perempuan" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "agama", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Agama" }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value || "", children: [
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Pilih" }) }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Islam", children: "Islam" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Kristen Protestan", children: "Kristen Protestan" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Katolik", children: "Katolik" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Hindu", children: "Hindu" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Buddha", children: "Buddha" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Konghucu", children: "Konghucu" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "teleponSiswa", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Telepon Siswa" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nomor Telepon", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "alamatSiswa", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "md:col-span-2 lg:col-span-1", children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Alamat Siswa" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Alamat Lengkap", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "ortu", className: "mt-0 animate-in fade-in-50 duration-300", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nmAyah", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Nama Ayah" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nama Ayah", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nmIbu", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Nama Ibu" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nama Ibu", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "pekerjaanAyah", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Pekerjaan Ayah" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Pekerjaan Ayah", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "pekerjaanIbu", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Pekerjaan Ibu" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Pekerjaan Ibu", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "teleponOrtu", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Telepon Orang Tua" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Telepon Orang Tua", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "alamatOrtu", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Alamat Orang Tua" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Alamat Lengkap Orang Tua", className: "resize-none h-20", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "nmWali", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Nama Wali" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nama Wali (Opsional)", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "teleponWali", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Telepon Wali" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Telepon Wali", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "pekerjaanWali", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Pekerjaan Wali" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Pekerjaan Wali", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "alamatWali", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { className: "md:col-span-2 lg:col-span-3", children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Alamat Wali" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Textarea, { placeholder: "Alamat Lengkap Wali", className: "resize-none h-20", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "pelengkap", className: "mt-0 animate-in fade-in-50 duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "sekolahAsal", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Asal Sekolah" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nama Sekolah Asal", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "diterimaKelas", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Diterima Kelas" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Kelas", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "diterimaTanggal", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Tgl Diterima" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "date", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "statusDalamKel", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Status Kel." }),
              /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, defaultValue: field.value || "", children: [
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(SelectTrigger, { className: "border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Pilih" }) }) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Anak Kandung", children: "Anak Kandung" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Anak Tiri", children: "Anak Tiri" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Anak Angkat", children: "Anak Angkat" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) }),
            /* @__PURE__ */ jsx(FormField, { control: form.control, name: "anakKe", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
              /* @__PURE__ */ jsx(FormLabel, { children: "Anak Ke" }),
              /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Urutan", ...field, value: field.value || "" }) }),
              /* @__PURE__ */ jsx(FormMessage, {})
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "noIjasahnas", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "No. Ijazah Nasional" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nomor Ijazah", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "tglLulus", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "Tanggal Lulus" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { type: "date", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) }),
          /* @__PURE__ */ jsx(FormField, { control: form.control, name: "noTranskrip", render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
            /* @__PURE__ */ jsx(FormLabel, { children: "No. Transkrip" }),
            /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Nomor Transkrip", ...field, value: field.value || "" }) }),
            /* @__PURE__ */ jsx(FormMessage, {})
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(DialogFooter, { className: "p-4 border-t bg-gray-50/80 rounded-b-lg sm:justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 shadow-md transition-all active:scale-95", children: isEdit ? "Update Data" : "Simpan Data" }) })
  ] }) });
}
function StudentTable({ students }) {
  const router = useRouter();
  const [isCreateOpen, setIsCreateOpen] = React__default.useState(false);
  const [editingStudent, setEditingStudent] = React__default.useState(null);
  const [searchQuery, setSearchQuery] = React__default.useState("");
  const [genderFilter, setGenderFilter] = React__default.useState("all");
  const [pageSize, setPageSize] = React__default.useState("10");
  const [currentPage, setCurrentPage] = React__default.useState(1);
  const filteredStudents = React__default.useMemo(() => {
    return students.filter((s) => {
      const matchesSearch = s.nmSiswa.toLowerCase().includes(searchQuery.toLowerCase()) || s.nisn && s.nisn.includes(searchQuery) || s.sekolahAsal && s.sekolahAsal.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGender = genderFilter === "all" || s.jenisKelamin === genderFilter;
      return matchesSearch && matchesGender;
    });
  }, [students, searchQuery, genderFilter]);
  const totalPages = Math.ceil(filteredStudents.length / Number(pageSize));
  const paginatedStudents = React__default.useMemo(() => {
    const start = (currentPage - 1) * Number(pageSize);
    const end = start + Number(pageSize);
    return filteredStudents.slice(start, end);
  }, [filteredStudents, currentPage, pageSize]);
  React__default.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, genderFilter, pageSize]);
  async function onDelete(id) {
    try {
      await deleteStudent({ data: { id } });
      toast.success("Data siswa berhasil dihapus");
      router.invalidate();
    } catch (error) {
      toast.error("Gagal menghapus data siswa");
      console.error(error);
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-xl overflow-hidden shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 border-b bg-gray-50/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground whitespace-nowrap font-medium", children: "Show" }),
          /* @__PURE__ */ jsxs(Select, { value: pageSize, onValueChange: setPageSize, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[70px] h-9 ring-emerald-500/20", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "10" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "5", children: "5" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "10", children: "10" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "20", children: "20" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "50", children: "50" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Dialog, { open: isCreateOpen, onOpenChange: setIsCreateOpen, children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { className: "h-9 bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm", children: [
            /* @__PURE__ */ jsx(UserPlus, { className: "size-4 mr-2" }),
            "Peserta Didik Baru"
          ] }) }),
          /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl max-h-[90vh]", children: [
            /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-xl font-bold text-emerald-950", children: "Formulir Peserta Didik Baru" }) }),
            /* @__PURE__ */ jsx(StudentForm, { onSuccess: () => setIsCreateOpen(false) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 gap-3 w-full md:max-w-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Cari Nama, NISN, atau Sekolah Asal...",
              value: searchQuery,
              onChange: (e) => setSearchQuery(e.target.value),
              className: "pl-9 h-9 border-emerald-100 focus-visible:ring-emerald-500/30"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: genderFilter, onValueChange: setGenderFilter, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[140px] h-9 ring-emerald-500/20", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Semua JK" }) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "Semua JK" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "L", children: "Laki-laki" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "P", children: "Perempuan" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { className: "bg-gray-50", children: /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-[40px] pl-4", children: /* @__PURE__ */ jsx(Checkbox, {}) }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider", children: "Nama Lengkap" }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider", children: "NISN" }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider", children: "JK" }),
        /* @__PURE__ */ jsx(TableHead, { className: "font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider", children: "Asal Sekolah" }),
        /* @__PURE__ */ jsx(TableHead, { className: "text-right pr-4 font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider", children: "Aksi" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: paginatedStudents.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsx(GraduationCap, { className: "size-10 text-emerald-100" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Data siswa tidak ditemukan." })
      ] }) }) }) : paginatedStudents.map((s) => /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-emerald-50/30 transition-colors border-b last:border-0", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "pl-4 py-3", children: /* @__PURE__ */ jsx(Checkbox, {}) }),
        /* @__PURE__ */ jsxs(TableCell, { className: "py-3", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm text-gray-900 leading-none", children: s.nmSiswa }),
          /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", children: [
            "ID: ",
            s.id.split("-")[0],
            "..."
          ] })
        ] }),
        /* @__PURE__ */ jsx(TableCell, { className: "py-3 font-mono text-xs tabular-nums text-gray-600", children: s.nisn || "-" }),
        /* @__PURE__ */ jsx(TableCell, { className: "py-3", children: /* @__PURE__ */ jsx(
          Badge,
          {
            variant: "secondary",
            className: cn(
              "px-2 py-0 h-5 text-[10px] font-bold uppercase",
              s.jenisKelamin === "L" ? "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-50" : "bg-pink-50 text-pink-700 border-pink-100 hover:bg-pink-50"
            ),
            children: s.jenisKelamin === "L" ? "L" : s.jenisKelamin === "P" ? "P" : "-"
          }
        ) }),
        /* @__PURE__ */ jsx(TableCell, { className: "py-3 text-xs text-gray-600", children: s.sekolahAsal || "-" }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right pr-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end items-center gap-1", children: [
          /* @__PURE__ */ jsxs(
            Dialog,
            {
              open: editingStudent?.id === s.id,
              onOpenChange: (open) => !open && setEditingStudent(null),
              children: [
                /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    className: "size-8 text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 rounded-full",
                    onClick: () => setEditingStudent(s),
                    children: /* @__PURE__ */ jsx(Pen, { className: "size-3.5" })
                  }
                ) }),
                /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-6xl max-h-[90vh]", children: [
                  /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-xl font-bold text-emerald-950", children: "Update Data Siswa" }) }),
                  /* @__PURE__ */ jsx(
                    StudentForm,
                    {
                      initialData: s,
                      onSuccess: () => setEditingStudent(null)
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
                className: "size-8 text-muted-foreground hover:text-destructive hover:bg-red-50 rounded-full",
                children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
              }
            ) }),
            /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
              /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
                /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Hapus Data Siswa?" }),
                /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
                  "Apakah Anda yakin ingin menghapus data ",
                  /* @__PURE__ */ jsx("strong", { children: s.nmSiswa }),
                  "? Tindakan ini tidak dapat dibatalkan."
                ] })
              ] }),
              /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
                /* @__PURE__ */ jsx(AlertDialogCancel, { children: "Batal" }),
                /* @__PURE__ */ jsx(
                  AlertDialogAction,
                  {
                    onClick: () => onDelete(s.id),
                    className: "bg-red-600 text-white hover:bg-red-700 font-bold",
                    children: "HapusPermanen"
                  }
                )
              ] })
            ] })
          ] })
        ] }) })
      ] }, s.id)) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t bg-gray-50/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-muted-foreground font-semibold", children: [
        "Menampilkan ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: (currentPage - 1) * Number(pageSize) + 1 }),
        " -",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: Math.min(currentPage * Number(pageSize), filteredStudents.length) }),
        " dari",
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: filteredStudents.length }),
        " data"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setCurrentPage((p) => Math.max(1, p - 1)),
            disabled: currentPage === 1,
            className: "h-8 px-2 text-xs text-muted-foreground hover:text-emerald-700 hover:bg-emerald-50 rounded-lg",
            children: [
              /* @__PURE__ */ jsx(ChevronLeft, { className: "size-3.5 mr-1" }),
              "Sebelumnya"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mx-1", children: Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum = i + 1;
          if (totalPages > 5 && currentPage > 3) {
            pageNum = currentPage - 3 + i + 1;
            if (pageNum > totalPages) pageNum = totalPages - (4 - i);
          }
          return /* @__PURE__ */ jsx(
            Button,
            {
              variant: currentPage === pageNum ? "secondary" : "ghost",
              size: "sm",
              onClick: () => setCurrentPage(pageNum),
              className: cn(
                "size-8 p-0 rounded-lg text-xs font-bold transition-all",
                currentPage === pageNum ? "bg-emerald-600 text-white shadow-md shadow-emerald-200" : "text-gray-600 hover:bg-emerald-100 hover:text-emerald-700"
              ),
              children: pageNum
            },
            pageNum
          );
        }) }),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => setCurrentPage((p) => Math.min(totalPages, p + 1)),
            disabled: currentPage === totalPages || totalPages === 0,
            className: "h-8 px-2 text-xs text-muted-foreground hover:text-emerald-700 hover:bg-emerald-50 rounded-lg",
            children: [
              "Berikutnya",
              /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 ml-1" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function StudentsPage() {
  const students = Route$c.useLoaderData();
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-emerald-950", children: "Data Peserta Didik" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Kelola data informasi lengkap seluruh siswa SMANSABA." })
    ] }),
    /* @__PURE__ */ jsx(StudentTable, { students })
  ] }) });
}
export {
  StudentsPage as component
};

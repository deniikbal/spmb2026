import { b as createServerRpc, c as createServerFn } from "./server.mjs";
import { a as authMiddleware, d as db, s as student } from "./middleware-CrCawx5q.mjs";
import { eq } from "drizzle-orm";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "zod";
import "drizzle-orm/neon-http";
import "drizzle-orm/pg-core";
const getStudents_createServerFn_handler = createServerRpc("32e5f1dd773db80dba193f47a4b630f96e7bcfb914f172cd244fb4e0f4d9f4a8", (opts, signal) => {
  return getStudents.__executeServer(opts, signal);
});
const getStudents = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getStudents_createServerFn_handler, async () => {
  return await db.select().from(student);
});
const createStudent_createServerFn_handler = createServerRpc("dea90d935c181152caa16e99726ca741e2d22b4228d570ec807c71cb5066ef9c", (opts, signal) => {
  return createStudent.__executeServer(opts, signal);
});
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
const updateStudent_createServerFn_handler = createServerRpc("30a8326ca5bebbc8cbbf7a5ef2c1d0de3a2333b435aacd2be57292983e297a62", (opts, signal) => {
  return updateStudent.__executeServer(opts, signal);
});
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
const deleteStudent_createServerFn_handler = createServerRpc("70394260b5eb8acf3fb44e34f0a47f8714604beca58e4da14f3a52a07bf1c6c5", (opts, signal) => {
  return deleteStudent.__executeServer(opts, signal);
});
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
export {
  createStudent_createServerFn_handler,
  deleteStudent_createServerFn_handler,
  getStudents_createServerFn_handler,
  updateStudent_createServerFn_handler
};

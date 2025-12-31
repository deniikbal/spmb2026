import { b as createServerRpc, c as createServerFn, a as getRequest } from "./server.mjs";
import { a as authMiddleware, b as auth, d as db, u as user } from "./middleware-CrCawx5q.mjs";
import { eq } from "drizzle-orm";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
import "zod";
import "drizzle-orm/neon-http";
import "drizzle-orm/pg-core";
const getUsers_createServerFn_handler = createServerRpc("a47133f431807caf990c57bb99fe3abf7a2c7844241987f2c257059ea4d1668b", (opts, signal) => {
  return getUsers.__executeServer(opts, signal);
});
const getUsers = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(getUsers_createServerFn_handler, async () => {
  return await db.select().from(user);
});
const createUser_createServerFn_handler = createServerRpc("97ad6c255a2a8bba0cc5ed44f5ccad4b3846167e4494c49452292f554fcf27d1", (opts, signal) => {
  return createUser.__executeServer(opts, signal);
});
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
const updateUser_createServerFn_handler = createServerRpc("8861ae61bb27bd1a8efc7e8f06f8bb70a094669e5dea893af4008a40d1f6ecc6", (opts, signal) => {
  return updateUser.__executeServer(opts, signal);
});
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
const deleteUser_createServerFn_handler = createServerRpc("bba7d69e24ea7b0f4728b4e0bb1bef4462b624d542cee6dfb43f2cd7a4ecaae4", (opts, signal) => {
  return deleteUser.__executeServer(opts, signal);
});
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
export {
  createUser_createServerFn_handler,
  deleteUser_createServerFn_handler,
  getUsers_createServerFn_handler,
  updateUser_createServerFn_handler
};

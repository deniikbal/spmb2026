import { createServerFn } from '@tanstack/react-start'
import { db } from '../../../db/drizzle'
import { user } from '../../../db/schema'
import { eq } from 'drizzle-orm'
import { authMiddleware } from '../../../lib/middleware'
import { auth } from '../../../lib/auth'
import { getRequest } from '@tanstack/react-start/server'

export const getUsers = createServerFn({
    method: 'GET',
})
    .middleware([authMiddleware])
    .handler(async () => {
        return await db.select().from(user)
    })

export const createUser = createServerFn({
    method: 'POST',
})
    .inputValidator((data: {
        name: string;
        email: string;
        password?: string;
        role?: 'user' | 'admin';
        image?: string | null;
    }) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        const { name, email, password, role, image } = data
        const request = getRequest()

        // Use Better Auth admin API to create user with password
        const result = await auth.api.createUser({
            headers: request?.headers,
            body: {
                email,
                password: password || 'password123',
                name,
                role: role || 'user',
            }
        })

        // If creation successful and we have an image, update the user record
        if (result && image) {
            await db.update(user).set({ image }).where(eq(user.id, result.user.id))
        }

        return result
    })

export const updateUser = createServerFn({
    method: 'POST',
})
    .inputValidator((data: {
        id: string;
        name: string;
        email: string;
        role?: 'user' | 'admin';
        password?: string;
        image?: string | null;
    }) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        const { id, password, ...updateData } = data
        const request = getRequest()

        // Update basic info in DB
        await db
            .update(user)
            .set({
                ...updateData,
                updatedAt: new Date(),
            })
            .where(eq(user.id, id))

        // If password is provided, update it via Better Auth Admin API
        if (password && password.length >= 6) {
            await (auth.api as any).setUserPassword({
                headers: request?.headers,
                body: {
                    userId: id,
                    newPassword: password,
                }
            })
        }

        return { success: true }
    })

export const deleteUser = createServerFn({
    method: 'POST',
})
    .inputValidator((data: { id: string }) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        const request = getRequest()
        // Use Better Auth admin API to delete user
        return await auth.api.removeUser({
            headers: request?.headers,
            body: {
                userId: data.id,
            }
        })
    })

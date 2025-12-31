import { createServerFn } from '@tanstack/react-start'
import { db } from '../../../db/drizzle'
import { student } from '../../../db/schema'
import { eq } from 'drizzle-orm'
import { authMiddleware } from '../../../lib/middleware'

export const getStudents = createServerFn({
    method: 'GET',
})
    .middleware([authMiddleware])
    .handler(async () => {
        return await db.select().from(student)
    })

export const createStudent = createServerFn({
    method: 'POST',
})
    .inputValidator((data: any) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        const id = crypto.randomUUID()
        await db.insert(student).values({
            ...data,
            id,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        return { id }
    })

export const updateStudent = createServerFn({
    method: 'POST',
})
    .inputValidator((data: any) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        const { id, ...updateData } = data
        await db
            .update(student)
            .set({
                ...updateData,
                updatedAt: new Date(),
            })
            .where(eq(student.id, id))
        return { success: true }
    })

export const deleteStudent = createServerFn({
    method: 'POST',
})
    .inputValidator((data: { id: string }) => data)
    .middleware([authMiddleware])
    .handler(async ({ data }) => {
        await db.delete(student).where(eq(student.id, data.id))
        return { success: true }
    })

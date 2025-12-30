import { createFileRoute } from '@tanstack/react-router'
import { getUsers } from '@/lib/server-functions/users'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { UserTable, User } from '@/components/user-management/user-table'
import { authMiddleware } from 'lib/middleware'

export const Route = createFileRoute('/users')({
    server: {
        middleware: [authMiddleware],
    },
    loader: async () => {
        const users = await getUsers()
        return users as User[]
    },
    component: UsersPage,
})

function UsersPage() {
    const users = Route.useLoaderData()
    return (
        <DashboardLayout>
            <UserTable users={users} />
        </DashboardLayout>
    )
}

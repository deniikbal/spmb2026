import { createFileRoute } from '@tanstack/react-router'
import { getStudents } from '@/lib/server-functions/students'
import DashboardLayout from '@/components/layout/dashboard-layout'
import { StudentTable, Student } from '@/components/student-management/student-table'
import { authMiddleware } from 'lib/middleware'

export const Route = createFileRoute('/students')({
    server: {
        middleware: [authMiddleware],
    },
    loader: async () => {
        const students = await getStudents()
        return students as Student[]
    },
    component: StudentsPage,
})

function StudentsPage() {
    const students = Route.useLoaderData()
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold tracking-tight text-emerald-950">Data Peserta Didik</h1>
                    <p className="text-muted-foreground text-sm">
                        Kelola data informasi lengkap seluruh siswa SMANSABA.
                    </p>
                </div>
                <StudentTable students={students} />
            </div>
        </DashboardLayout>
    )
}

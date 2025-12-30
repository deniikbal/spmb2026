import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
    Edit2Icon,
    Trash2Icon,
    UserPlusIcon,
    SearchIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from 'lucide-react'
import { deleteUser } from '@/lib/server-functions/users'
import { toast } from 'sonner'
import { useRouter } from '@tanstack/react-router'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { UserForm } from './user-form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface User {
    id: string
    name: string
    email: string
    image: string | null
    role: 'user' | 'admin'
    createdAt: Date
    updatedAt: Date
}

interface UserTableProps {
    users: User[]
}

export function UserTable({ users }: UserTableProps) {
    const router = useRouter()
    const [isCreateOpen, setIsCreateOpen] = React.useState(false)
    const [editingUser, setEditingUser] = React.useState<User | null>(null)

    // Filter & Pagination States
    const [searchQuery, setSearchQuery] = React.useState('')
    const [roleFilter, setRoleFilter] = React.useState('all')
    const [pageSize, setPageSize] = React.useState('5')
    const [currentPage, setCurrentPage] = React.useState(1)

    // Filtering logic
    const filteredUsers = React.useMemo(() => {
        return users.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.email.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesRole = roleFilter === 'all' || user.role === roleFilter
            return matchesSearch && matchesRole
        })
    }, [users, searchQuery, roleFilter])

    // Pagination logic
    const totalPages = Math.ceil(filteredUsers.length / Number(pageSize))
    const paginatedUsers = React.useMemo(() => {
        const start = (currentPage - 1) * Number(pageSize)
        const end = start + Number(pageSize)
        return filteredUsers.slice(start, end)
    }, [filteredUsers, currentPage, pageSize])

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, roleFilter, pageSize])

    async function onDelete(id: string) {
        try {
            await deleteUser({ data: { id } })
            toast.success('User deleted successfully')
            router.invalidate()
        } catch (error) {
            toast.error('Failed to delete user')
            console.error(error)
        }
    }

    return (
        <div className="bg-white border rounded-xl overflow-hidden">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-3 border-b">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap">Show</span>
                        <Select value={pageSize} onValueChange={setPageSize}>
                            <SelectTrigger className="w-[65px] h-9">
                                <SelectValue placeholder="5" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
                        <DialogTrigger asChild>
                            <Button className="h-9 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                                <UserPlusIcon className="size-4 mr-2" />
                                Add User
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add New User</DialogTitle>
                            </DialogHeader>
                            <UserForm onSuccess={() => setIsCreateOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="flex flex-1 gap-3 w-full md:max-w-xl">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            placeholder="Search user..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-9"
                        />
                    </div>
                    <Select value={roleFilter} onValueChange={setRoleFilter}>
                        <SelectTrigger className="w-[120px] h-9">
                            <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-gray-50/50">
                        <TableRow>
                            <TableHead className="w-[40px] pl-4">
                                <Checkbox />
                            </TableHead>
                            <TableHead className="font-semibold text-gray-900 py-2.5">Status</TableHead>
                            <TableHead className="font-semibold text-gray-900 py-2.5">Nama Lengkap</TableHead>
                            <TableHead className="font-semibold text-gray-900 py-2.5">Issued Date</TableHead>
                            <TableHead className="text-right pr-4 font-semibold text-gray-900 py-2.5">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedUsers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                                    No users found match your criteria.
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedUsers.map((user) => (
                                <TableRow key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                    <TableCell className="pl-4 py-2">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="py-2">
                                        <Badge
                                            variant="secondary"
                                            className={cn(
                                                "px-2 py-0 h-5 text-[10px] font-bold uppercase",
                                                user.role === 'admin'
                                                    ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-100'
                                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-100'
                                            )}
                                        >
                                            {user.role === 'admin' ? 'Admin' : 'User'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-2">
                                        <div className="flex items-center gap-2.5">
                                            <Avatar className="size-8 border">
                                                <AvatarImage src={user.image || ''} />
                                                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-bold">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm text-gray-900">{user.name}</span>
                                                <span className="text-[10px] text-muted-foreground leading-tight">{user.email}</span>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground text-xs py-2">
                                        {new Date(user.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </TableCell>
                                    <TableCell className="text-right pr-4 py-2">
                                        <div className="flex justify-end items-center gap-1">
                                            <Dialog
                                                open={editingUser?.id === user.id}
                                                onOpenChange={(open) => !open && setEditingUser(null)}
                                            >
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-7 text-muted-foreground hover:text-emerald-600"
                                                        onClick={() => setEditingUser(user)}
                                                    >
                                                        <Edit2Icon className="size-3.5" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Edit User</DialogTitle>
                                                    </DialogHeader>
                                                    <UserForm
                                                        initialData={user}
                                                        onSuccess={() => setEditingUser(null)}
                                                    />
                                                </DialogContent>
                                            </Dialog>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-7 text-muted-foreground hover:text-destructive"
                                                    >
                                                        <Trash2Icon className="size-3.5" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Hapus Pengguna?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak dapat dibatalkan dan data pengguna akan dihapus secara permanen.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() => onDelete(user.id)}
                                                            className="bg-red-600 text-white hover:bg-red-700 font-semibold"
                                                        >
                                                            Hapus
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t bg-white">
                <div className="text-[12px] text-muted-foreground font-medium">
                    Showing <span className="text-foreground">{(currentPage - 1) * Number(pageSize) + 1}</span> to{' '}
                    <span className="text-foreground">
                        {Math.min(currentPage * Number(pageSize), filteredUsers.length)}
                    </span> of{' '}
                    <span className="text-foreground">{filteredUsers.length}</span> entries
                </div>
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground"
                    >
                        <ChevronLeftIcon className="size-3.5 mr-1" />
                        Previous
                    </Button>
                    <div className="flex items-center gap-1 mx-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? 'secondary' : 'ghost'}
                                size="sm"
                                onClick={() => setCurrentPage(page)}
                                className={cn(
                                    "size-8 p-0 rounded-md text-xs",
                                    currentPage === page
                                        ? "bg-emerald-600 text-white hover:bg-emerald-700 font-bold"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                )}
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground"
                    >
                        Next
                        <ChevronRightIcon className="size-3.5 ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

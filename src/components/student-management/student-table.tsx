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
    GraduationCapIcon,
} from 'lucide-react'
import { deleteStudent } from '@/lib/server-functions/students'
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
import { StudentForm } from './student-form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export interface Student {
    id: string
    nis: string | null
    nisn: string | null
    nmSiswa: string
    tempatLahir: string | null
    tanggalLahir: string | null
    jenisKelamin: string | null
    agama: string | null
    alamatSiswa: string | null
    teleponSiswa: string | null
    diterimaTanggal: string | null
    nmAyah: string | null
    nmIbu: string | null
    pekerjaanAyah: string | null
    pekerjaanIbu: string | null
    nmWali: string | null
    pekerjaanWali: string | null
    alamatOrtu: string | null
    teleponOrtu: string | null
    alamatWali: string | null
    teleponWali: string | null
    statusDalamKel: string | null
    anakKe: string | null
    sekolahAsal: string | null
    diterimaKelas: string | null
    fotoSiswa: string | null
    noIjasahnas: string | null
    tglLulus: string | null
    noTranskrip: string | null
    createdAt: Date
    updatedAt: Date
}

interface StudentTableProps {
    students: Student[]
}

export function StudentTable({ students }: StudentTableProps) {
    const router = useRouter()
    const [isCreateOpen, setIsCreateOpen] = React.useState(false)
    const [editingStudent, setEditingStudent] = React.useState<Student | null>(null)

    // Filter & Pagination States
    const [searchQuery, setSearchQuery] = React.useState('')
    const [genderFilter, setGenderFilter] = React.useState('all')
    const [pageSize, setPageSize] = React.useState('10')
    const [currentPage, setCurrentPage] = React.useState(1)

    // Filtering logic
    const filteredStudents = React.useMemo(() => {
        return students.filter((s) => {
            const matchesSearch =
                s.nmSiswa.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (s.nisn && s.nisn.includes(searchQuery)) ||
                (s.sekolahAsal && s.sekolahAsal.toLowerCase().includes(searchQuery.toLowerCase()))
            const matchesGender = genderFilter === 'all' || s.jenisKelamin === genderFilter
            return matchesSearch && matchesGender
        })
    }, [students, searchQuery, genderFilter])

    // Pagination logic
    const totalPages = Math.ceil(filteredStudents.length / Number(pageSize))
    const paginatedStudents = React.useMemo(() => {
        const start = (currentPage - 1) * Number(pageSize)
        const end = start + Number(pageSize)
        return filteredStudents.slice(start, end)
    }, [filteredStudents, currentPage, pageSize])

    // Reset page when filters change
    React.useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery, genderFilter, pageSize])

    async function onDelete(id: string) {
        try {
            await deleteStudent({ data: { id } })
            toast.success('Data siswa berhasil dihapus')
            router.invalidate()
        } catch (error) {
            toast.error('Gagal menghapus data siswa')
            console.error(error)
        }
    }

    return (
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-4 border-b bg-gray-50/50">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">Show</span>
                        <Select value={pageSize} onValueChange={setPageSize}>
                            <SelectTrigger className="w-[70px] h-9 ring-emerald-500/20">
                                <SelectValue placeholder="10" />
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
                            <Button className="h-9 bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-sm">
                                <UserPlusIcon className="size-4 mr-2" />
                                Peserta Didik Baru
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-6xl max-h-[90vh]">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-emerald-950">Formulir Peserta Didik Baru</DialogTitle>
                            </DialogHeader>
                            <StudentForm onSuccess={() => setIsCreateOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="flex flex-1 gap-3 w-full md:max-w-2xl">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            placeholder="Cari Nama, NISN, atau Sekolah Asal..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 h-9 border-emerald-100 focus-visible:ring-emerald-500/30"
                        />
                    </div>
                    <Select value={genderFilter} onValueChange={setGenderFilter}>
                        <SelectTrigger className="w-[140px] h-9 ring-emerald-500/20">
                            <SelectValue placeholder="Semua JK" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Semua JK</SelectItem>
                            <SelectItem value="L">Laki-laki</SelectItem>
                            <SelectItem value="P">Perempuan</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader className="bg-gray-50">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[40px] pl-4">
                                <Checkbox />
                            </TableHead>
                            <TableHead className="font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider">Nama Lengkap</TableHead>
                            <TableHead className="font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider">NISN</TableHead>
                            <TableHead className="font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider">JK</TableHead>
                            <TableHead className="font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider">Asal Sekolah</TableHead>
                            <TableHead className="text-right pr-4 font-bold text-emerald-950 py-3 text-xs uppercase tracking-wider">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedStudents.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-12">
                                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                        <GraduationCapIcon className="size-10 text-emerald-100" />
                                        <p className="font-medium">Data siswa tidak ditemukan.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            paginatedStudents.map((s) => (
                                <TableRow key={s.id} className="hover:bg-emerald-50/30 transition-colors border-b last:border-0">
                                    <TableCell className="pl-4 py-3">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <div className="font-semibold text-sm text-gray-900 leading-none">{s.nmSiswa}</div>
                                        <div className="text-[10px] text-muted-foreground mt-1">ID: {s.id.split('-')[0]}...</div>
                                    </TableCell>
                                    <TableCell className="py-3 font-mono text-xs tabular-nums text-gray-600">
                                        {s.nisn || '-'}
                                    </TableCell>
                                    <TableCell className="py-3">
                                        <Badge
                                            variant="secondary"
                                            className={cn(
                                                "px-2 py-0 h-5 text-[10px] font-bold uppercase",
                                                s.jenisKelamin === 'L'
                                                    ? 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-50'
                                                    : 'bg-pink-50 text-pink-700 border-pink-100 hover:bg-pink-50'
                                            )}
                                        >
                                            {s.jenisKelamin === 'L' ? 'L' : s.jenisKelamin === 'P' ? 'P' : '-'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-3 text-xs text-gray-600">
                                        {s.sekolahAsal || '-'}
                                    </TableCell>
                                    <TableCell className="text-right pr-4 py-3">
                                        <div className="flex justify-end items-center gap-1">
                                            <Dialog
                                                open={editingStudent?.id === s.id}
                                                onOpenChange={(open) => !open && setEditingStudent(null)}
                                            >
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8 text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 rounded-full"
                                                        onClick={() => setEditingStudent(s)}
                                                    >
                                                        <Edit2Icon className="size-3.5" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-6xl max-h-[90vh]">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-xl font-bold text-emerald-950">Update Data Siswa</DialogTitle>
                                                    </DialogHeader>
                                                    <StudentForm
                                                        initialData={s as any}
                                                        onSuccess={() => setEditingStudent(null)}
                                                    />
                                                </DialogContent>
                                            </Dialog>

                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="size-8 text-muted-foreground hover:text-destructive hover:bg-red-50 rounded-full"
                                                    >
                                                        <Trash2Icon className="size-3.5" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Hapus Data Siswa?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Apakah Anda yakin ingin menghapus data <strong>{s.nmSiswa}</strong>? Tindakan ini tidak dapat dibatalkan.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Batal</AlertDialogCancel>
                                                        <AlertDialogAction
                                                            onClick={() => onDelete(s.id)}
                                                            className="bg-red-600 text-white hover:bg-red-700 font-bold"
                                                        >
                                                            HapusPermanen
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
            <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50/50">
                <div className="text-[11px] text-muted-foreground font-semibold">
                    Menampilkan <span className="text-emerald-700">{(currentPage - 1) * Number(pageSize) + 1}</span> -{' '}
                    <span className="text-emerald-700">
                        {Math.min(currentPage * Number(pageSize), filteredStudents.length)}
                    </span> dari{' '}
                    <span className="text-emerald-700">{filteredStudents.length}</span> data
                </div>
                <div className="flex items-center gap-1.5">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
                    >
                        <ChevronLeftIcon className="size-3.5 mr-1" />
                        Sebelumnya
                    </Button>
                    <div className="flex items-center gap-1 mx-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum = i + 1;
                            if (totalPages > 5 && currentPage > 3) {
                                pageNum = currentPage - 3 + i + 1;
                                if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                            }
                            return (
                                <Button
                                    key={pageNum}
                                    variant={currentPage === pageNum ? 'secondary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={cn(
                                        "size-8 p-0 rounded-lg text-xs font-bold transition-all",
                                        currentPage === pageNum
                                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                                            : "text-gray-600 hover:bg-emerald-100 hover:text-emerald-700"
                                    )}
                                >
                                    {pageNum}
                                </Button>
                            )
                        })}
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
                    >
                        Berikutnya
                        <ChevronRightIcon className="size-3.5 ml-1" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

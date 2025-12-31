import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createStudent, updateStudent } from '@/lib/server-functions/students'
import { toast } from 'sonner'
import { useRouter } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserIcon, UsersIcon, GraduationCapIcon } from 'lucide-react'

const studentSchema = z.object({
    id: z.string().optional(),
    nis: z.string().optional().nullable(),
    nisn: z.string().optional().nullable(),
    nmSiswa: z.string().min(1, 'Nama Siswa is required'),
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
    noTranskrip: z.string().optional().nullable(),
})

type StudentFormValues = z.infer<typeof studentSchema>

interface StudentFormProps {
    initialData?: StudentFormValues
    onSuccess?: () => void
}

export function StudentForm({ initialData, onSuccess }: StudentFormProps) {
    const router = useRouter()
    const isEdit = !!initialData

    const form = useForm<StudentFormValues>({
        resolver: zodResolver(studentSchema),
        defaultValues: initialData || {
            nmSiswa: '',
            nis: '',
            nisn: '',
            tempatLahir: '',
            tanggalLahir: '',
            jenisKelamin: '',
            agama: '',
            alamatSiswa: '',
            teleponSiswa: '',
            diterimaTanggal: '',
            nmAyah: '',
            nmIbu: '',
            pekerjaanAyah: '',
            pekerjaanIbu: '',
            nmWali: '',
            pekerjaanWali: '',
            alamatOrtu: '',
            teleponOrtu: '',
            alamatWali: '',
            teleponWali: '',
            statusDalamKel: '',
            anakKe: '',
            sekolahAsal: '',
            diterimaKelas: '',
            fotoSiswa: '',
            noIjasahnas: '',
            tglLulus: '',
            noTranskrip: '',
        },
    })

    async function onSubmit(data: StudentFormValues) {
        try {
            if (isEdit && data.id) {
                await updateStudent({ data })
                toast.success('Student updated successfully')
            } else {
                await createStudent({ data })
                toast.success('Student created successfully')
            }
            router.invalidate()
            onSuccess?.()
        } catch (error) {
            toast.error('Failed to save student')
            console.error(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-h-[85vh]">
                <div className="flex-1 overflow-visible">
                    <Tabs defaultValue="identitas" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-12 bg-emerald-50/50 p-1 mb-6 border border-emerald-100/50">
                            <TabsTrigger
                                value="identitas"
                                className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2"
                            >
                                <UserIcon className="size-4" />
                                <span className="hidden sm:inline">Identitas Diri</span>
                                <span className="sm:hidden">Identitas</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="ortu"
                                className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2"
                            >
                                <UsersIcon className="size-4" />
                                <span className="hidden sm:inline">Orang Tua / Wali</span>
                                <span className="sm:hidden">Keluarga</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="pelengkap"
                                className="data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm transition-all flex items-center gap-2"
                            >
                                <GraduationCapIcon className="size-4" />
                                <span className="hidden sm:inline">Akademik & Pelengkap</span>
                                <span className="sm:hidden">Akademik</span>
                            </TabsTrigger>
                        </TabsList>

                        <div className="max-h-[50vh] overflow-y-auto px-1 pr-4 pb-8 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent">
                            <TabsContent value="identitas" className="mt-0 animate-in fade-in-50 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <FormField control={form.control} name="nmSiswa" render={({ field }) => (
                                        <FormItem><FormLabel>Nama Lengkap</FormLabel><FormControl><Input placeholder="Nama Siswa" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField control={form.control} name="nis" render={({ field }) => (
                                            <FormItem><FormLabel>NIS</FormLabel><FormControl><Input placeholder="NIS" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="nisn" render={({ field }) => (
                                            <FormItem><FormLabel>NISN</FormLabel><FormControl><Input placeholder="NISN" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField control={form.control} name="tempatLahir" render={({ field }) => (
                                            <FormItem><FormLabel>Tempat Lahir</FormLabel><FormControl><Input placeholder="Tempat Lahir" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="tanggalLahir" render={({ field }) => (
                                            <FormItem><FormLabel>Tgl Lahir</FormLabel><FormControl><Input type="date" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField control={form.control} name="jenisKelamin" render={({ field }) => (
                                            <FormItem><FormLabel>Jenis Kelamin</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                                                    <FormControl>
                                                        <SelectTrigger className="border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                                                            <SelectValue placeholder="Pilih" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="L">Laki-laki</SelectItem>
                                                        <SelectItem value="P">Perempuan</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="agama" render={({ field }) => (
                                            <FormItem><FormLabel>Agama</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                                                    <FormControl>
                                                        <SelectTrigger className="border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                                                            <SelectValue placeholder="Pilih" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Islam">Islam</SelectItem>
                                                        <SelectItem value="Kristen Protestan">Kristen Protestan</SelectItem>
                                                        <SelectItem value="Katolik">Katolik</SelectItem>
                                                        <SelectItem value="Hindu">Hindu</SelectItem>
                                                        <SelectItem value="Buddha">Buddha</SelectItem>
                                                        <SelectItem value="Konghucu">Konghucu</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                    <FormField control={form.control} name="teleponSiswa" render={({ field }) => (
                                        <FormItem><FormLabel>Telepon Siswa</FormLabel><FormControl><Input placeholder="Nomor Telepon" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="alamatSiswa" render={({ field }) => (
                                        <FormItem className="md:col-span-2 lg:col-span-1"><FormLabel>Alamat Siswa</FormLabel><FormControl><Input placeholder="Alamat Lengkap" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                </div>
                            </TabsContent>

                            <TabsContent value="ortu" className="mt-0 animate-in fade-in-50 duration-300">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <FormField control={form.control} name="nmAyah" render={({ field }) => (
                                            <FormItem><FormLabel>Nama Ayah</FormLabel><FormControl><Input placeholder="Nama Ayah" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="nmIbu" render={({ field }) => (
                                            <FormItem><FormLabel>Nama Ibu</FormLabel><FormControl><Input placeholder="Nama Ibu" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="pekerjaanAyah" render={({ field }) => (
                                            <FormItem><FormLabel>Pekerjaan Ayah</FormLabel><FormControl><Input placeholder="Pekerjaan Ayah" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="pekerjaanIbu" render={({ field }) => (
                                            <FormItem><FormLabel>Pekerjaan Ibu</FormLabel><FormControl><Input placeholder="Pekerjaan Ibu" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <FormField control={form.control} name="teleponOrtu" render={({ field }) => (
                                            <FormItem><FormLabel>Telepon Orang Tua</FormLabel><FormControl><Input placeholder="Telepon Orang Tua" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="alamatOrtu" render={({ field }) => (
                                            <FormItem className="md:col-span-2"><FormLabel>Alamat Orang Tua</FormLabel><FormControl><Textarea placeholder="Alamat Lengkap Orang Tua" className="resize-none h-20" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>

                                    <Separator />

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <FormField control={form.control} name="nmWali" render={({ field }) => (
                                            <FormItem><FormLabel>Nama Wali</FormLabel><FormControl><Input placeholder="Nama Wali (Opsional)" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="teleponWali" render={({ field }) => (
                                            <FormItem><FormLabel>Telepon Wali</FormLabel><FormControl><Input placeholder="Telepon Wali" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="pekerjaanWali" render={({ field }) => (
                                            <FormItem><FormLabel>Pekerjaan Wali</FormLabel><FormControl><Input placeholder="Pekerjaan Wali" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="alamatWali" render={({ field }) => (
                                            <FormItem className="md:col-span-2 lg:col-span-3"><FormLabel>Alamat Wali</FormLabel><FormControl><Textarea placeholder="Alamat Lengkap Wali" className="resize-none h-20" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="pelengkap" className="mt-0 animate-in fade-in-50 duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <FormField control={form.control} name="sekolahAsal" render={({ field }) => (
                                        <FormItem><FormLabel>Asal Sekolah</FormLabel><FormControl><Input placeholder="Nama Sekolah Asal" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField control={form.control} name="diterimaKelas" render={({ field }) => (
                                            <FormItem><FormLabel>Diterima Kelas</FormLabel><FormControl><Input placeholder="Kelas" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="diterimaTanggal" render={({ field }) => (
                                            <FormItem><FormLabel>Tgl Diterima</FormLabel><FormControl><Input type="date" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <FormField control={form.control} name="statusDalamKel" render={({ field }) => (
                                            <FormItem><FormLabel>Status Kel.</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value || ''}>
                                                    <FormControl>
                                                        <SelectTrigger className="border-emerald-200 focus:ring-emerald-500 focus:border-emerald-500">
                                                            <SelectValue placeholder="Pilih" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Anak Kandung">Anak Kandung</SelectItem>
                                                        <SelectItem value="Anak Tiri">Anak Tiri</SelectItem>
                                                        <SelectItem value="Anak Angkat">Anak Angkat</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="anakKe" render={({ field }) => (
                                            <FormItem><FormLabel>Anak Ke</FormLabel><FormControl><Input placeholder="Urutan" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <FormField control={form.control} name="noIjasahnas" render={({ field }) => (
                                        <FormItem><FormLabel>No. Ijazah Nasional</FormLabel><FormControl><Input placeholder="Nomor Ijazah" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="tglLulus" render={({ field }) => (
                                        <FormItem><FormLabel>Tanggal Lulus</FormLabel><FormControl><Input type="date" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                    <FormField control={form.control} name="noTranskrip" render={({ field }) => (
                                        <FormItem><FormLabel>No. Transkrip</FormLabel><FormControl><Input placeholder="Nomor Transkrip" {...field} value={field.value || ''} /></FormControl><FormMessage /></FormItem>
                                    )} />
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>

                <DialogFooter className="p-4 border-t bg-gray-50/80 rounded-b-lg sm:justify-end">
                    <Button type="submit" className="px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11 shadow-md transition-all active:scale-95">
                        {isEdit ? 'Update Data' : 'Simpan Data'}
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    )
}

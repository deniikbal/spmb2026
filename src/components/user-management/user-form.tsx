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
import { Input } from '@/components/ui/input'
import { createUser, updateUser } from '@/lib/server-functions/users'
import { toast } from 'sonner'
import { useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

const userSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters').optional().or(z.literal('')),
    role: z.enum(['user', 'admin']),
    image: z.string().optional().nullable(),
})

type UserFormValues = z.infer<typeof userSchema>

interface UserFormProps {
    initialData?: UserFormValues
    onSuccess?: () => void
}

export function UserForm({ initialData, onSuccess }: UserFormProps) {
    const router = useRouter()
    const isEdit = !!initialData
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm<UserFormValues>({
        resolver: zodResolver(userSchema),
        defaultValues: initialData || {
            name: '',
            email: '',
            password: '',
            role: 'user',
            image: '',
        },
    })

    async function onSubmit(data: UserFormValues) {
        try {
            if (isEdit && data.id) {
                await updateUser({ data: data as any })
                toast.success('User updated successfully')
            } else {
                if (!data.password) {
                    toast.error('Password is required for new users')
                    return
                }
                await createUser({ data: data as any })
                toast.success('User created successfully')
            }
            router.invalidate()
            onSuccess?.()
        } catch (error) {
            toast.error('Failed to save user')
            console.error(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password {isEdit && '(Leave blank to keep current)'}</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={isEdit ? 'New password (optional)' : 'Min. 6 characters'}
                                        {...field}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="size-4 text-muted-foreground" />
                                        ) : (
                                            <EyeIcon className="size-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <select
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    {...field}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="https://..." {...field} value={field.value || ''} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end gap-2 text-primary!">
                    <Button type="submit" className="w-full">
                        {isEdit ? 'Update User' : 'Create User'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

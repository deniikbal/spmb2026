import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar'
import {
    ChartNoAxesCombinedIcon,
    CrownIcon,
    FacebookIcon,
    GraduationCapIcon,
    InstagramIcon,
    LanguagesIcon,
    LinkedinIcon,
    TwitterIcon,
    UsersIcon,
} from 'lucide-react'
import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'
import { Link, useLocation } from '@tanstack/react-router'
import React from 'react'
import { authClient } from '../../../lib/auth-client'

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const location = useLocation()
    const { data: session } = authClient.useSession()
    const user = session?.user
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <div className="flex min-h-dvh w-full">
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader className="h-14 flex items-center px-4 border-b">
                        <div className="flex items-center gap-3">
                            <div className="bg-emerald-600 rounded-lg p-1.5 shadow-sm shadow-emerald-200">
                                <CrownIcon className="size-5 text-white" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-emerald-950">SPMB SMANSABA</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent className="scrollbar-hide py-2">
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={location.pathname === '/dashboard'}
                                            className="data-[active=true]:bg-emerald-50 data-[active=true]:text-emerald-700 hover:text-emerald-700 hover:bg-emerald-50/50"
                                        >
                                            <Link to="/dashboard">
                                                <ChartNoAxesCombinedIcon />
                                                <span>Dashboard</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={location.pathname === '/users'}
                                            className="data-[active=true]:bg-emerald-50 data-[active=true]:text-emerald-700 hover:text-emerald-700 hover:bg-emerald-50/50"
                                        >
                                            <Link to="/users">
                                                <UsersIcon />
                                                <span>User Management</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={location.pathname === '/students'}
                                            className="data-[active=true]:bg-emerald-50 data-[active=true]:text-emerald-700 hover:text-emerald-700 hover:bg-emerald-50/50"
                                        >
                                            <Link to="/students">
                                                <GraduationCapIcon />
                                                <span>Data Siswa</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <div className="flex flex-1 flex-col">
                    <header className="bg-card sticky top-0 z-50 border-b h-14">
                        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger className="[&_svg]:!size-5" />
                                <Separator orientation="vertical" className="hidden !h-4 sm:block" />
                                <Breadcrumb className="hidden sm:block">
                                    <BreadcrumbList>
                                        <BreadcrumbItem>
                                            <BreadcrumbLink asChild>
                                                <Link to="/dashboard">Home</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        {pathnames.length > 0 && <BreadcrumbSeparator />}
                                        {pathnames.map((path, index) => {
                                            const href = `/${pathnames.slice(0, index + 1).join('/')}`
                                            const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
                                            const isLast = index === pathnames.length - 1

                                            return (
                                                <React.Fragment key={href}>
                                                    <BreadcrumbItem>
                                                        {isLast ? (
                                                            <BreadcrumbPage>{label}</BreadcrumbPage>
                                                        ) : (
                                                            <BreadcrumbLink asChild>
                                                                <Link to={href as any}>{label}</Link>
                                                            </BreadcrumbLink>
                                                        )}
                                                    </BreadcrumbItem>
                                                    {!isLast && <BreadcrumbSeparator />}
                                                </React.Fragment>
                                            )
                                        })}
                                    </BreadcrumbList>
                                </Breadcrumb>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <LanguageDropdown
                                    trigger={
                                        <Button variant="ghost" size="icon">
                                            <LanguagesIcon />
                                        </Button>
                                    }
                                />
                                <ProfileDropdown
                                    user={user}
                                    trigger={
                                        <Button variant="ghost" size="icon" className="size-9.5">
                                            <Avatar className="size-9.5 rounded-md">
                                                <AvatarImage src={user?.image || ''} />
                                                <AvatarFallback className="bg-emerald-100 text-emerald-700 font-bold">
                                                    {user?.name?.[0]?.toUpperCase() || 'U'}
                                                </AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </header>
                    <main className="mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
                        {children}
                    </main>
                    <footer>
                        <div className="text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6">
                            <p className="text-sm text-balance max-sm:text-center">
                                {`©${new Date().getFullYear()}`}{' '}
                                <a href="#" className="text-primary">
                                    shadcn/studio
                                </a>
                                , Made for better web design
                            </p>
                            <div className="flex items-center gap-5">
                                <a href="#">
                                    <FacebookIcon className="size-4" />
                                </a>
                                <a href="#">
                                    <InstagramIcon className="size-4" />
                                </a>
                                <a href="#">
                                    <LinkedinIcon className="size-4" />
                                </a>
                                <a href="#">
                                    <TwitterIcon className="size-4" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </SidebarProvider >
        </div >
    )
}

import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Flag, BriefcaseBusiness, ChartArea, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Statistik Alumni',
        href: '/statistics',
        icon: ChartArea,
    },
    {
        title: 'Ringkasan Survey',
        href: '/summary-survey',
        icon: LayoutGrid,
    }
];

const alumniItems: NavItem[] = [
    {
        title: 'Alumni',
        href: '/alumnis',
        icon: Users,
    },
    {
        title: 'Tracer Study',
        href: '/tracer-study',
        icon: Flag,
    }
]

const cmsNavItems: NavItem[] = [
    {
        title: 'Berita',
        href: '/news',
        icon: LayoutGrid,
    },
    {
        title: 'Acara',
        href: '/events',
        icon: LayoutGrid,
    },
    {
        title: 'Lowongan',
        href: '/job-recruitments',
        icon: BriefcaseBusiness
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain title="Dashboard" items={mainNavItems} />
                <NavMain title="Manajemen Alumni" items={alumniItems} />
                <NavMain title="CMS" items={cmsNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

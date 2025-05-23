import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return (
            <div className="[--header-height:calc(theme(spacing.14))]">
                <SidebarProvider defaultOpen={isOpen} className="flex flex-col">{children}</SidebarProvider>
            </div>
        )
    }

    return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}

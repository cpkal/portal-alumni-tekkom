import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Alumni</h2>
                            <p className="text-3xl font-bold">1.234</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Alumni Aktif pada Platform</h2>
                            <p className="text-3xl font-bold">567</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Alumni mengisi Tracer Study</h2>
                            <p className="text-3xl font-bold">345</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Alumni Bekerja</h2>
                            <p className="text-3xl font-bold">100</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Alumni Sesuai Bidang Studi</h2>
                            <p className="text-3xl font-bold">42 (70%)</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Feedback Masuk</h2>
                            <p className="text-3xl font-bold">200</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>
                </div>
                
            </div>
        </AppLayout>
    );
}

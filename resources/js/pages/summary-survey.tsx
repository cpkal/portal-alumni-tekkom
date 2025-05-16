import { PieChartAlumniEmploymentDistribution } from '@/components/pie-chart-alumni-employment-distribution';
import { TableDemo } from '@/components/table-demo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Ringkasan Survey',
        href: '/summary-survey',
    },
];

export default function SummarySurvey() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Ringkasan Survey" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Jumlah Alumni */}
                    <div>
                        <Card>
                            <div className="flex h-full flex-col items-center justify-center gap-2">
                                <h2 className="text-lg font-semibold">Jumlah Alumni Mengisi Tracer Study</h2>
                                <p className="text-3xl font-bold">1.234</p>
                                <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                            </div>
                        </Card>
                    </div>

                    {/* Jumlah Alumni Aktif pada Platform*/}
                    <div>
                        <Card>
                            <div className="flex h-full flex-col items-center justify-center gap-2">
                                <h2 className="text-lg font-semibold">Partisipasi (%) vs total alumni</h2>
                                <p className="text-3xl font-bold">567</p>
                                <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                            </div>
                        </Card>
                    </div>

                    {/* Jumlah Alumni yang mengisi Tracer Study */}
                    <PieChartAlumniEmploymentDistribution className='row-span-3' />

                    <div>
                        <Card>
                            <div className="flex h-full flex-col items-center justify-center gap-2">
                                <h2 className="text-lg font-semibold">Rata-rata waktu tunggu kerja</h2>
                                <p className="text-3xl font-bold">3 bulan</p>
                                <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                            </div>
                        </Card>
                    </div>

                    <div>
                        <Card>
                            <div className="flex h-full flex-col items-center justify-center gap-2">
                                <h2 className="text-lg font-semibold">Persentase alumni sesuai bidang kerja</h2>
                                <p className="text-3xl font-bold">80%</p>
                                <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Ringkasan Tracer Study</h2>
                        <Button>Ekspor Excel</Button>
                    </div>
                    <TableDemo />
                </div>
            </div>
        </AppLayout>
    );
}

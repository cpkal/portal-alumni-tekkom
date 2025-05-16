import { BarChartAlumniGrowth } from '@/components/bar-chart-alumni-growth';
import { BarChartTotalAlumniSubmitTracerStudy } from '@/components/bar-chart-total-alumni-submit-tracer-study';
import { PieChartAlumniEmploymentDistribution } from '@/components/pie-chart-alumni-employment-distribution';
import { StackedBarAlumniEmployedComparison } from '@/components/stacked-bar-alumni-employed-comparison';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Statistik Alumni',
        href: '/statistics',
    },
];

const topJobs: any = [
    {
        name: 'Software Engineer',
    },
    {
        name: 'Mechatronic Engineer'
    },
    {
        name: 'Cybersecurity'
    },
    {
        name: 'Network Engineer'
    },
    {
        name: 'AI Specialist'
    }
]

export default function Statistics() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Statistik Alumni" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border"> */}

                    {/* </div> */}
                    {/* Jumlah Alumni */}
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Alumni</h2>
                            <p className="text-3xl font-bold">1.234</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    {/* Jumlah Alumni Aktif pada Platform*/}
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Alumni Aktif pada Platform</h2>
                            <p className="text-3xl font-bold">567</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    {/* Jumlah Alumni yang mengisi Tracer Study */}
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Alumni mengisi Tracer Study</h2>
                            <p className="text-3xl font-bold">345</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Feedback Alumni</h2>
                            <p className="text-3xl font-bold">1.234</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Jumlah Alumni Update Profil</h2>
                            <p className="text-3xl font-bold">1.234</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            <h2 className="text-lg font-semibold">Rata-Rata Waktu Tunggu Setelah Lulus</h2>
                            <p className="text-3xl font-bold">3 Bulan</p>
                            <p className="text-sm text-gray-500">Data diambil dari database alumni</p>
                        </div>
                    </Card>

                    {/* top 5 pekerjaan dari lulusan */}
                    <Card>
                        <div className="flex h-full flex-col items-center justify-center gap-2">
                            {/* table */}
                            <h2 className="text-lg font-semibold">Top 5 Pekerjaan Alumni</h2>
                            <Table className='p-5'>
                                <TableCaption>Top 5 list alumni.</TableCaption>
                                <TableBody>
                                    {topJobs.map((job: any) => (
                                        <TableRow key={job.id}>
                                            <TableCell>{job.name}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Card>

                    <div>
                        <BarChartTotalAlumniSubmitTracerStudy />
                    </div>

                    <div>
                        <BarChartAlumniGrowth />
                    </div>

                    <div>
                        <StackedBarAlumniEmployedComparison />
                    </div>

                    <div>
                        <PieChartAlumniEmploymentDistribution />
                    </div>
                </div>
                {/* <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div> */}
            </div>
        </AppLayout>
    );
}

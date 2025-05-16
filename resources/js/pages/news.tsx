import { BarChartAlumniGrowth } from '@/components/bar-chart-alumni-growth';
import { BarChartTotalAlumniSubmitTracerStudy } from '@/components/bar-chart-total-alumni-submit-tracer-study';
import { PieChartAlumniEmploymentDistribution } from '@/components/pie-chart-alumni-employment-distribution';
import { StackedBarAlumniEmployedComparison } from '@/components/stacked-bar-alumni-employed-comparison';
import { TableDemo } from '@/components/table-demo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Berita',
        href: '/news',
    },
];

export default function News() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Berita" />
            <Card className='mx-4'>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="flex justify-between">
                        <h2 className='font-semibold' >Daftar Berita</h2>
                        <div>
                            <Button>Tambah Berita</Button>
                        </div>
                    </div>
                    <TableDemo />
                </div>
            </Card>
        </AppLayout>
    );
}

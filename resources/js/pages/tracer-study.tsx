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
        title: 'Tracer Study',
        href: '/tracer-study',
    },
];

export default function TracerStudy() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tracer Study" />
            <Card className='mx-4'>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="flex justify-between">
                        <h2 className='font-semibold' >Daftar Tracer Study</h2>
                    </div>
                    <TableDemo />
                </div>
            </Card>
        </AppLayout>
    );
}

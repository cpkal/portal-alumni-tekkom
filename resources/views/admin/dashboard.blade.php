@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h4 class="fw-bold">Dashboard Admin</h4>
    </div>

    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <div class="row g-4 mb-4">
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">User</h5>
                    <p class="display-6">{{ $userCount }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">Tracer Study</h5>
                    <p class="display-6">{{ $tracerStudyCount }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">Lowongan</h5>
                    <p class="display-6">{{ $jobCount }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">Forum</h5>
                    <p class="display-6">{{ $forumCount }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">Acara</h5>
                    <p class="display-6">{{ $eventCount }}</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card shadow border-0">
                <div class="card-body text-center">
                    <h5 class="card-title">Berita</h5>
                    <p class="display-6">{{ $newsCount }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="card shadow border-0">
        <div class="card-header bg-white">
            <h5 class="mb-0">Statistik Tracer Study</h5>
        </div>
        <div class="card-body">
            <canvas id="tracerStudyChart" height="100"></canvas>
        </div>
    </div>
</div>
@endsection

@section('script')
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const years = @json($tracerStudyChart['years']);
    const studyCount = @json($tracerStudyChart['studyCount']);
    const workCount = @json($tracerStudyChart['workCount']);
    const avgSalary = @json($tracerStudyChart['avgSalary']);
    const ctx = document.getElementById('tracerStudyChart').getContext('2d');
    const tracerStudyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: 'Lanjut Studi',
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    data: studyCount,
                },
                {
                    label: 'Bekerja',
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    data: workCount,
                },
                {
                    label: 'Gaji Bulanan (Rata-rata)',
                    backgroundColor: 'rgba(255, 159, 64, 0.6)',
                    data: avgSalary,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Jumlah Alumni'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: 'Rata-rata Gaji (Rp)'
                    }
                }
            }
        }
    });
</script>
@endsection

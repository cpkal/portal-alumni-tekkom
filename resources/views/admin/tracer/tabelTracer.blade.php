@extends('layouts.app')
@section('title', 'Berita')
@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>Tracer Study</h4>
        {{-- <a href="{{ route('admin.berita.createBerita') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg"></i> Add Berita
        </a> --}}
    </div>

    @if (session('success'))
      <div class="alert alert-success alert-dismissible fade show" role="alert">
          {{ session('success') }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    @endif

    <div class="card">
        <div class="card-body table-responsive">
            <table class="table table-hover align-middle">
                <thead class="table-primary">
                    <tr>
                        <th>No</th> 
                        <th>Nama Alumni</th>
                        <th>NIM</th>
                        <th>Tahun Lulus</th>
                        <th>Nomor HP</th>
                        <th>Diisi Pada</th>
                        <th>Studi Lanjut?</th>
                        <th>Bekerja?</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($tracers as $index => $tracer)
                    <tr>
                        <td>{{ $tracers->firstItem() + $index }}</td>
                        <td>{{ $tracer->full_name }}</td>
                        <td>{{ $tracer->nim }}</td>
                        <td>{{ $tracer->graduation_year }}</td>
                        <td>{{ $tracer->active_phone_number }}</td>
                        
                        <td>{{ $tracer->created_at }}</td>
                        <td>
                            @if ($tracer->is_continuing_study)
                                <span class="badge bg-success">Ya</span>
                            @else
                                <span class="badge bg-danger">Tidak</span>
                            @endif
                        </td>

                        <td>
                            @if ($tracer->is_continuing_working)
                                <span class="badge bg-success">Ya</span>
                            @else
                                <span class="badge bg-danger">Tidak</span>
                            @endif
                        </td>
                        <td>
                            @if ($tracer->status == 'submitted')
                                <span class="badge bg-warning">Submitted</span>
                            @elseif ($tracer->status == 'reviewed')
                                <span class="badge bg-success">Reviewed</span>
                            @elseif ($tracer->status == 'rejected')
                                <span class="badge bg-danger">Rejected</span>
                            @else
                                <span class="badge bg-secondary">Unknown</span>
                            @endif
                        </td>
                        <td>
                            {{-- approve --}}
                            <a href="{{ route('admin.tracer.review', $tracer->id) }}" class="text-success me-2" onclick="return confirm('Apakah Anda yakin ingin menyetujui tracer study ini?')">
                                <i class="bi bi-check-circle"></i>
                            </a>

                            {{-- reject --}}
                            <a href="{{ route('admin.tracer.reject', $tracer->id) }}" class="text-danger me-2" onclick="return confirm('Apakah Anda yakin ingin menolak tracer study ini?')">
                                <i class="bi bi-x-circle"></i>
                            </a>

                            {{-- see detail --}}
                            <a href="{{ route('admin.tracer.show', $tracer->id) }}" class="text-primary">
                                <i class="bi bi-eye"></i>
                            </a>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="9">Belum ada data berita</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-3">
                <small>Showing {{ $tracers->firstItem() }}-{{ $tracers->lastItem() }} of {{ $tracers->total() }} users</small>
                {{ $tracers->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

@extends('layouts.app')
@section('title', 'Lowongan Kerja')
@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>Lowongan Kerja</h4>
        <a href="{{ route('admin.lowongan.createLoker') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg"></i> Add Loker
        </a>
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
                        <th>ID</th>
                        <th>Poster</th>
                        <th>Nama Perusahaan</th>
                        <th>Posisi</th>
                        <th>Jenis</th>
                        <th>Situs</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($lowongans as $index => $lowongan)
                    <tr>
                        <td>{{ $lowongans->firstItem() + $index }}</td>
                        <td>{{ $lowongan->id }}</td> 
                        <td>
                          @if($lowongan->poster)
                            <img src="{{ asset('storage/'. $lowongan->poster) }}" class="rounded" width="32" height="32" alt="poster">
                          @endif
                        </td>
                        <td>{{ $lowongan->company_name }}</td>
                        <td>{{ $lowongan->job_title }}</td>
                        <td>{{ strtoupper($lowongan->job_type) }}</td>
                        <td>
                            @if($lowongan->apply_link)
                                <a href="{{ $lowongan->apply_link }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" >Detail</a>
                            @else
                                Tidak tersedia
                            @endif
                        </td>
                        <td>
                            <a href="{{ route('admin.lowongan.editLoker', $lowongan->id) }}" class="text-primary me-2">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <form action="{{ route('admin.lowongan.destroy', $lowongan->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-link text-danger p-0" onclick="return confirm('Hapus lowongan ini?')">
                                    <i class="bi bi-trash3"></i>
                                </button>
                            </form>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td colspan="9">Belum ada data lowongan</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="d-flex justify-content-between align-items-center mt-3">
                <small>Showing {{ $lowongans->firstItem() }}-{{ $lowongans->lastItem() }} of {{ $lowongans->total() }} users</small>
                {{ $lowongans->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

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
                        {{-- <th>Status</th> --}}
                        <th>Diisi Pada</th>
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
                        {{-- <td>{{ $tracer->status }}</td> --}}
                        <td>{{ $tracer->created_at }}</td>
                        <td>
                            <a href="{{ route('admin.berita.editBerita', $tracer->id) }}" class="text-primary me-2">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <form action="{{ route('admin.berita.destroy', $tracer->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-link text-danger p-0" onclick="return confirm('Hapus berita ini?')">
                                    <i class="bi bi-trash3"></i>
                                </button>
                            </form>
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

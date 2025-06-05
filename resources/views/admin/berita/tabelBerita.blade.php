@extends('layouts.app')
@section('title', 'Berita')
@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>Berita</h4>
        <a href="{{ route('admin.berita.createBerita') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg"></i> Add Berita
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
                        <th>Image</th>
                        <th>Title</th>
                        <th>Is Published</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($beritas as $index => $berita)
                    <tr>
                        <td>{{ $beritas->firstItem() + $index }}</td>
                        <td>{{ $berita->id }}</td> 
                        <td>
                          @if($berita->image)
                            <img src="{{ asset('storage/' . $berita->image) }}" class="rounded" width="32" height="32" alt="poster">
                          @endif
                        </td>
                        <td>{{ $berita->title }}</td>
                        <td>
                            <span class="badge {{ $berita->is_published ? 'bg-success' : 'bg-secondary' }}">
                                {{ $berita->is_published ? 'Published' : 'Draft' }}
                            </span>
                        </td>
                        <td>
                            <a href="{{ route('admin.berita.editBerita', $berita->id) }}" class="text-primary me-2">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <form action="{{ route('admin.berita.destroy', $berita->id) }}" method="POST" class="d-inline">
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
                <small>Showing {{ $beritas->firstItem() }}-{{ $beritas->lastItem() }} of {{ $beritas->total() }} users</small>
                {{ $beritas->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

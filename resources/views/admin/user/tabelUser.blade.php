@extends('layouts.app')
@section('title', 'Manajemen User')
@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>Manajemen User</h4>
        <div class="flex gap-2">
            <a href="{{ route('admin.user.export') }}" class="btn btn-success">
                <i class="bi bi-file-earmark-excel"></i> Ekspor Data Alumni
            </a>
            <a href="{{ route('admin.user.create') . '?acc_type=alumni' }}" class="btn btn-primary">
                <i class="bi bi-plus-lg"></i> Buat Alumni
            </a>
            <a href="{{ route('admin.user.create') . '?acc_type=admin' }}" class="btn btn-secondary">
                <i class="bi bi-plus-lg"></i> Buat Admin
            </a>
        </div>
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
                        <th>Email</th>
                        <th>Role</th>
                        <th>Terverifikasi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($users as $index => $user)
                    <tr>
                        <td>{{ $users->firstItem() + $index }}</td>
                        <td>{{ $user->id }}</td> 
                        <td>{{ $user->email }}</td>
                        <td>
                            @if($user->role == 'admin')
                                <span class="badge bg-secondary">Admin</span>
                            @elseif($user->role == 'alumni')
                                <span class="badge bg-primary">Alumni</span>
                            @else
                                <span class="badge bg-light text-dark">Unknown</span>
                            @endif
                        <td>
                            <span class="badge {{ $user->is_verified ? 'bg-success' : 'bg-secondary' }}">
                                {{ $user->is_verified ? 'Terverifikasi' : 'Belum Terverifikasi' }}
                            </span>
                        </td>
                        <td class="d-flex align-items-center gap-2">
                            {{-- button verifikasi --}}
                            {{-- button edit --}}
                            {{-- button verifikasi --}}
                            <form action="{{ route('admin.user.verify', $user->id) }}" method="POST" class="d-inline">
                                @csrf
                                <button class="btn btn-link text-success p-0" onclick="return confirm('Verifikasi akun ini?')">
                                    <i class="bi bi-check-circle"></i>
                                </button>
                            </form>
                            <a href="{{ route('admin.user.edit', $user->id) . '?acc_type=' . $user->role }}" class="text-primary me-2">
                                <i class="bi bi-pencil-square"></i>
                            </a>
                            <form action="{{ route('admin.user.destroy', $user->id) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-link text-danger p-0" onclick="return confirm('Hapus user ini?')">
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
                <small>Showing {{ $users->firstItem() }}-{{ $users->lastItem() }} of {{ $users->total() }} users</small>
                {{ $users->links() }}
            </div>
        </div>
    </div>
</div>
@endsection

@extends('layouts.app')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Manajemen Event Alumni</h2>

    {{-- Filter dan Pencarian --}}
    <form method="GET" class="row g-3 mb-4">
        <div class="col-md-4">
            <input type="text" name="search" class="form-control" placeholder="Cari nama event..." value="{{ request('search') }}">
        </div>
        <div class="col-md-3">
            <select name="type" class="form-select">
                <option value="">-- Semua Tipe --</option>
                <option value="Seminar" {{ request('type') == 'Seminar' ? 'selected' : '' }}>Seminar</option>
                <option value="Workshop" {{ request('type') == 'Workshop' ? 'selected' : '' }}>Workshop</option>
                <option value="Conference" {{ request('type') == 'Conference' ? 'selected' : '' }}>Conference</option>
                <option value="Virtual Meeting" {{ request('type') == 'Virtual Meeting' ? 'selected' : '' }}>Virtual Meeting</option>
            </select>
        </div>
        <div class="col-md-2">
            <button type="submit" class="btn btn-outline-primary w-100">Filter</button>
        </div>
    </form>

    {{-- Tombol Tambah --}}
    <div class="mb-3 text-end">
        <a href="{{ route('admin.events.create') }}" class="btn btn-primary">
            Tambah Event
        </a>
    </div>

    {{-- Tabel Event --}}
    <div class="table-responsive">
        <table class="table table-bordered table-hover align-middle">
            <thead class="table-dark">
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Tipe</th>
                    <th>Tanggal</th>
                    <th>Jam</th>
                    <th>Lokasi</th>
                    <th>Penyelenggara</th>
                    <th>Link Registrasi</th>
                    <th>Bisa Daftar Umum</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($events as $index => $event)
                <tr>
                    <td>{{ $events->firstItem() + $index }}</td>
                    <td>{{ $event->id }}</td>
                    <td>{{ $event->event_name }}</td>
                    <td>{{ $event->event_type }}</td>
                    <td>{{ $event->event_date }}</td>
                    <td>
                        {{ $event->event_time }}
                    </td>
                    <td>{{ $event->event_location }}</td>
                    <td>{{ $event->event_organizer }}</td>
                    <td>
                        @if ($event->event_link)
                            <a href="{{ $event->event_link }}" target="_blank" class="btn btn-sm btn-outline-success">Link</a>
                        @else
                            <span class="text-muted">-</span>
                        @endif
                    </td>
                    <td>
                        @if ($event->public_can_register)
                            <span class="badge bg-success">Ya</span>
                        @else
                            <span class="badge bg-secondary">Tidak</span>
                        @endif
                    </td>
                    <td>
                        <!-- Detail modal trigger -->
                        <button class="btn btn-sm btn-info text-white" data-bs-toggle="modal" data-bs-target="#detailModal{{ $event->id }}">Detail</button>
                        <a href="{{ route('admin.events.edit', $event->id) }}" class="btn btn-sm btn-warning">Edit</a>
                        <form action="{{ route('admin.events.destroy', $event->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Yakin ingin menghapus event ini?');">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-sm btn-danger">Hapus</button>
                        </form>
                    </td>
                </tr>

                <!-- Modal Detail Event -->
                <div class="modal fade" id="detailModal{{ $event->id }}" tabindex="-1" aria-labelledby="detailModalLabel{{ $event->id }}" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="detailModalLabel{{ $event->id }}">Detail Event: {{ $event->event_name }}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <p><strong>Deskripsi:</strong></p>
                                <p>{{ $event->event_description ?: '-' }}</p>
                                <p><strong>Jam Event:</strong> {{ $event->event_time ?? '-' }}</p>

                                @if ($event->event_image)
                                    <p><strong>Gambar Event:</strong></p>
                                    <img src="{{ asset('storage/' . $event->event_image) }}" alt="Event Image" class="img-fluid rounded">
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                @empty
                <tr>
                    <td colspan="9" class="text-center">Belum ada event.</td>
                </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    {{-- Pagination --}}
    <div class="mt-3">
        {{ $events->withQueryString()->links() }}
    </div>
</div>
@endsection

@extends('layouts.app')

@section('title', isset($events) ? 'Edit Event' : 'Tambah Event')

@section('content')
<div class="container mt-4">
    <div class="card mb-4">
        <div class="card-body">
            <h5 class="card-title">{{ isset($events) ? 'Edit Event' : 'Tambah Event Baru' }}</h5>

            {{-- Menampilkan pesan error validasi --}}
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul class="mb-0">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ isset($events) ? route('admin.events.update', $events->id) : route('admin.events.store') }}" method="POST">
                @csrf
                @if(isset($events)) @method('PUT') @endif

                <div class="row g-3">
                    <div class="col-md-6">
                        <label for="event_name" class="form-label">Nama Event</label>
                        <input type="text" name="event_name" class="form-control" value="{{ old('event_name', $events->event_name ?? '') }}">
                    </div>
                    <div class="col-md-6">
                        <label for="event_type" class="form-label">Tipe Event</label>
                        <select name="event_type" class="form-select">
                            <option value="Seminar" {{ old('event_type', $events->event_type ?? '') == 'Seminar' ? 'selected' : '' }}>Seminar</option>
                            <option value="Workshop" {{ old('event_type', $events->event_type ?? '') == 'Workshop' ? 'selected' : '' }}>Workshop</option>
                            <option value="Conference" {{ old('event_type', $events->event_type ?? '') == 'Conference' ? 'selected' : '' }}>Conference</option>
                            <option value="Virtual Meeting" {{ old('event_type', $events->event_type ?? '') == 'Virtual Meeting' ? 'selected' : '' }}>Virtual Meeting</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="event_date" class="form-label">Tanggal Event</label>
                        <input type="date" name="event_date" class="form-control" 
                         value="{{ old('event_date', isset($events) ? \Carbon\Carbon::parse($events->event_date)->format('Y-m-d') : '') }}">
                    </div>
                    <div class="col-md-6">
                        <label for="event_time" class="form-label">Jam Event</label>
                        <input type="time" name="event_time" class="form-control" 
                            value="{{ old('event_time', isset($events) && $events->event_time ? $events->event_time : '') }}">
                    </div>

                    <div class="col-md-6">
                        <label for="event_location" class="form-label">Lokasi</label>
                        <input type="text" name="event_location" class="form-control" value="{{ old('event_location', $events->event_location ?? '') }}">
                    </div>
                    <div class="col-md-6">
                        <label for="event_organizer" class="form-label">Penyelenggara</label>
                        <input type="text" name="event_organizer" class="form-control" value="{{ old('event_organizer', $events->event_organizer ?? '') }}">
                    </div>
                    <div class="col-md-6">
                        <label for="event_link" class="form-label">Link Registrasi</label>
                        <input type="url" name="event_link" class="form-control" value="{{ old('event_link', $events->event_link ?? '') }}">
                    </div>
                    <div class="col-md-12">
                        <label for="event_description" class="form-label">Deskripsi</label>
                        <textarea name="event_description" rows="4" class="form-control">{{ old('event_description', $events->event_description ?? '') }}</textarea>
                    </div>
                    <div class="form-check col-md-6 mt-2">
                        <input type="hidden" name="public_can_register" value="0">
                        <input class="form-check-input" type="checkbox" name="public_can_register" id="public_can_register" value="1"
                            {{ old('public_can_register', isset($events) ? $events->public_can_register : false) ? 'checked' : '' }}>
                        <label class="form-check-label" for="public_can_register">Bisa didaftarkan oleh umum</label>
                    </div>


                    </div>
                    <div class="text-end mt-3">
                        <button type="submit" class="btn btn-success">{{ isset($events) ? 'Perbarui' : 'Simpan' }}</button>
                        <button type="button" class="btn btn-warning" onclick="resetForm()">Reset</button>

    <script>
        function resetForm() {
            const form = document.querySelector('form');
            form.reset();
                form.querySelectorAll('input[type="text"], input[type="url"], textarea').forEach(el => el.value = '');
                form.querySelectorAll('input[type="date"], input[type="time"]').forEach(el => el.value = '');
                form.querySelectorAll('select').forEach(el => el.selectedIndex = 0);
                form.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);

        }
    </script>

                            <a href="{{ route('admin.events.index') }}" class="btn btn-secondary">Batal</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

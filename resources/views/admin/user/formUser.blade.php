@extends('layouts.app')

@section('title', $user ? 'Edit Akun' : 'Tambah Akun')

@section('content')
<div class="container">
    <h4 class="mb-4">{{ $user ? 'Edit' : 'Tambah' }} Akun {{ request()->query('acc_type') == 'alumni' ? 'Alumni' : 'Admin' }}</h4>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ $user ? route('admin.user.update', $user->id) : route('admin.user.store') }}" method="POST" enctype="multipart/form-data">
        {{-- CSRF token for security --}}
        @csrf
        @if($user)
            @method('PUT')
        @endif

        {{-- hidden input acc_type --}}
        <input type="hidden" name="acc_type" value="{{ request()->query('acc_type', 'alumni') }}">

        {{-- if acc_type is alumni, show additional fields --}}

        <h5>Data Akun</h5>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="{{ old('email', $user->email ?? '') }}" required>
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password {{ $user ? 'Baru' : '' }}</label>
            <input type="password" class="form-control" id="password" name="password" {{ $user ? '' : 'required' }}>
            <small class="form-text text-muted">Kosongkan jika tidak ingin mengubah password.</small>
        </div>

        <div class="mb-3">
            <label for="name" class="form-label">Nama</label>
            <input type="text" class="form-control" id="name" name="name" value="{{ old('name', $user->name ?? '') }}" required>
        </div>

        {{-- is verified checkbox --}}
        <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="is_verified" name="is_verified" {{ $user && $user->is_verified ? 'checked' : '' }}>
            <label class="form-check-label" for="is_verified">Terverifikasi</label>
        </div>

        @if(request()->query('acc_type') == 'alumni')
            <h5>Data Alumni</h5>
            <div class="mb-3">
                <label for="nim" class="form-label">NIM</label>
                <input type="text" class="form-control" id="nim" name="nim" value="{{ old('nim', $alumni->nim ?? '') }}" required>
            </div>

            {{-- fullname --}}
            <div class="mb-3">
                <label for="fullname" class="form-label">Nama Lengkap</label>
                <input type="text" class="form-control" id="fullname" name="fullname" value="{{ old('fullname', $alumni->fullname ?? '') }}" required>
            </div>

            {{-- graduation year --}}
            <div class="mb-3">
                <label for="graduation_year" class="form-label">Tahun Lulus</label>
                <input type="number" class="form-control" id="graduation_year" name="graduation_year" value="{{ old('graduation_year', $alumni->graduation_year ?? '') }}" required>
            </div>

            <div class="mb-3">
                <label for="active_phone_number" class="form-label">Nomor Telepon Aktif</label>
                <input type="text" class="form-control" id="active_phone_number" name="active_phone_number" value="{{ old('active_phone_number', $alumni->active_phone_number ?? '') }}" required>
            </div>

            <div class="mb-3">
                <label for="date_of_birth" class="form-label">Tanggal Lahir</label>
                <input type="date" class="form-control" id="date_of_birth" name="date_of_birth" value="{{ old('date_of_birth', $alumni->date_of_birth ?? '') }}" required>
            </div>

            <div class="mb-3">
                <label for="short_description" class="form-label">Deskripsi Singkat</label>
                <textarea class="form-control" id="short_description" name="short_description" rows="3" required>{{ old('short_description', $alumni->short_description ?? '') }}</textarea>
            </div>

        @endif

        <button type="submit" class="btn btn-primary">
            <i class="bi {{ $user ? 'bi-pencil' : 'bi-plus-lg' }} me-1"></i>
            {{ $user ? 'Update' : 'Simpan' }}
        </button>
        <a href="{{ route('admin.berita.tabelBerita') }}" class="btn btn-secondary">Batal</a>
    </form>
</div>
@endsection

@section('script')
<script>
    const {
            ClassicEditor,
            Essentials,
            Bold,
            Italic,
            Font,
            Paragraph
        } = CKEDITOR;

    ClassicEditor
        .create(document.querySelector('#content'), {
            licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODA2MTc1OTksImp0aSI6ImI3ZDM1MWM0LWUwNDYtNDM0ZC05YjQwLTkzODBmMDE3ZGUyNyIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIl0sInZjIjoiOGJjZmNjYTgifQ.dB7B9JVZViP2A8iHfWhMGDE3g229cTV6olkR6kLvRshLR96KueT_DuxpXOTx5cZpYdeZ7kmgJjoC5Hok4gQoAA',
            plugins: [Essentials, Bold, Italic, Font, Paragraph],
            toolbar: ['bold', 'italic', 'fontSize', 'fontFamily', 'undo', 'redo'],
            fontSize: {
                options: [9, 11, 13, 'default', 17, 19, 21]
            },
            fontFamily: {
                options: [
                    'default',
                    'Arial, Helvetica, sans-serif',
                    'Courier New, Courier, monospace',
                    'Georgia, serif',
                    'Lucida Sans Unicode, Lucida Grande, sans-serif',
                    'Tahoma, Geneva, sans-serif',
                    'Times New Roman, Times, serif',
                    'Verdana, Geneva, sans-serif'
                ]
            }
        })
        .catch(error => {
            console.error(error);
        });
</script>
@endsection
@extends('layouts.app')

@section('title', $lowongans ? 'Edit Lowongan' : 'Tambah Lowongan')

@section('content')
<div class="container">
    <h4 class="mb-4">{{ $lowongans ? 'Edit' : 'Tambah' }} Lowongan Kerja</h4>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ $lowongans ? route('admin.lowongan.updateLoker', $lowongans->id) : route('admin.lowongan.store') }}" method="POST">
        @csrf
        @if($lowongans)
            @method('PUT')
        @endif

        <div class="mb-3">
            <label for="poster" class="form-label">Poster (opsional)</label>
            <input type="file" class="form-control" id="poster" name="poster" accept="image/*">
        </div>
        
        {{-- job banner --}}
        <div class="mb-3">
            <label for="job_banner" class="form-label">Banner Loker (opsional)</label>
            <input type="file" class="form-control" id="job_banner" name="job_banner" accept="image/*">
        </div>

        <div class="mb-3">
            <label for="apply_link" class="form-label">Link Lowongan</label>
            <input type="url" name="apply_link" class="form-control" id="apply_link" placeholder="https://contoh.com"
                value="{{ old('apply_link', $lowongans->apply_link ?? '') }}" required>
        </div>

        <div class="mb-3">
            <label for="company_name" class="form-label">Nama Perusahaan</label>
            <input type="text" class="form-control" id="company_name" name="company_name"
                value="{{ old('company_name', $lowongans->company_name ?? '') }}" required>
        </div>

        <div class="mb-3">
            <label for="job_title" class="form-label">Posisi</label>
            <input type="text" class="form-control" id="job_title" name="job_title"
                value="{{ old('job_title', $lowongans->job_title ?? '') }}" required>
        </div>

        <div class="mb-3">Jenis Pekerjaan</label>
            <label for="employment_type" class="form-label">employment_type Kerja</label>
            <select class="form-select" id="employment_type" name="employment_type" required>
                <option value="">-- Pilih employment_type --</option>
                @foreach(['full_time' => 'Full Time', 'part_time' => 'Part Time', 'internship' => 'Internship', 'freelance' => 'Freelance'] as $val => $label)
                    <option value="{{ $val }}" {{ old('employment_type', $lowongans->employment_type ?? '') == $val ? 'selected' : '' }}>
                        {{ $label }}
                    </option>
                @endforeach
            </select>
        </div>

        {{-- job type --}}
        <div class="mb-3">
            <label for="job_type" class="form-label">Jenis Pekerjaan</label>
            <select class="form-select" id="job_type" name="job_type" required>
                <option value="">-- Pilih Jenis Pekerjaan --</option>
                @foreach(['remote' => 'Remote', 'on_site' => 'On Site', 'hybrid' => 'Hybrid'] as $val => $label)
                    <option value="{{ $val }}" {{ old('job_type', $lowongans->job_type ?? '') == $val ? 'selected' : '' }}>
                        {{ $label }}
                    </option>
                @endforeach
            </select>

        {{-- location --}}
        <div class="mb-3">
            <label for="location" class="form-label">Lokasi</label>
            <input type="text" class="form-control" id="location" name="location"
                value="{{ old('location', $lowongans->location ?? '') }}" required>
        </div>

        {{-- salary start salry end --}}
        <div class="mb-3">
            <label for="salary_start" class="form-label">Gaji Mulai (opsional)</label>
            <input type="number" class="form-control" id="salary_start" name="salary_start"
                value="{{ old('salary_start', $lowongans->salary_start ?? '') }}" placeholder="0">
        </div>
        <div class="mb-3">
            <label for="salary_end" class="form-label">Gaji Akhir (opsional)</label>
            <input type="number" class="form-control" id="salary_end" name="salary_end"
                value="{{ old('salary_end', $lowongans->salary_end ?? '') }}" placeholder="0">
        </div>

        {{-- qualifcations --}}
        {{-- ckeditor editor --}}
        <div class="mb-3">
            <label for="qualifications" class="form-label">Kualifikasi</label>
            <textarea class="form-control" id="qualifications" name="qualifications" rows="4"
                >{{ old('qualifications', $lowongans->qualifications ?? '') }}</textarea>
        </div>

        {{-- job_description --}}

        <button type="submit" class="btn btn-primary">
            <i class="bi {{ $lowongans ? 'bi-pencil' : 'bi-plus-lg' }} me-1"></i>
            {{ $lowongans ? 'Update' : 'Simpan' }}
        </button>
        <a href="{{ route('admin.lowongan.tabelLoker') }}" class="btn btn-secondary">Batal</a>
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
        .create(document.querySelector('#qualifications'), {
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
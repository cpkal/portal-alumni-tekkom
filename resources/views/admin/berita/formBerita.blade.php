@extends('layouts.app')

@section('title', $beritas ? 'Edit Berita' : 'Tambah Berita')

@section('content')
<div class="container">
    <h4 class="mb-4">{{ $beritas ? 'Edit' : 'Tambah' }} Berita</h4>

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ $beritas ? route('admin.berita.updateBerita', $beritas->id) : route('admin.berita.store') }}" method="POST" enctype="multipart/form-data">
        {{-- CSRF token for security --}}
        @csrf
        @if($beritas)
            @method('PUT')
        @endif

        <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="form-control" id="image" name="image" accept="image/*">
        </div>
        
       {{-- title --}}
        <div class="mb-3">
            <label for="title" class="form-label">Judul</label>
            <input type="text" class="form-control" id="title" name="title"
                value="{{ old('title', $beritas->title ?? '') }}" required>
        </div>

        {{-- ckeditor editor --}}
        <div class="mb-3">
            <label for="content" class="form-label">Berita</label>
            <textarea class="form-control" id="content" name="content" rows="4"
                >{{ old('content', $beritas->content ?? '') }}</textarea>
        </div>

         {{-- is publish --}}
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="is_published" name="is_published"
                {{ old('is_published', $beritas->is_published ?? false) ? 'checked' : '' }}>
            <label class="form-check-label" for="is_published">Publikasikan</label>
        </div>

        <button type="submit" class="btn btn-primary">
            <i class="bi {{ $beritas ? 'bi-pencil' : 'bi-plus-lg' }} me-1"></i>
            {{ $beritas ? 'Update' : 'Simpan' }}
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
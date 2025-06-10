@extends('layouts.app')

@section('title', 'Detail Tracer Study')

@section('content')
<div class="container">

    <h3>Info Pribadi</h3>
    <table class="table table-bordered">
        <tr>
            <th>Nama Lengkap</th>
            <td>{{ $tracer->full_name }}</td>
        </tr>
        <tr>
            <th>NIM</th>
            <td>{{ $tracer->nim }}</td>
        </tr>
        <tr>
            <th>Tahun Masuk</th>
            <td>{{ $tracer->enrollment_year }}</td>
        </tr>
        <tr>
            <th>Tahun Lulus</th>
            <td>{{ $tracer->graduation_year }}</td>
        </tr>
        <tr>
            <th>Nomor HP Aktif</th>
            <td>{{ $tracer->active_phone_number }}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>{{ $tracer->email }}</td>
        </tr>
        {{-- thesis --}}
        <tr>
            <th>Judul Skripsi</th>
            <td>{{ $tracer->undergraduate_thesis_title ?? 'Tidak ada' }}</td>
        </tr>

        <tr>
            <th>Alamat</th>
            <td>{{ $tracer->address }}</td>
        </tr>
    </table>

    {{-- Media sosial --}}
    <h3>Media Sosial</h3>
    <table class="table table-bordered">
        <tr>
            <th>GitHub</th>
            <td>{{ $tracer->github_name ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>LinkedIn</th>
            <td>{{ $tracer->linkedin_name ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Instagram</th>
            <td>{{ $tracer->instagram_name ?? 'Tidak ada' }}</td>
        </tr>
    </table>

    {{-- Studi Lanjut --}}
    <h3>Studi Lanjut</h3>
    <table class="table table-bordered">
        <tr>
            <th>Melanjutkan Studi?</th>
            <td>{{ $tracer->is_continuing_study ? 'Ya' : 'Tidak' }}</td>
        </tr>
        @if($tracer->is_continuing_study)
        <tr>
            <th>Nama Institusi</th>
            <td>{{ $tracer->institution_name ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Jurusan</th>
            <td>{{ $tracer->major ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Tingkat Pendidikan</th>
            <td>{{ $tracer->education_level ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Relevansi Studi Lanjut dengan Jurusan</th>
            <td>{{ $tracer->is_further_study_related_to_major ? 'Ya' : 'Tidak' }}</td>
        </tr>
        @endif
    </table>

    {{-- Karir --}}
    <h3>Karir</h3>
    <table class="table table-bordered">
        <tr>
            <th>Melanjutkan Bekerja?</th>
            <td>{{ $tracer->is_continuing_working ? 'Ya' : 'Tidak' }}</td>
        </tr>
        @if($tracer->is_continuing_working)
        <tr>
            <th>Nama Perusahaan</th>
            <td>{{ $tracer->company_name ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Alamat Perusahaan</th>
            <td>{{ $tracer->company_address ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Posisi Pekerjaan</th>
            <td>{{ $tracer->job_position ?? 'Tidak ada' }}</td>
        </tr>
        <tr>
            <th>Bidang Usaha Perusahaan</th>
            <td>{{ $tracer->company_business_field ?? 'Tidak ada' }}</td>
        </tr>
        @endif
        <tr>
            <th>Waktu Tunggu Pekerjaan Pertama</th>
            <td>
                @switch($tracer->wait_time_first_job)
                    @case(1) Kurang dari 1 bulan @break
                    @case(2) 1 – < 3 bulan @break
                    @case(3) 3 – < 6 bulan @break
                    @case(4) 6 – < 12 bulan @break
                    @case(5) 1 – < 2 tahun @break
                    @case(6) 2 tahun atau lebih @break
                @endswitch
            </td>
        </tr>
        <tr>
            <th>Relevansi Pekerjaan dengan Jurusan</th>
            <td>{{ $tracer->is_job_related_to_major ? 'Ya' : 'Tidak' }}</td>
        </tr>
        <tr>
            <th>Gaji Bulanan</th>
            <td>{{ $tracer->monthly_salary ? 'Rp ' . number_format($tracer->monthly_salary, 2, ',', '.') : 'Tidak ada' }}</td>
        </tr>
    </table>

    {{-- Evaluasi Pendidikan --}}
    <h3>Evaluasi Pendidikan</h3>
    <table class="table table-bordered">
        <tr>
            <th>Kepuasan Studi {{ $tracer->study_satisfaction}}</th>
            <td>
                @switch($tracer->study_satisfaction)
                    @case(4) Sangat Puas @break
                    @case(3) Puas @break
                    @case(2) Tidak Puas @break
                    @case(1) Sangat Tidak Puas @break
                @endswitch
            </td>
        </tr>
        <tr>
            <th>Kesesuaian Kurikulum</th>
            <td>
                @switch($tracer->curriculum_suitability)
                    @case(4) Sangat Sesuai @break
                    @case(3) Sesuai @break
                    @case(2) Tidak Sesuai @break
                    @case(1) Sangat Tidak Sesuai @break
                @endswitch
            </td>
        </tr>
        <tr>
            <th>Kepuasan Fasilitas</th>
            <td>
                @switch($tracer->facilities_satisfaction)
                    @case(4) Sangat Puas @break
                    @case(3) Puas @break
                    @case(2) Tidak Puas @break
                    @case(1) Sangat Tidak Puas @break
                @endswitch
            </td>
        </tr>
        <tr>
            <th>Kesesuaian Kompetensi</th>
            <td>{{ $tracer->competency_suitability ? 'Ya' : 'Tidak' }}</td>
        </tr>
        <tr>
            <th>Saran</th>
            <td>{{ $tracer->suggestion ?? 'Tidak ada' }}</td>
        </tr>
    </table>
    <a href="{{ route('admin.tracer.tabelTracer') }}" class="btn btn-secondary">Kembali ke Daftar Tracer Study</a>
    

    {{-- $table->string('full_name');
            $table->string('nim');
            $table->string('enrollment_year');
            $table->string('graduation_year');
            $table->string('undergraduate_thesis_title')->nullable();
            $table->string('address');
            $table->string('active_phone_number');
            $table->string('email');

            // social media
            $table->string('github_name')->nullable();
            $table->string('linkedin_name')->nullable();
            $table->string('instagram_name')->nullable();

            // further study info
            $table->string('is_continuing_study');
            $table->string('institution_name')->nullable();
            $table->string('major')->nullable();
            $table->string('education_level')->nullable();
            $table->boolean('is_further_study_related_to_major')->nullable();

            // career info
            $table->string('is_continuing_working');
            $table->string('company_name')->nullable();
            $table->string('company_address')->nullable();
            $table->string('job_position')->nullable();
            $table->string('company_business_field')->nullable();
            // | Value (Bisa disimpan di DB) | Label yang Ditampilkan |
// | --------------------------- | ---------------------- |
// | `1`                         | Kurang dari 1 bulan    |
// | `2`                         | 1 – < 3 bulan          |
// | `3`                         | 3 – < 6 bulan          |
// | `4`                         | 6 – < 12 bulan         |
// | `5`                         | 1 – < 2 tahun          |
// | `6`                         | 2 tahun atau lebih     |

            $table->enum('wait_time_first_job', [1,2,3,4,5,6]);
            $table->boolean('is_job_related_to_major')->nullable();
            $table->decimal('monthly_salary',10,2)->default(0)->nullable();

            // education evalution
            // likert scale
            $table->enum('study_satisfaction', [1,2,3,4]);
            $table->enum('curriculum_suitability', [1,2,3,4]);
            $table->enum('facilities_satisfaction', [1,2,3,4]);
            $table->boolean('competency_suitability');
            $table->text('suggestion')->nullable(); --}}
</div>
@endsection

@extends('layouts.publik.app')

@section('content')
<style>
    .section1 {
        background-color: #010169;
    }

    .bi {
        color: white;
    }
    
    .col-md-4 {
        color: white;
    }

    .container-card {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .hero-section {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bgalumni.png') center/cover no-repeat;
        height: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-primary-custom {
        background-color: rgba(1, 1, 105, 0.541);
        border: none;
        color: white;
        transition: all 0.3s ease;
    }

    .btn-primary-custom:hover {
        background-color: rgb(0, 0, 173);
        color: white;
        transform: translateY(-2px);
    }

    .btn-danger-custom {
        background-color: rgba(255, 0, 0, 0.39);
        border: none;
        color: white;
        transition: all 0.3s ease;
    }

    .btn-danger-custom:hover {
        background-color: rgba(231, 0, 0, 0.9);
        color: white;
        transform: translateY(-2px);
    }

    .info-card {
        transition: transform 0.3s ease;
    }

    .info-card:hover {
        transform: translateY(-5px);
    }

    .alumni-card {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .alumni-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    .alumni-photo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #f8f9fa;
        margin-bottom: 1rem;
    }

    .directory-section {
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/ui.jpg') center/cover no-repeat;
        padding: 80px 0;
        position: relative;
    }

    .job-image {
        max-height: 250px;
        object-fit: cover;
        transition: transform 0.3s ease;
        border-radius: 10px;
    }

    .job-image:hover {
        transform: scale(1.05);
    }

    .event-section {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/event.png') center/cover no-repeat;
        padding: 60px 0;
        position: relative;
    }

    .event-card {
        background: linear-gradient(135deg, #010169 0%, #FF0000 100%);
        color: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 350px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    .event-card:hover {
        transform: translateY(-5px);
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      display: block;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.8;
    }

    .section-title {
        font-weight: 700;
        margin: 3rem 0 2rem 0;
        color: #333;
        position: relative;
    }

    .section-title::after {
        content: '';
        display: block;
        width: 50px;
        height: 3px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        margin: 0.5rem auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white !important;
    }

    @media (max-width: 768px) {
        .hero-section {
            height: 400px;
        }
        
        .hero-section h3 {
            font-size: 1.5rem;
        }
        
        .alumni-card {
            margin-bottom: 1rem;
        }

        .news-card-main {
        margin-bottom: 2rem;
        }
        
        .section-title {
            font-size: 1.8rem;
        }
        
        .news-card-side .card-body {
            padding: 1rem !important;
        }
    }

    /* News Cards Animation */
.news-card, .news-card-main, .news-card-side {
    transition: all 0.3s ease;
}

.news-card:hover, .news-card-main:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.news-card-side:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Image Hover Effect */
.news-card:hover img, .news-card-main:hover img {
    transform: scale(1.05);
}

/* Badge Styles */
.badge {
    font-size: 0.75rem;
    font-weight: 600;
}

/* Gradient Overlay */
.bg-gradient-to-t {
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
}

/* Loading state for news cards */
.news-card.loading {
    opacity: 0.7;
    pointer-events: none;
}

.news-card.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #010169;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}


    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }

    /* Loading animation */
    .loading {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
    }
</style>

<!-- Hero Section -->
<div id="beranda" class="hero-section py-2 text-white">
    <div class="container text-center">
        <h3 class="mb-3 fw-bold">Ikatan Alumni Teknik Komputer</h3>
        <p class="mb-4 fs-5">Membangun jaringan profesional yang kuat untuk masa depan yang gemilang</p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a href="#" class="btn btn-primary-custom px-4 py-2">REGISTRASI</a>
            <a href="#" class="btn btn-danger-custom px-4 py-2">ISI TRACER STUDY</a>
        </div>
    </div>
</div>

<!-- Info Cards Section -->
<div class="section1">
    <div class="container-card">
        <div class="row text-center">
            <div class="col-md-4 mb-4 info-card">
                <i class="bi bi-people display-4 mb-3"></i>
                <h5 class="fw-bold">Direktori Alumni</h5>
                <p class="mb-3">Temukan alumni Tekkom di seluruh Indonesia</p>
                <a href="#direktori" class="text-danger text-decoration-none fw-semibold">Lihat Direktori &gt;&gt;&gt;</a>
            </div>
            <div class="col-md-4 mb-4 info-card">
                <i class="bi bi-calendar-event display-4 mb-3"></i>
                <h5 class="fw-bold">Event</h5>
                <p class="mb-3">Ikuti berbagai acara menarik dari komunitas alumni</p>
                <a href="#event" class="text-danger text-decoration-none fw-semibold">Lihat Event &gt;&gt;&gt;</a>
            </div>
            <div class="col-md-4 mb-4 info-card">
                <i class="bi bi-briefcase display-4 mb-3"></i>
                <h5 class="fw-bold">Lowongan & Magang</h5>
                <p class="mb-3">Dapatkan kesempatan karir terbaik dari jaringan alumni</p>
                <a href="#lowongan" class="text-danger text-decoration-none fw-semibold">Lihat Lowongan & Magang &gt;&gt;&gt;</a>
            </div>
        </div>
    </div>
</div>

<!-- Statistik Section -->
    <div id="statistik" class="container py-5">
      <div class="row text-center mb-5">
        <div class="col-12">
          <h2 class="display-5 fw-bold mb-3">STATISTIK</h2>
          <p class="lead fw-bold">Data dan Pencapaian Alumni Teknik Komputer</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card border-0 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">Distribusi Alumni per Angkatan</h5>
              <canvas id="alumniChart"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card border-0 shadow">
            <div class="card-body">
              <h5 class="card-title text-primary">Bidang Pekerjaan</h5>
              <canvas id="jobChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- Direktori Alumni Section -->
<div id="direktori" class="directory-section text-white text-center">
    <div class="container">
        <h2 class="fw-bold mb-5">Temukan Alumni,<br>Bangun Koneksi</h2>

        <div class="row justify-content-center">
            <!-- Card Alumni 1 -->
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                <div class="alumni-card">
                    <img src="/images/profile-placeholder.png" class="alumni-photo" alt="Foto Alumni">
                    <h6 class="fw-bold text-dark">Feri Ilham</h6>
                    <p class="text-muted small mb-3">Software Engineer</p>
                    <a href="#" class="btn btn-danger btn-sm">Lihat Profile</a>
                </div>
            </div>

            <!-- Card Alumni 2 -->
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                <div class="alumni-card">
                    <img src="/images/profile-placeholder.png" class="alumni-photo" alt="Foto Alumni">
                    <h6 class="fw-bold text-dark">Haikal Putra</h6>
                    <p class="text-muted small mb-3">Data Analyst</p>
                    <a href="#" class="btn btn-danger btn-sm">Lihat Profile</a>
                </div>
            </div>

            <!-- Card Alumni 3 -->
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                <div class="alumni-card">
                    <img src="/images/profile-placeholder.png" class="alumni-photo" alt="Foto Alumni">
                    <h6 class="fw-bold text-dark">Ahmad Rafli</h6>
                    <p class="text-muted small mb-3">UI/UX Designer</p>
                    <a href="#" class="btn btn-danger btn-sm">Lihat Profile</a>
                </div>
            </div>
        </div>

        <a href="#" class="text-white mt-4 d-inline-block text-decoration-none fw-semibold fs-5">
            <em>LIHAT SEMUA ALUMNI &gt;&gt;</em>
        </a>
    </div>
</div>

<!-- Berita Terbaru Section -->
<div id="berita" class="news-section pb-5" style="background-color: #f8f9fa;">
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h2 class="section-title">BERITA TERBARU</h2>
                <p class="lead">Kabar terkini dari dunia alumni Teknik Komputer</p>
            </div>
        </div>

        <div class="row">
            <!-- Berita Utama -->
            <div class="col-lg-6 mb-4">
                <div class="card border-0 shadow-sm h-100 news-card-main">
                    <div class="position-relative overflow-hidden" style="height: 300px;">
                        <img src="/images/news-main.jpg" class="card-img-top h-100 w-100" style="object-fit: cover; transition: transform 0.3s ease;" alt="Berita Utama">
                        <div class="position-absolute top-0 start-0 m-3">
                            <span class="badge bg-danger px-3 py-2">HEADLINE</span>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-center mb-2">
                            <i class="bi bi-calendar3 text-muted me-2"></i>
                            <small class="text-muted">15 Desember 2024</small>
                            <span class="mx-2">•</span>
                            <i class="bi bi-person text-muted me-2"></i>
                            <small class="text-muted">Admin IATK</small>
                        </div>
                        <h4 class="card-title fw-bold mb-3">Alumni Teknik Komputer Raih Penghargaan Startup Terbaik 2024</h4>
                        <p class="card-text mb-3">Feri Ilham, alumni angkatan 2020, berhasil meraih penghargaan Startup Terbaik kategori Technology Innovation dalam ajang Indonesia Digital Awards 2024. Startup yang didirikannya, TechSolve, telah membantu lebih dari 500 UMKM go digital...</p>
                        <div class="mt-auto">
                            <a href="#" class="btn btn-primary-custom px-4">Baca Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Berita Sidebar -->
            <div class="col-lg-6">
                <div class="row">
                    <!-- Berita 1 -->
                    <div class="col-12 mb-3">
                        <div class="card border-0 shadow-sm news-card-side">
                            <div class="row g-0">
                                <div class="col-4">
                                    <div class="position-relative overflow-hidden h-100" style="min-height: 120px;">
                                        <img src="/images/news-1.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;" alt="Berita 1">
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="bi bi-calendar3 text-muted me-1"></i>
                                            <small class="text-muted">12 Desember 2024</small>
                                        </div>
                                        <h6 class="card-title fw-bold mb-2">Workshop "AI untuk Pemula" Sukses Digelar</h6>
                                        <p class="card-text small text-muted mb-2">Workshop yang diselenggarakan oleh IATK berhasil menarik 150 peserta dari berbagai kalangan...</p>
                                        <a href="#" class="text-decoration-none small fw-semibold">Baca selengkapnya &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 2 -->
                    <div class="col-12 mb-3">
                        <div class="card border-0 shadow-sm news-card-side">
                            <div class="row g-0">
                                <div class="col-4">
                                    <div class="position-relative overflow-hidden h-100" style="min-height: 120px;">
                                        <img src="/images/news-2.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;" alt="Berita 2">
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="bi bi-calendar3 text-muted me-1"></i>
                                            <small class="text-muted">10 Desember 2024</small>
                                        </div>
                                        <h6 class="card-title fw-bold mb-2">Program Mentoring Alumni Resmi Diluncurkan</h6>
                                        <p class="card-text small text-muted mb-2">Program mentoring yang menghubungkan alumni senior dengan mahasiswa aktif telah resmi dimulai...</p>
                                        <a href="#" class="text-decoration-none small fw-semibold">Baca selengkapnya &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 3 -->
                    <div class="col-12 mb-3">
                        <div class="card border-0 shadow-sm news-card-side">
                            <div class="row g-0">
                                <div class="col-4">
                                    <div class="position-relative overflow-hidden h-100" style="min-height: 120px;">
                                        <img src="/images/news-3.jpg" class="img-fluid h-100 w-100" style="object-fit: cover;" alt="Berita 3">
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center mb-2">
                                            <i class="bi bi-calendar3 text-muted me-1"></i>
                                            <small class="text-muted">8 Desember 2024</small>
                                        </div>
                                        <h6 class="card-title fw-bold mb-2">Kolaborasi IATK dengan Industri Teknologi</h6>
                                        <p class="card-text small text-muted mb-2">MoU baru ditandatangani untuk meningkatkan peluang kerja alumni di perusahaan teknologi terkemuka...</p>
                                        <a href="#" class="text-decoration-none small fw-semibold">Baca selengkapnya &gt;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Berita Lainnya -->
        <div class="row mt-4">
            <div class="col-12">
                <h4 class="fw-bold mb-4">Berita Lainnya</h4>
            </div>
            
            @for($i = 0; $i < 4; $i++)
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card border-0 shadow-sm h-100 news-card">
                    <div class="position-relative overflow-hidden" style="height: 200px;">
                        <img src="/images/news-{{ $i + 4 }}.jpg" class="card-img-top h-100 w-100" style="object-fit: cover;" alt="Berita {{ $i + 4 }}">
                        <div class="position-absolute bottom-0 start-0 end-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                            <small class="text-white">
                                <i class="bi bi-calendar3 me-1"></i>
                                {{ 5 - $i }} Desember 2024
                            </small>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title fw-bold mb-2">
                            @if($i == 0)
                                Hackathon TEKKOM 2024 Hadirkan Inovasi Terbaru
                            @elseif($i == 1)
                                Alumni Sukses Jadi CTO di Perusahaan Multinasional
                            @elseif($i == 2)
                                Webinar "Future of Technology" Raih 1000+ Peserta
                            @else
                                Beasiswa Alumni untuk Mahasiswa Berprestasi
                            @endif
                        </h6>
                        <p class="card-text small text-muted mb-3">
                            @if($i == 0)
                                Kompetisi coding terbesar yang diselenggarakan oleh jurusan Teknik Komputer berhasil menghadirkan 50+ tim dari seluruh Indonesia...
                            @elseif($i == 1)
                                Haikal Putra, alumni angkatan 2018, kini dipercaya memimpin divisi teknologi di salah satu perusahaan Fortune 500...
                            @elseif($i == 2)
                                Webinar internasional tentang masa depan teknologi menarik perhatian ribuan peserta dari berbagai negara...
                            @else
                                Program beasiswa yang didanai oleh alumni untuk mendukung mahasiswa kurang mampu yang berprestasi akademik tinggi...
                            @endif
                        </p>
                        <div class="mt-auto">
                            <a href="#" class="text-decoration-none small fw-semibold text-primary">Baca selengkapnya &gt;</a>
                        </div>
                    </div>
                </div>
            </div>
            @endfor
        </div>
        <!-- Tombol Lihat Semua -->
        <div class="text-center mt-4">
            <a href="#" class="btn btn-outline-primary px-5 py-2">
                Lihat Semua Berita
            </a>
        </div>
    </div>
</div>

<!-- Event Section -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

<div id="event" class="event-section text-white">
    <div class="container">
        <h2 class="text-center fw-bold mb-5">EVENT</h2>
        
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div class="swiper-slide d-flex justify-content-center">
                    <div class="event-card">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-calendar-event fs-4 me-2"></i>
                            <span class="badge bg-light text-dark">15 Des 2024</span>
                        </div>
                        <h5 class="fw-bold mb-3">Reuni Akbar Angkatan 2020</h5>
                        <p class="mb-4">Mari berkumpul kembali dan bernostalgia dengan teman-teman angkatan. Acara akan diisi dengan sharing session dan networking.</p>
                        <a href="#" class="btn btn-light btn-sm fw-semibold">DAFTAR SEKARANG</a>
                    </div>
                </div>

                <!-- Slide 2 -->
                <div class="swiper-slide d-flex justify-content-center">
                    <div class="event-card">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-briefcase fs-4 me-2"></i>
                            <span class="badge bg-light text-dark">20 Des 2024</span>
                        </div>
                        <h5 class="fw-bold mb-3">Job Fair TEKKOM 2024</h5>
                        <p class="mb-4">Kesempatan emas untuk bertemu dengan berbagai perusahaan ternama dan mendapatkan pekerjaan impian.</p>
                        <a href="#" class="btn btn-light btn-sm fw-semibold">DAFTAR SEKARANG</a>
                    </div>
                </div>

                <!-- Slide 3 -->
                <div class="swiper-slide d-flex justify-content-center">
                    <div class="event-card">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-laptop fs-4 me-2"></i>
                            <span class="badge bg-light text-dark">25 Des 2024</span>
                        </div>
                        <h5 class="fw-bold mb-3">Tech Talk: AI Revolution</h5>
                        <p class="mb-4">Seminar tentang perkembangan terkini Artificial Intelligence dan dampaknya terhadap industri teknologi.</p>
                        <a href="#" class="btn btn-light btn-sm fw-semibold">DAFTAR SEKARANG</a>
                    </div>
                </div>

                <!-- Slide 4 -->
                <div class="swiper-slide d-flex justify-content-center">
                    <div class="event-card">
                        <div class="d-flex align-items-center mb-3">
                            <i class="bi bi-people fs-4 me-2"></i>
                            <span class="badge bg-light text-dark">30 Des 2024</span>
                        </div>
                        <h5 class="fw-bold mb-3">Networking Night</h5>
                        <p class="mb-4">Malam networking informal untuk mempererat hubungan antar alumni dan berbagi pengalaman karir.</p>
                        <a href="#" class="btn btn-light btn-sm fw-semibold">DAFTAR SEKARANG</a>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            
            <!-- Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</div>

<!-- Lowongan Kerja Terbaru -->
<h2 class="text-center section-title">LOWONGAN KERJA</h2>
<div id="lowongan" class="container mb-5">
    <div class="row justify-content-center">
        @for($i = 0; $i < 4; $i++)
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
                <img src="/images/lowongan-kerja.jpg" class="card-img-top job-image" alt="Lowongan Kerja">
                <div class="card-body">
                    <h6 class="card-title fw-bold">Software Developer</h6>
                    <p class="card-text text-muted small">PT. Tech Innovation</p>
                    <p class="card-text small">Jakarta • Full Time</p>
                </div>
            </div>
        </div>
        @endfor
    </div>
    <div class="text-center">
        <a href="#" class="btn btn-outline-primary px-4">Lihat Semua Lowongan</a>
    </div>
</div>

<!-- Lowongan Magang Terbaru -->
<h2 class="text-center section-title">LOWONGAN MAGANG</h2>
<div id="magang" class="container mb-5">
    <div class="row justify-content-center">
        @for($i = 0; $i < 4; $i++)
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card border-0 shadow-sm h-100">
                <img src="/images/lowongan-magang.jpg" class="card-img-top job-image" alt="Lowongan Magang">
                <div class="card-body">
                    <h6 class="card-title fw-bold">Frontend Developer Intern</h6>
                    <p class="card-text text-muted small">PT. Digital Solutions</p>
                    <p class="card-text small">Bandung • 3 Bulan</p>
                </div>
            </div>
        </div>
        @endfor
    </div>
    <div class="text-center">
        <a href="#" class="btn btn-outline-danger px-4">Lihat Semua Magang</a>
    </div>
</div>

<!-- Script Swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script>
    //swiper
    document.addEventListener('DOMContentLoaded', function() {
        const swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        });
    });

    // Alumni Chart
    const alumniCtx = document.getElementById('alumniChart').getContext('2d');
    new Chart(alumniCtx, {
      type: 'bar',
      data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Jumlah Alumni',
          data: [180, 165, 192, 210, 225, 275],
          backgroundColor: '#010169',
          borderColor: '#010169',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Job Chart
    const jobCtx = document.getElementById('jobChart').getContext('2d');
    new Chart(jobCtx, {
      type: 'pie',
      data: {
        labels: ['Software Developer', 'Data Analyst', 'Network Engineer', 'UI/UX Designer', 'Project Manager'],
        datasets: [{
          data: [35, 20, 18, 15, 12],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          borderWidth: 2,
          borderColor: '#fff'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });

    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
          e.preventDefault();
          const originalText = this.innerHTML;
          this.innerHTML = '<span class="loading"></span> Loading...';
          this.disabled = true;
          
          setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
          }, 2000);
        }
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for news cards
    document.querySelectorAll('.news-card, .news-card-main, .news-card-side').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const link = this.querySelector('a');
                if (link && link.getAttribute('href') === '#') {
                    e.preventDefault();
                    
                    // Add loading state
                    this.classList.add('loading');
                    
                    setTimeout(() => {
                        this.classList.remove('loading');
                        // Here you would typically navigate to the full article
                        console.log('Navigate to full article');
                    }, 1500);
                }
            }
        });
    });

    // Smooth scroll for news section
    const newsLinks = document.querySelectorAll('a[href*="#berita"]');
    newsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const newsSection = document.querySelector('.news-section');
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Lazy loading effect for news images
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all news cards
    document.querySelectorAll('.news-card, .news-card-main, .news-card-side').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
</script>

@endsection
@php
    $isHome = request()->is('/');
@endphp

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Alumni TEKKOM</title>
  
  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>


  <style>
    :root {
      --primary-blue: #010169;
      --primary-red: #FF0000;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .btn-custom-red {
      background-color: #FF0000; /* merah Bootstrap */
      color: white;
      border: none;
    }

    .btn-custom-red:hover {
      background-color: #bb2d3b;
      color: white;
    }

    .btn-custom-outline-blue {
      background-color: transparent;
      color: white; /* biru Bootstrap */
      border: 1px solid #0d6efd;
    }

    .btn-custom-outline-blue:hover {
      background-color: #0d6efd;
      color: white;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text-dark);
    }

    /* Top header */
    .top-header {
      background: linear-gradient(135deg, var(--primary-blue), #010169);
      padding: 8px 20px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1001;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .top-header .btn {
      border-radius: 25px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .top-header .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    /* Navbar sticky */
    .navbar-custom {
      background: rgba(255, 255, 255, 0.555);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 50px;
      z-index: 1000;
      padding: 2px 0;
      box-shadow: 0 2px 20px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }

    .nav-link {
      font-weight: 600;
      color: var(--primary-blue) !important;
      position: relative;
      transition: all 0.3s ease;
      padding: 8px 16px !important;
      border-radius: 20px;
    }

    .nav-link i {
      color: var(--primary-blue) !important;
    }

    .nav-link:hover {
      color: var(--primary-red) !important;
      background: var(--light-blue);
      transform: translateY(-2px);
    }

    .nav-link:hover i {
      color: var(--primary-red) !important;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 50%;
      background: var(--primary-red);
      transition: all 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
      left: 0;
    }

    .navbar-brand img {
      height: 60px;
      transition: all 0.3s ease;
    }

    .navbar-brand img:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <!-- Top Header -->
  <div class="top-header d-flex justify-content-end gap-3">
    <a href="{{ route('login') }}" class="btn btn-custom-outline-blue btn-sm">
      <i class="bi bi-box-arrow-in-right me-1"></i>MASUK
    </a>
    <a href="{{ route('register') }}" class="btn btn-custom-red btn-sm">
      <i class="bi bi-person-plus me-1"></i>DAFTAR
    </a>
  </div>

  <!-- Sticky Navbar -->
  <nav class="navbar navbar-custom">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Kiri -->
      <div class="d-flex gap-3">
        <a href="{{ route('about') }}" class="nav-link">
          <i class="bi bi-info-circle me-1"></i>Tentang Kami
        </a>
        <a href="{{ route('statistik') }}" class="nav-link">
          <i class="bi bi-graph-up me-1"></i>Statistik
        </a>
        <a href="{{ route('direktori.index') }}" class="nav-link">
          <i class="bi bi-people me-1"></i>Alumni
        </a>
        <a href="{{ route('index') . '#berita' }}" class="nav-link">
          <i class="bi bi-newspaper me-1"></i>Berita
        </a>
      </div>

      <!-- Logo tengah -->
      <div>
        <a href="{{ route('index') }}" class="navbar-brand">
          <img src="/images/logo_tekkom-removebg-preview.png" alt="Logo TEKKOM">
        </a>
      </div>

      <!-- Kanan -->
      <div class="d-flex gap-3">
        <a href="{{ route('index') . '#event' }}" class="nav-link">
          <i class="bi bi-calendar-event me-1"></i>Event
        </a>
        <a href="{{ route('index') . '#lowongan' }}" class="nav-link">
          <i class="bi bi-briefcase me-1"></i>Lowongan
        </a>
        <a href="{{ route('index') . '#magang' }}" class="nav-link">
          <i class="bi bi-mortarboard me-1"></i>Magang
        </a>
        <a href="{{ route('contact') }}" class="nav-link">
          <i class="bi bi-envelope me-1"></i>Kontak
        </a>
      </div>
    </div>
  </nav>

  
  <!-- Konten -->
  @yield('content')

  <!-- Bootstrap JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>


  @include('layouts.publik.footer')
  


</body>
</html>

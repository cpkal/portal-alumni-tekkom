<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@yield('title', 'Admin Panel')</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.ckeditor.com/ckeditor5/45.1.0/ckeditor5.css" />
  <script src="https://cdn.ckeditor.com/ckeditor5/45.1.0/ckeditor5.umd.js"></script>
  <style>
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .bg-darken {
    background-color: #010169 !important;
    }

    main {
      flex: 1;
    }
    
  </style>
</head>
<body>
  <div class="d-flex">
    <!-- Sidebar -->
    <nav class="bg-primary bg-darken text-white p-3" style="width: 250px; min-height: 100vh;">
      <h4 class="text-white">Admin</h4>
      <ul class="nav flex-column mt-4">
        <li class="nav-item mb-2">
          <a href="/admin/dashboard" class="nav-link text-white">
            <i class="bi bi-speedometer2 me-2"></i>Dashboard
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/pengguna" class="nav-link text-white">
            <i class="bi bi-person me-2"></i>Pengguna
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/berita" class="nav-link text-white">
            <i class="bi bi-newspaper me-2"></i>Berita
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/acara" class="nav-link text-white">
            <i class="bi bi-calendar-event me-2"></i>Acara
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/lowongan" class="nav-link text-white">
            <i class="bi bi-briefcase me-2"></i>Lowongan
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/tracer" class="nav-link text-white">
            <i class="bi bi-search me-2"></i>Tracer
          </a>
        </li>
        <li class="nav-item mb-2">
          <a href="/admin/forum" class="nav-link text-white">
            <i class="bi bi-chat-dots me-2"></i>Forum
          </a>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main class="flex-fill p-4" style="width: 100%;">
      @yield('content')
    </main>
  </div>

  {{-- section script --}}
  @yield('script')

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  
</body>
</html>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Verifikasi Akun Alumni</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0; padding: 0;
            color: #333;
        }
        .container {
            background-color: white;
            max-width: 600px;
            margin: 30px auto;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        h1 {
            color: #003366; /* biru tua */
        }
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        .btn-primary {
            display: inline-block;
            background-color: #003366;
            color: white !important;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 20px;
        }
        .footer-links {
            margin-top: 30px;
            font-size: 14px;
            color: #555;
        }
        .footer-links a {
            color: #003366;
            text-decoration: none;
            margin-right: 15px;
        }
        .footer-links a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Selamat, {{ $user->name }}!</h1>
        <p>Akun alumni Anda telah berhasil diverifikasi. Terima kasih telah bergabung dengan komunitas kami.</p>

        <p>Anda dapat mengakses fitur berikut untuk memulai:</p>
        <ul>
            <li><a href="{{ route('profile.me') }}" target="_blank">Perbarui Profil Anda</a></li>
            <li><a href="{{ route('events') }}" target="_blank">Lihat Kegiatan Alumni</a></li>
            <li><a href="{{ route('job-vacancies') }}" target="_blank">Cari Lowongan Kerja</a></li>
            <li><a href="{{ route('forum') }}" target="_blank">Bergabung di Forum Diskusi</a></li>
        </ul>

        <a href="{{ route('login') }}" target="_blank" class="btn-primary">Masuk ke Portal Alumni</a>

        <p>Jika Anda mengalami kendala, silakan hubungi <a href="mailto:support@alumni.example.com">support@alumni.example.com</a>.</p>

        <div class="footer-links">
            <a href="https://alumni.example.com/terms" target="_blank">Syarat & Ketentuan</a>
            <a href="https://alumni.example.com/privacy" target="_blank">Kebijakan Privasi</a>
            <a href="https://alumni.example.com/contact" target="_blank">Kontak Kami</a>
        </div>
    </div>
</body>
</html>

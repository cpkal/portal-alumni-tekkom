@extends('layouts.publik.app')

@section('content')
<div class="kontak-section py-5" style="background-color: #f8f9fa;">
    <!-- Judul -->
    <div class="text-center mb-4">
        <h4 class="fw-bold text-white py-3" style="background-color: #010169;">Kontak</h4>
        <h5 class="fw-semibold mt-3">Temui kami secara langsung</h5>
    </div>

    <!-- Konten -->
    <div class="container">
        <div class="row align-items-start">
            <!-- Peta -->
            <div class="col-md-6 mb-4 mb-md-0">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5872785423403!2d107.72551399999999!3d-6.939828299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c323777ca3a1%3A0x355eff6734ed9167!2sUniversitas%20Pendidikan%20Indonesia%20-%20Kampus%20UPI%20Cibiru!5e0!3m2!1sen!2sid!4v1749217495169!5m2!1sen!2sid" 
                    width="100%" 
                    height="300" 
                    style="border:0; border-radius: 10px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <!-- Info Kontak -->
            <div class="col-md-6">
                <p><strong>Alamat:</strong> Jl. Pendidikan No.15, Cibiru Wetan, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat</p>
                <p><strong>Kode POS:</strong> 40625</p>
                <p><strong>Telepon:</strong> +62 (22) 7801840</p>
                <p><strong>Email:</strong> <a href="mailto:tekom_cibiru@upi.edu" class="text-black">tekom_cibiru@upi.edu</a></p>
                <div class="mt-2">
                    <!-- Ikon Media Sosial -->
                    <a href="https://www.facebook.com/TekomUPI/" class="me-3"><i class="bi bi-facebook fs-5"></i></a>
                    <a href="https://www.instagram.com/teknikkomputer.upi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="me-3"><i class="bi bi-instagram fs-5"></i></a>
                    <a href="https://www.youtube.com/@teknikkomputerupi-kampusci353" class="me-3"><i class="bi bi-youtube fs-5"></i></a>
                    <a href="https://x.com/tekomupicibiru" class="me-3"><i class="bi bi-twitter fs-5"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

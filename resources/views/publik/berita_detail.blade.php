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
        .news-card,
        .news-card-main,
        .news-card-side {
            transition: all 0.3s ease;
        }

        .news-card:hover,
        .news-card-main:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .news-card-side:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
        }

        /* Image Hover Effect */
        .news-card:hover img,
        .news-card-main:hover img {
            transform: scale(1.05);
        }

        /* Badge Styles */
        .badge {
            font-size: 0.75rem;
            font-weight: 600;
        }

        /* Gradient Overlay */
        .bg-gradient-to-t {
            background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
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
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
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
            border: 3px solid rgba(255, 255, 255, .3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
    </style>

    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-10">

                <div class="card shadow-lg border-0">
                    @if($news->image)
                        <img src="{{ asset('storage/' . $news->image) }}" class="card-img-top" style="max-height: 400px; object-fit: cover;" alt="{{ $news->title }}">
                    @endif

                    <div class="card-body">
                        <h1 class="card-title mb-3 section-title">{{ $news->title }}</h1>
                        
                        <p class="text-muted mb-2">
                            Oleh <strong>{{ $news->author ?? 'Admin' }}</strong> | 
                            {{ $news->created_at->translatedFormat('d F Y') }}
                        </p>

                        <hr>

                        <div class="card-text" style="line-height: 1.8; font-size: 1.1rem;">
                            {!! $news->content !!}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>


    <!-- Script Swiper -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
@endsection

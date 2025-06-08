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

    <!-- Statistik Section -->
    <div id="statistik" class="container py-5">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h2 class="display-5 fw-bold mb-3">STATISTIK</h2>
                <p class="lead fw-bold">Data dan Pencapaian Alumni Teknik Komputer</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 mb-4">
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
                        <h5 class="card-title text-primary">Waktu tunggu kerja</h5>
                        <canvas id="jobChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Alumni Setelah Kuliah</h5>
                        <canvas id="statusChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Kesesuaian Pekerjaan Setelah Lulus</h5>
                        <canvas id="kerjaChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="card border-0 shadow">
                    <div class="card-body">
                        <h5 class="card-title text-primary">Kesesuaian Studi Lanjut Setelah Lulus</h5>
                        <canvas id="studiLanjutChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Script Swiper -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <script>
        const labels = @json($alumniByYear['labels']);
        const data = @json($alumniByYear['counts']);

        const waitTimeLabels = @json($waitTimeFirstJob['labels']);
        const waitTimeData = @json($waitTimeFirstJob['data']);

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
                labels: labels,
                datasets: [{
                    label: 'Jumlah Alumni',
                    data: data,
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
            type: 'polarArea',
            data: {
                labels: waitTimeLabels,
                datasets: [{
                    data: waitTimeData,
                    backgroundColor: ['#010169', '#FF0000', '#28a745', '#ffc107'],
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

        const statusLabels = @json($statusAfterGraduation['labels']);
        const statusData = @json($statusAfterGraduation['data']);

        // Status Chart
        const statusCtx = document.getElementById('statusChart').getContext('2d');
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: statusLabels,
                datasets: [{
                    label: 'Status Alumni',
                    data: statusData,
                    backgroundColor: ['#010169', '#FF0000', '#28a745', '#ffc107'],
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

        const kerjaLabels = @json($jobRelatedToMajor['labels']);
        const kerjaData = @json($jobRelatedToMajor['data']);
        // Kesesuaian Pekerjaan Chart
        const kerjaCtx = document.getElementById('kerjaChart').getContext('2d');
        new Chart(kerjaCtx, {
            type: 'pie',
            data: {
                labels: kerjaLabels,
                datasets: [{
                    label: 'Status Alumni',
                    data: kerjaData,
                    backgroundColor: ['#010169', '#FF0000', '#28a745', '#ffc107'],
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

        const studiLanjutLabels = @json($studyRelatedToMajor['labels']);
        const studiLanjutData = @json($studyRelatedToMajor['data']);

        // Kesesuaian Studi Lanjut Chart
        const studiLanjutCtx = document.getElementById('studiLanjutChart').getContext('2d');
        new Chart(studiLanjutCtx, {
            type: 'bar',
            data: {
                labels: studiLanjutLabels,
                datasets: [{
                    label: 'Status Alumni',
                    data: studiLanjutData,
                    backgroundColor: ['#010169', '#FF0000', '#28a745', '#ffc107'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
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
                        newsSection.scrollIntoView({
                            behavior: 'smooth'
                        });
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

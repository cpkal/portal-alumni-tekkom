<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pemberitahuan Penghapusan Pertanyaan</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .container {
            background-color: white;
            max-width: 600px;
            margin: 30px auto;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #003366;
        }

        p {
            font-size: 16px;
            line-height: 1.5;
        }

        .question-title {
            font-weight: bold;
            color: #003366;
        }

        .reason-box {
            background-color: #f0f4f8;
            padding: 15px;
            border-left: 5px solid #003366;
            margin: 15px 0;
            font-style: italic;
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
        <h1>Pertanyaan Telah Dihapus</h1>
        <p>Halo <strong>{{ $user->alumni->fullname }}</strong>,</p>
        <p>Kami ingin memberitahukan bahwa pertanyaan Anda dengan judul:</p>
        <p class="question-title">"{{ $questionTitle }}"</p>
        <p>telah dihapus oleh admin karena alasan berikut:</p>
        <div class="reason-box">
            @if ($reason == 'spam')
                <p> Konten spam </p>
            @elseif($reason == 'inappropriate')
                <p> Konten tidak pantas </p>
            @elseif($reason == 'duplicate')
                <p> Duplikat </p>
            @elseif($reason == 'off-topic')
                <p> Tidak relevan </p>
            @elseif($reason == 'copyright')
                <p> Pelanggaran hak cipta </p>
            @elseif($reason == 'misinformation')
                <p> Informasi salah </p>
            @elseif($reason == 'hate-speech')
                <p> Ujaran kebencian </p>
            @elseif($reason == 'harassment')
                <p> Pelecehan </p>
            @elseif($reason == 'legal-issue')
                <p> Masalah hukum </p>
            @else
                <p> {{ $reason }}</p>
            @endif
        </div>
        <p>Mohon pastikan bahwa pertanyaan yang Anda ajukan sesuai dengan <a href="#">peraturan dan pedoman
                komunitas</a> kami. Anda dapat mengajukan pertanyaan baru dengan memperhatikan hal tersebut.</p>
        <a href="{{ route('forum') }}" class="btn-primary">Kunjungi Forum</a>
        <div class="footer-links">
            <p>Jika Anda memiliki pertanyaan lebih lanjut, silakan hubungi <a
                    href="mailto:support@alumni.example.com">support@alumni.example.com</a></p>
        </div>
    </div>
</body>

</html>

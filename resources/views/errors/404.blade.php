<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>404 Not Found - Tekkom</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      background-color: #010169;
      color: white;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    /* Chip rectangle */
    .chip {
      fill: #0a0a8f;
      stroke: white;
      stroke-width: 3;
      filter: drop-shadow(0 0 5px rgba(255 255 255 / 0.6));
    }

    /* Pins */
    .pin {
      fill: #010169;
      stroke: white;
      stroke-width: 1.5;
    }

    /* LED blinking */
    .led {
      fill: #00ffea;
      filter: drop-shadow(0 0 10px #00ffea);
      animation: ledBlink 1.4s infinite alternate;
    }

    @keyframes ledBlink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    /* Signal lines flowing */
    .signal {
      stroke: #00ffea;
      stroke-width: 3;
      stroke-linecap: round;
      animation: flowSignal 3s linear infinite;
      stroke-dasharray: 10 30;
      stroke-dashoffset: 0;
      filter: drop-shadow(0 0 8px #00ffea);
    }

    @keyframes flowSignal {
      0% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 40; }
    }

    h1 {
      font-size: 5rem;
      margin-top: 30px;
      margin-bottom: 10px;
      text-shadow: 0 0 10px #00ffea;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 30px;
      text-shadow: 0 0 6px #00ffea;
    }

    a.button {
      background-color: white;
      color: #010169;
      font-weight: 600;
      padding: 12px 32px;
      border-radius: 9999px;
      text-decoration: none;
      transition: background-color 0.3s ease;
      box-shadow: 0 0 10px #00ffea;
    }

    a.button:hover {
      background-color: #00ffea;
      color: #010169;
    }
  </style>
</head>
<body>

  <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Chip processor with blinking LED and flowing signal">
    <!-- Chip body -->
    <rect class="chip" x="40" y="40" width="120" height="120" rx="20" ry="20"/>
    
    <!-- Pins -->
    <!-- Left pins -->
    <rect class="pin" x="30" y="55" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="30" y="85" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="30" y="115" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="30" y="145" width="10" height="8" rx="2" ry="2"/>

    <!-- Right pins -->
    <rect class="pin" x="160" y="55" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="160" y="85" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="160" y="115" width="10" height="8" rx="2" ry="2"/>
    <rect class="pin" x="160" y="145" width="10" height="8" rx="2" ry="2"/>

    <!-- LED indicator blinking -->
    <circle class="led" cx="100" cy="100" r="12"/>

    <!-- Signal lines flowing -->
    <line class="signal" x1="100" y1="40" x2="100" y2="20"/>
    <line class="signal" x1="140" y1="100" x2="160" y2="100"/>
    <line class="signal" x1="100" y1="160" x2="100" y2="180"/>
    <line class="signal" x1="60" y1="100" x2="40" y2="100"/>
  </svg>

  <h1>404</h1>
  <p>Oops! Halaman ini sedang bermasalah seperti chip yang error.</p>
  <a href="{{ url('/') }}" class="button">Kembali ke Beranda</a>

</body>
</html>

export default function Redir() {

  // full page redirect to the specified URL
  const redirectUrl = "http://localhost:8000/admin/dashboard"; // Replace with your desired URL

  if (typeof window !== 'undefined') {
    window.location.href = redirectUrl;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
      <p className="text-lg">Please wait while we redirect you.</p>
    </div>
  );
}
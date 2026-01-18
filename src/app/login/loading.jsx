export default function LoginLoading() {
  return (
    <section className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading login page...</p>
      </div>
    </section>
  );
}
export default function TestSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Test Signup Route</h1>
        <p>If you can see this page, the routing is working.</p>
        <div className="mt-4">
          <a 
            href="/admin/signup" 
            className="text-blue-600 hover:underline"
          >
            Go to Admin Signup
          </a>
        </div>
      </div>
    </div>
  );
}

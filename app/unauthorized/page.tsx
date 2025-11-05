import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="p-6 bg-red-100 rounded-full">
            <ShieldAlert className="h-16 w-16 text-red-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-lg text-gray-600">
          You don't have permission to access the admin panel. Please contact your administrator if you believe this is an error.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button variant="outline">Go to Homepage</Button>
          </Link>
          <Link href="/login">
            <Button>Login with Different Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

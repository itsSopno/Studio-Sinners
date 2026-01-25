"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // If user is logged in and hits 404, redirect to items page
    if (status === "authenticated" && session) {
      console.log("User is authenticated, redirecting to items page");
      router.push("/items");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold mb-4 text-red-500">404</h1>
        <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-wide">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/items" 
            className="block w-full bg-white text-black py-3 px-6 rounded font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors"
          >
            Go to Items
          </Link>
          
          <Link 
            href="/" 
            className="block w-full border border-white/20 py-3 px-6 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            Go Home
          </Link>
        </div>

        {session && (
          <div className="mt-8 p-4 bg-green-500/20 border border-green-500/50 rounded">
            <p className="text-green-300 text-sm">
              ✅ You are logged in as {session.user?.email}
            </p>
            <p className="text-green-300 text-xs mt-1">
              Redirecting to items page...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
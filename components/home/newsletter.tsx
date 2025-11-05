"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setMessage("Thank you for subscribing!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-primary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 animate-bounce-slow">
            <Mail className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
          Stay Updated
        </h2>

        {/* Description */}
        <p className="mb-10 text-lg text-white/90 lg:text-xl">
          Get the latest news, impact stories, and updates directly to your
          inbox. Join our community of changemakers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-lg border-0 px-6 py-4 text-base outline-none ring-2 ring-transparent transition-all focus:ring-white/50"
          />
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="bg-secondary px-8 py-4 text-base font-semibold hover:bg-secondary/90"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        {/* Success Message */}
        {message && (
          <p className="mt-4 text-sm font-medium text-white/90">{message}</p>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-sm text-white/70">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

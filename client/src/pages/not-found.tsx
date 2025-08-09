import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-landis-bg">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-landis-primary/20 rounded-full mb-8">
              <Search className="w-10 h-10 text-landis-primary" />
            </div>

            {/* Error Message */}
            <h1 className="text-6xl md:text-8xl font-bold text-landis-text mb-4">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-landis-text mb-6">
              Page Not Found
            </h2>
            <p className="text-lg text-landis-text-muted mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track with our automation solutions.
            </p>

            {/* Navigation Options */}
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-landis-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-landis-primary-dark transition"
              >
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </Link>
              
              <Link
                href="/#contact"
                className="inline-flex items-center space-x-2 bg-landis-card text-landis-text px-6 py-3 rounded-md font-semibold hover:bg-landis-border transition border border-landis-border"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-landis-border">
              <h3 className="text-lg font-semibold text-landis-text mb-4">
                Popular Pages
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/about"
                  className="block p-4 bg-landis-card rounded-lg hover:bg-landis-border transition text-left"
                >
                  <h4 className="font-semibold text-landis-text mb-1">About Us</h4>
                  <p className="text-landis-text-muted text-sm">Learn about our automation expertise</p>
                </Link>
                
                <Link
                  href="/#services"
                  className="block p-4 bg-landis-card rounded-lg hover:bg-landis-border transition text-left"
                >
                  <h4 className="font-semibold text-landis-text mb-1">Our Services</h4>
                  <p className="text-landis-text-muted text-sm">Explore our automation solutions</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

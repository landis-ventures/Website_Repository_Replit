import { Link } from "wouter";
import { Layers, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Layers className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-white">Landis Ventures</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Intelligent automation solutions for financial services. Transforming operations through cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition text-sm">
                About Us
              </Link>
              <Link href="/#services" className="block text-gray-400 hover:text-white transition text-sm">
                Services
              </Link>
              <Link href="/#process" className="block text-gray-400 hover:text-white transition text-sm">
                Our Process
              </Link>
              <Link href="/#contact" className="block text-gray-400 hover:text-white transition text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <nav className="space-y-2">
              <span className="block text-gray-400 text-sm">RPA Solutions</span>
              <span className="block text-gray-400 text-sm">Document Processing</span>
              <span className="block text-gray-400 text-sm">Data Reconciliation</span>
              <span className="block text-gray-400 text-sm">Workflow Automation</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@landisventures.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>(555) 123-AUTOMATE</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Financial District</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Landis Ventures. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

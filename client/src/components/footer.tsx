import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Layers className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-white">Landis Ventures</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Landis Ventures. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

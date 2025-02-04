import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/samples" className="hover:text-blue-300">Sample ICPs</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-blue-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-blue-300">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-300">
                <li>Over 25 years of experience</li>
                <li>Proven results with Fortune 500 companies</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 text-gray-400 py-4 text-center text-sm">
        © 2025 ICP EDGE. All rights reserved.
      </div>
    </div>
  );
}

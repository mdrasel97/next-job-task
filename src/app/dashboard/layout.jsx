// app/dashboard/layout.js
export const metadata = {
  title: "Dashboard | My App",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="block hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="/dashboard/settings" className="block hover:text-blue-400">
              Settings
            </a>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}

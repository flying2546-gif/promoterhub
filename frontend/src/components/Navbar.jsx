export default function Navbar({ onAdminClick }) {
  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🚀</span>
          <span>PromoterHub</span>
        </div>
        <button
          onClick={onAdminClick}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
        >
          ⚙️ Admin Panel
        </button>
      </div>
    </nav>
  );
}

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="bg-white shadow-md sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-lg font-bold mb-4">ค้นหาตามหมวดหมู่</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => onSelect(null)}
            className={`p-4 rounded-lg font-bold transition ${
              selected === null
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            ✨ ทั้งหมด
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`p-4 rounded-lg font-bold transition text-center ${
                selected === cat.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <div className="text-2xl mb-1">{cat.icon}</div>
              <div className="text-sm">{cat.name}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

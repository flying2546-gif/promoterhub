import { useState } from 'react';

export default function CampaignForm({ categories, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    type: 'general',
    cover_image: '',
    cta_link: '',
    cta_text: 'Go to Site'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.category) {
      onSubmit(formData);
      setFormData({
        name: '',
        description: '',
        category: '',
        type: 'general',
        cover_image: '',
        cta_link: '',
        cta_text: 'Go to Site'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-bold mb-2">ชื่อโฆษณา *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="เช่น Elden Ring"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-bold mb-2">หมวดหมู่ *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- เลือกหมวดหมู่ --</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-bold mb-2">ประเภท</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="general">โฆษณาทั่วไป</option>
            <option value="game">เกม</option>
          </select>
        </div>

        {/* CTA Text */}
        <div>
          <label className="block text-sm font-bold mb-2">ข้อความปุ่ม</label>
          <input
            type="text"
            name="cta_text"
            value={formData.cta_text}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Go to Site"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-bold mb-2">คำอธิบาย *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="3"
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="เขียนคำอธิบาย..."
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-bold mb-2">ลิงก์รูปภาพ Cover</label>
        <input
          type="url"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      {/* CTA Link */}
      <div>
        <label className="block text-sm font-bold mb-2">ลิงก์ปลายทาง *</label>
        <input
          type="url"
          name="cta_link"
          value={formData.cta_link}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="https://example.com"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold text-lg transition"
      >
        ✓ บันทึก
      </button>
    </form>
  );
}

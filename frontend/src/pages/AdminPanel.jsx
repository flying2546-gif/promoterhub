import { useState } from 'react';
import CampaignForm from '../components/CampaignForm';

export default function AdminPanel({ campaigns, categories, onAdd, onDelete, onBackToHome }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">⚙️ Admin Panel</h1>
          <button
            onClick={onBackToHome}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-bold transition"
          >
            ← กลับหน้าหลัก
          </button>
        </div>

        {/* Add Campaign Section */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-bold text-lg transition"
          >
            {showForm ? '✕ ปิดฟอร์ม' : '+ เพิ่มโฆษณาใหม่'}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <CampaignForm categories={categories} onSubmit={(data) => {
              onAdd(data);
              setShowForm(false);
            }} />
          </div>
        )}

        {/* Campaigns List */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="bg-gray-700 p-6">
            <h2 className="text-2xl font-bold">📋 รายการโฆษณา ({campaigns.length})</h2>
          </div>
          
          {campaigns.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <p className="text-lg">ยังไม่มีโฆษณา</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">ชื่อ</th>
                    <th className="px-6 py-3 text-left">หมวดหมู่</th>
                    <th className="px-6 py-3 text-left">ประเภท</th>
                    <th className="px-6 py-3 text-center">การจัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-t border-gray-700 hover:bg-gray-700 transition">
                      <td className="px-6 py-4">#{campaign.id}</td>
                      <td className="px-6 py-4 font-bold">{campaign.name}</td>
                      <td className="px-6 py-4">{campaign.category}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          campaign.type === 'game' ? 'bg-blue-600' : 'bg-green-600'
                        }`}>
                          {campaign.type === 'game' ? '🎮 เกม' : '📢 โฆษณา'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => onDelete(campaign.id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded font-bold transition"
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

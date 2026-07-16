export default function CampaignGrid({ campaigns }) {
  const trackClick = (campaignId) => {
    // Send analytics to backend
    console.log('Clicked campaign:', campaignId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">🎯 โฆษณาแนะนำ</h2>
      {campaigns.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">ไม่มีโฆษณาในหมวดหมู่นี้</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
              {/* Image */}
              <img
                src={campaign.cover_image}
                alt={campaign.name}
                className="w-full h-48 object-cover"
              />
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{campaign.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{campaign.description}</p>
                
                {/* Category Badge */}
                <div className="flex gap-2 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                    {campaign.type === 'game' ? '🎮 เกม' : '📢 โฆษณา'}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => trackClick(campaign.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  {campaign.cta_text}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

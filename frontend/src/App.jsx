import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategoryFilter from './components/CategoryFilter';
import CampaignGrid from './components/CampaignGrid';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Elden Ring',
      description: 'เกม RPG ผจญภัย���ีโพคแฟนตาซี',
      category: 'rpg-games',
      type: 'game',
      cover_image: 'https://via.placeholder.com/400x300?text=Elden+Ring',
      cta_link: '#',
      cta_text: 'Play Now'
    },
    {
      id: 2,
      name: 'Shopee Sale',
      description: 'โปรโมชั่นเมกะเซล ลด 90%',
      category: 'shopping',
      type: 'general',
      cover_image: 'https://via.placeholder.com/400x300?text=Shopee+Sale',
      cta_link: '#',
      cta_text: 'Go to Site'
    },
    {
      id: 3,
      name: 'Call of Duty Mobile',
      description: 'เกมยิงอัดแคมเป้ยอดนิยม',
      category: 'action-games',
      type: 'game',
      cover_image: 'https://via.placeholder.com/400x300?text=Call+of+Duty',
      cta_link: '#',
      cta_text: 'Download'
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const categories = [
    { id: 'action-games', name: 'Action Games', icon: '🎮' },
    { id: 'rpg-games', name: 'RPG Games', icon: '⚔️' },
    { id: 'strategy-games', name: 'Strategy', icon: '🧠' },
    { id: 'shopping', name: 'Shopping', icon: '🛍️' },
    { id: 'food-beverage', name: 'Food & Beverage', icon: '🍔' },
    { id: 'services', name: 'Services', icon: '🔧' },
  ];

  const filteredCampaigns = selectedCategory
    ? campaigns.filter(c => c.category === selectedCategory)
    : campaigns;

  const handleAddCampaign = (newCampaign) => {
    const campaign = {
      ...newCampaign,
      id: Math.max(...campaigns.map(c => c.id), 0) + 1
    };
    setCampaigns([campaign, ...campaigns]);
  };

  const handleDeleteCampaign = (id) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
  };

  if (isAdminMode) {
    return <AdminPanel campaigns={campaigns} categories={categories} onAdd={handleAddCampaign} onDelete={handleDeleteCampaign} onBackToHome={() => setIsAdminMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAdminClick={() => setIsAdminMode(true)} />
      <Banner />
      <CategoryFilter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      <CampaignGrid campaigns={filteredCampaigns} />
    </div>
  );
}

export default App;

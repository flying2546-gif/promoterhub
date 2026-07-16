import { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    title: 'Elden Ring',
    subtitle: 'เกม RPG ผจญภัยอีโพคแฟนตาซี',
    image: 'https://via.placeholder.com/1200x400?text=Elden+Ring+Banner',
    color: 'from-purple-600 to-purple-900'
  },
  {
    id: 2,
    title: 'Mega Sale 90%',
    subtitle: 'โปรโมชั่นช้อปปิ้งเมกะใหญ่',
    image: 'https://via.placeholder.com/1200x400?text=Mega+Sale',
    color: 'from-red-600 to-red-900'
  },
  {
    id: 3,
    title: 'New Releases',
    subtitle: 'เกมใหม่ที่ทำให้ติดใจ',
    image: 'https://via.placeholder.com/1200x400?text=New+Releases',
    color: 'from-blue-600 to-blue-900'
  }
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div className="relative h-96 bg-gray-800 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${banner.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${banner.color}`} />
      
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{banner.title}</h1>
        <p className="text-xl mb-8 drop-shadow-lg">{banner.subtitle}</p>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-lg font-bold transition">
          Go to Site
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function DashboardPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('coding');

  const categories = ['coding', 'Desain', 'Tugas', 'Tutor', 'Ketik'];

  const services = [
    {
      id: 1,
      title: 'Jasa Web React & UI Tailwind',
      seller: 'Penjual: Arief (Informatika)',
      rating: '4.9',
      reviews: 24,
      price: 'Rp50.000',
      category: 'coding',
      bgColor: '#f0f6ff',
      innerShape: null
    },
    {
      id: 2,
      title: 'Desain PPT & Poster Aesthetic',
      seller: 'Penjual: Alval (DKV)',
      rating: '5.0',
      reviews: 18,
      price: 'Rp25.000',
      category: 'Desain',
      bgColor: '#fef3c7',
      innerShape: 'square'
    },
    {
      id: 3,
      title: 'Olah Data SPSS & Skripsi',
      seller: 'Penjual: Nabila (Statistika)',
      rating: '4.8',
      reviews: 30,
      price: 'Rp75.000',
      category: 'Tugas',
      bgColor: '#dcfce7',
      innerShape: 'circle'
    }
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === 'coding' || service.category === selectedCategory;
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="dash-container">
      <style>{`
        .dash-container {
          background-color: #f8fafc;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #0f172a;
          overflow: hidden;
        }

        .dash-header {
          padding: 14px 18px 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          flex-shrink: 0;
        }

        .dash-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-logo-bg {
          width: 38px;
          height: 38px;
          background-color: #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .brand-text-col {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-text-top {
          font-weight: 800;
          font-size: 15px;
          color: #0f172a;
        }

        .brand-text-bottom {
          font-weight: 800;
          font-size: 14px;
          color: #2563eb;
        }

        .dash-notif-btn {
          width: 32px;
          height: 32px;
          background: #dbeafe;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .notif-blue-dot {
          width: 7px;
          height: 7px;
          background-color: #2563eb;
          border-radius: 50%;
        }

        .dash-body {
          flex: 1;
          overflow-y: auto;
          padding: 12px 18px 70px 18px;
          scrollbar-width: none;
        }

        .dash-body::-webkit-scrollbar {
          display: none;
        }

        .promo-card {
          background: #2563eb;
          border-radius: 14px;
          padding: 14px 16px;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .promo-h1 {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 3px;
        }

        .promo-sub {
          font-size: 11px;
          opacity: 0.9;
          margin-bottom: 12px;
        }

        .promo-btn-claim {
          background: #ffffff;
          color: #2563eb;
          border: none;
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .search-box-wrapper {
          position: relative;
          margin-bottom: 14px;
        }

        .search-magnifier-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          display: flex;
          align-items: center;
        }

        .search-box-input {
          width: 100%;
          padding: 10px 12px 10px 36px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 12px;
          outline: none;
          background: #ffffff;
          box-sizing: border-box;
          color: #334155;
        }

        .section-title {
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: 0.4px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .categories-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          margin-bottom: 16px;
        }

        .categories-scroll::-webkit-scrollbar {
          display: none;
        }

        .cat-chip {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          white-space: nowrap;
          cursor: pointer;
        }

        .cat-chip.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-item-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          gap: 14px;
          align-items: center;
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .service-item-card:active {
          transform: scale(0.98);
        }

        .service-thumb-box {
          width: 68px;
          height: 68px;
          border-radius: 10px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inner-yellow-square {
          width: 28px;
          height: 28px;
          background-color: #d97706;
          border-radius: 6px;
        }

        .inner-green-circle {
          width: 28px;
          height: 28px;
          background-color: #16a34a;
          border-radius: 50%;
        }

        .service-info-col {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-item-title {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 3px;
        }

        .service-seller-name {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .service-rating-line {
          font-size: 11px;
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .star-gold {
          color: #f59e0b;
        }

        .reviews-gray {
          color: #94a3b8;
          font-weight: 400;
        }

        .service-price-bold {
          font-size: 12px;
          font-weight: 800;
          color: #2563eb;
        }

        .bottom-navigation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          z-index: 100;
        }

        .nav-tab-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          width: 33.33%;
        }

        .nav-tab-btn.active {
          color: #2563eb;
        }

        .nav-icon-pill {
          width: 44px;
          height: 26px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nav-tab-btn.active .nav-icon-pill {
          background: #dbeafe;
        }

        .chat-notif-red-dot {
          position: absolute;
          top: 3px;
          right: 12px;
          width: 6px;
          height: 6px;
          background-color: #ef4444;
          border-radius: 50%;
        }
      `}</style>

      {/* Header Top */}
      <div className="dash-header">
        <div className="dash-brand">
          <div className="brand-logo-bg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="brand-text-col">
            <span className="brand-text-top">Jasa</span>
            <span className="brand-text-bottom">Mahasiswa</span>
          </div>
        </div>

        <button className="dash-notif-btn" aria-label="Notifikasi">
          <div className="notif-blue-dot"></div>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="dash-body">
        <div className="promo-card">
          <div className="promo-h1">Diskon 20% Tugas Akhir!</div>
          <div className="promo-sub">Gunakan kode: MAHASISWABISA</div>
          <button className="promo-btn-claim" onClick={() => alert('Kode promo diklaim!')}>
            Klaim Promo
          </button>
        </div>

        <div className="search-box-wrapper">
          <span className="search-magnifier-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="search-box-input"
            placeholder="Mau cari jasa apa hari ini?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="section-title">KATEGORI POPULER</div>
        <div className="categories-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="section-title">REKOMENDASI JASA</div>
        <div className="services-stack">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="service-item-card"
              onClick={() => onNavigate('service-detail', item)}
            >
              <div className="service-thumb-box" style={{ backgroundColor: item.bgColor }}>
                {item.innerShape === 'square' && <div className="inner-yellow-square"></div>}
                {item.innerShape === 'circle' && <div className="inner-green-circle"></div>}
              </div>

              <div className="service-info-col">
                <div className="service-item-title">{item.title}</div>
                <div className="service-seller-name">{item.seller}</div>
                <div className="service-rating-line">
                  <span className="star-gold">★</span> {item.rating}{' '}
                  <span className="reviews-gray">({item.reviews} ulasan)</span>
                </div>
                <div className="service-price-bold">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="bottom-navigation">
        <button className="nav-tab-btn active">
          <div className="nav-icon-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb" stroke="#2563eb" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span>Beranda</span>
        </button>

        <button className="nav-tab-btn" onClick={() => onNavigate('chat')}>
          <div className="nav-icon-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="chat-notif-red-dot"></span>
          </div>
          <span>Chat</span>
        </button>

        <button className="nav-tab-btn" onClick={() => onNavigate('account')}>
          <div className="nav-icon-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span>Profil</span>
        </button>
      </div>
    </div>
  );
}
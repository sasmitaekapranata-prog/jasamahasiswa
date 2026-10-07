import React, { useState } from 'react';

export default function AccountPage({ onNavigate }) {
  const [isPenjual, setIsPenjual] = useState(false);

  return (
    <div className="account-container">
      <style>{`
        .account-container {
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

        /* Top Header */
        .acc-header {
          padding: 14px 18px 10px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          flex-shrink: 0;
        }

        .acc-brand {
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

        /* Scroll Body Content */
        .acc-body {
          flex: 1;
          overflow-y: auto;
          padding: 14px 18px 70px 18px;
          scrollbar-width: none;
        }

        .acc-body::-webkit-scrollbar {
          display: none;
        }

        /* Profile Info Box */
        .user-profile-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .avatar-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #2563eb;
          font-size: 14px;
          background: #eff6ff;
          flex-shrink: 0;
        }

        .user-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .user-name {
          font-size: 14px;
          font-weight: 800;
          color: #0f172a;
        }

        .user-prodi {
          font-size: 11px;
          color: #64748b;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
          width: fit-content;
          margin-top: 3px;
        }

        .status-badge.pembeli {
          background: #eff6ff;
          color: #2563eb;
        }

        .status-badge.penjual {
          background: #f0fdf4;
          color: #16a34a;
        }

        .dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #22c55e;
        }

        /* Toggle Mode Switch */
        .mode-toggle-bar {
          background: #e2e8f0;
          border-radius: 12px;
          padding: 3px;
          display: flex;
          margin-bottom: 16px;
        }

        .toggle-btn {
          flex: 1;
          padding: 8px 0;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
        }

        /* MODE PENJUAL UI COMPONENTS */
        .income-card {
          background: #1e293b;
          border-radius: 16px;
          padding: 16px;
          color: #ffffff;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .income-label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #94a3b8;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .income-amount {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .income-growth {
          font-size: 10px;
          color: #4ade80;
          font-weight: 600;
        }

        .btn-withdraw {
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-add-service {
          width: 100%;
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        /* MODE PEMBELI UI COMPONENTS */
        .order-status-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          margin-bottom: 16px;
        }

        .order-status-title {
          font-size: 11px;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.4px;
        }

        .status-items-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .status-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .status-circle-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
        }

        .status-circle-num.yellow {
          background: #fef3c7;
          color: #d97706;
        }

        .status-circle-num.blue {
          background: #dbeafe;
          color: #2563eb;
        }

        .status-circle-num.green {
          background: #dcfce7;
          color: #16a34a;
        }

        .status-text-label {
          font-size: 10px;
          color: #64748b;
          font-weight: 600;
        }

        /* Common Menu List Group */
        .menu-card-group {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .menu-row-item {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }

        .menu-row-item:last-child {
          border-bottom: none;
        }

        .menu-item-left {
          display: flex;
          flex-direction: column;
        }

        .menu-item-title {
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
        }

        .menu-item-sub {
          font-size: 10px;
          color: #94a3b8;
          margin-top: 1px;
        }

        .menu-item-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .badge-count-red {
          background: #ef4444;
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-right-icon {
          color: #94a3b8;
        }

        /* Logout Card */
        .logout-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px 16px;
          border: 1px solid #fee2e2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #ef4444;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Bottom Nav Bar */
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
        }

        .nav-tab-btn.active .nav-icon-pill {
          background: #dbeafe;
        }
      `}</style>

      {/* Header Top */}
      <div className="acc-header">
        <div className="acc-brand">
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
      </div>

      {/* Main Body Content */}
      <div className="acc-body">
        {/* User Card */}
        <div className="user-profile-card">
          <div className="avatar-circle">AS</div>
          <div className="user-details">
            <span className="user-name">Arif Setiawan</span>
            <span className="user-prodi">S1 Teknik Informatika</span>
            {isPenjual ? (
              <span className="status-badge penjual">
                <span className="dot-green"></span> Lapak Siap Terima
              </span>
            ) : (
              <span className="status-badge pembeli">✓ Mahasiswa Aktif</span>
            )}
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="mode-toggle-bar">
          <button
            className={`toggle-btn ${!isPenjual ? 'active' : ''}`}
            onClick={() => setIsPenjual(false)}
          >
            Mode Pembeli 🛒
          </button>
          <button
            className={`toggle-btn ${isPenjual ? 'active' : ''}`}
            onClick={() => setIsPenjual(true)}
          >
            Mode Penjual
          </button>
        </div>

        {/* TAMPILAN MODE PENJUAL */}
        {isPenjual && (
          <>
            <div className="income-card">
              <div>
                <div className="income-label">Saldo Pendapatan Jasa</div>
                <div className="income-amount">Rp 1.450.000</div>
                <div className="income-growth">▲ +Rp 250.000 minggu ini</div>
              </div>
              <button className="btn-withdraw" onClick={() => alert('Fitur Tarik Saldo')}>
                Tarik Saldo
              </button>
            </div>

            <button
              className="btn-add-service"
              onClick={() => onNavigate('create-service')}
            >
              + Buka Penawaran Jasa Baru
            </button>

            <div className="menu-card-group">
              <div className="menu-row-item" onClick={() => onNavigate('edit-profile')}>
                <div className="menu-item-left">
                  <span className="menu-item-title">Edit Profil</span>
                  <span className="menu-item-sub">Edit Profil dan data diri kamu</span>
                </div>
                <span className="arrow-right-icon">›</span>
              </div>

              <div className="menu-row-item" onClick={() => onNavigate('incoming-orders')}>
                <div className="menu-item-left">
                  <span className="menu-item-title">Pesanan Masuk</span>
                  <span className="menu-item-sub">Perlu Segera kamu kerjakan</span>
                </div>
                <div className="menu-item-right">
                  <span className="badge-count-red">2</span>
                  <span className="arrow-right-icon">›</span>
                </div>
              </div>

              <div className="menu-row-item" onClick={() => onNavigate('manage-services')}>
                <div className="menu-item-left">
                  <span className="menu-item-title">Kelola Jasa</span>
                  <span className="menu-item-sub">Edit Jasa dan Hapus</span>
                </div>
                <span className="arrow-right-icon">›</span>
              </div>
            </div>
          </>
        )}

        {/* TAMPILAN MODE PEMBELI */}
        {!isPenjual && (
          <>
            <div className="order-status-box">
              <div className="order-status-title">Status Pesanan Saya</div>
              <div className="status-items-grid">
                <div className="status-item" onClick={() => onNavigate('orders-unpaid')}>
                  <div className="status-circle-num yellow">1</div>
                  <div className="status-text-label">Belum Bayar</div>
                </div>
                <div className="status-item" onClick={() => onNavigate('orders-in-progress')}>
                  <div className="status-circle-num blue">2</div>
                  <div className="status-text-label">Diproses</div>
                </div>
                <div className="status-item" onClick={() => onNavigate('orders-completed')}>
                  <div className="status-circle-num green">8</div>
                  <div className="status-text-label">Selesai</div>
                </div>
              </div>
            </div>

            <div className="menu-card-group">
              <div className="menu-row-item" onClick={() => onNavigate('edit-profile')}>
                <div className="menu-item-left">
                  <span className="menu-item-title">Edit Profil</span>
                  <span className="menu-item-sub">Edit Profil dan Data Diri Kamu</span>
                </div>
                <span className="arrow-right-icon">›</span>
              </div>

              <div className="menu-row-item" onClick={() => onNavigate('help-center')}>
                <div className="menu-item-left">
                  <span className="menu-item-title">Pusat Bantuan</span>
                </div>
                <span className="arrow-right-icon">›</span>
              </div>
            </div>
          </>
        )}

        {/* Logout Button */}
        <div className="logout-card" onClick={() => onNavigate('login')}>
          <span>Keluar dari Akun</span>
          <span>➔</span>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="bottom-navigation">
        <button className="nav-tab-btn" onClick={() => onNavigate('dashboard')}>
          <div className="nav-icon-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
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
          </div>
          <span>Chat</span>
        </button>

        <button className="nav-tab-btn active">
          <div className="nav-icon-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
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
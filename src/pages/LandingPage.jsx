import React from 'react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="landing-container">
      <style>{`
        .landing-container {
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-height: 100%;
          background-color: #eaf4ff;
          box-sizing: border-box;
          justify-content: space-between;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          background-color: #2563eb;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-weight: 800;
          font-size: 14px;
          line-height: 1.1;
          color: #1e293b;
        }

        .logo-text .blue {
          color: #2563eb;
        }

        .hero-title {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .hero-subtitle {
          font-size: 12px;
          color: #64748b;
          line-height: 1.5;
          max-width: 320px;
          margin-bottom: 20px;
        }

        /* Ilustrasi Isometric Vector */
        .illustration-wrapper {
          position: relative;
          width: 100%;
          height: 250px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .bg-shape {
          position: absolute;
          top: 0;
          width: 280px;
          height: 200px;
          background: radial-gradient(circle, rgba(219, 234, 254, 0.9) 0%, rgba(234, 244, 255, 0) 70%);
        }

        .cube {
          position: absolute;
          border-radius: 3px;
          transform: rotate(-20deg) skewX(20deg);
        }

        .cube-1 { width: 18px; height: 18px; top: 110px; left: 35px; background: #3b82f6; }
        .cube-2 { width: 14px; height: 14px; top: 90px; left: 48px; background: #2563eb; }
        .cube-3 { width: 16px; height: 16px; top: 105px; right: 40px; background: #1d4ed8; }
        .cube-4 { width: 14px; height: 14px; top: 60px; right: 85px; background: #60a5fa; }

        .phone-mockup {
          width: 150px;
          height: 190px;
          background: #ffffff;
          border: 3px solid #1e293b;
          border-radius: 18px 18px 0 0;
          border-bottom: none;
          padding: 8px;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        .mockup-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .pill-small { width: 60px; height: 12px; background: #2563eb; border-radius: 6px; }
        .avatar-small { width: 22px; height: 22px; background: #dbeafe; border-radius: 50%; border: 1.5px solid #2563eb; }

        .mockup-chat {
          width: 26px;
          height: 14px;
          background: #e2e8f0;
          border-radius: 4px;
          font-size: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          color: #64748b;
        }

        .mockup-banner {
          width: 100%;
          height: 18px;
          background: #2563eb;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .mockup-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px;
        }

        .card-title { font-size: 7px; font-weight: 700; color: #475569; margin-bottom: 4px; text-align: left; }
        .card-line { height: 4px; background: #cbd5e1; border-radius: 2px; margin-bottom: 4px; }
        .card-line.long { width: 80%; }
        .card-line.short { width: 50%; }
        .card-btn { width: 35px; height: 10px; background: #2563eb; border-radius: 3px; margin-top: 6px; }

        .character {
          position: absolute;
          bottom: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .char-left { left: 45px; }
        .char-right { right: 45px; }

        .char-head { width: 14px; height: 14px; background: #1e293b; border-radius: 50%; margin-bottom: 2px; }
        .char-body { width: 18px; height: 24px; background: #2563eb; border-radius: 4px 4px 0 0; }
        .char-legs { width: 14px; height: 20px; background: #0f172a; }

        .btn-container {
          width: 100%;
          margin-top: auto;
          padding-top: 10px;
        }

        .btn-primary {
          width: 100%;
          background-color: #111827;
          color: #ffffff;
          border: none;
          padding: 16px;
          border-radius: 25px;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-primary:hover {
          background-color: #1f2937;
        }
      `}</style>

      {/* Header Logo */}
      <div className="header-logo">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        </div>
        <div className="logo-text">
          <span>Jasa</span>
          <span className="blue">Mahasiswa</span>
        </div>
      </div>

      {/* Hero Header */}
      <div>
        <h1 className="hero-title">
          HUBUNGKAN<br />
          KEAHLIAN ANDA<br />
          SEKARANG
        </h1>
        <p className="hero-subtitle">
          Platform terintegrasi untuk layanan konsultasi privat dan transaksi jasa. Pesan layanan atau jual keahlian Anda dengan mudah di satu tempat.
        </p>
      </div>

      {/* Ilustrasi */}
      <div className="illustration-wrapper">
        <div className="bg-shape"></div>
        
        <div className="cube cube-1"></div>
        <div className="cube cube-2"></div>
        <div className="cube cube-3"></div>
        <div className="cube cube-4"></div>

        <div className="phone-mockup">
          <div className="mockup-header">
            <div className="pill-small"></div>
            <div className="avatar-small"></div>
          </div>
          <div className="mockup-chat">
            <span className="dots">•••</span>
          </div>
          <div className="mockup-banner"></div>
          <div className="mockup-card">
            <div className="card-title">Service Specification</div>
            <div className="card-line long"></div>
            <div className="card-line short"></div>
            <div className="card-btn"></div>
          </div>
        </div>

        <div className="character char-left">
          <div className="char-head"></div>
          <div className="char-body"></div>
          <div className="char-legs"></div>
        </div>
        <div className="character char-right">
          <div className="char-head"></div>
          <div className="char-body"></div>
          <div className="char-legs"></div>
        </div>
      </div>

      {/* Tombol Navigasi ke Login */}
      <div className="btn-container">
        <button className="btn-primary" onClick={() => onNavigate('login')}>
          MASUK APLIKASI
        </button>
      </div>
    </div>
  );
}
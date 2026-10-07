import React, { useState } from 'react';

export default function RegisterPage({ onNavigate }) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Ubah bagian function handleRegister di src/pages/RegisterPage.jsx
const handleRegister = (e) => {
  e.preventDefault();
  // Alihkan langsung ke Dashboard setelah Daftar
  onNavigate('dashboard');
};

  return (
    <div className="register-screen">
      <style>{`
        .register-screen {
          padding: 24px 20px;
          min-height: 100%;
          background-color: #f8fafc;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .back-btn {
          background: none;
          border: none;
          color: #2563eb;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0;
          margin-bottom: 30px;
        }

        .register-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 30px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .register-title {
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .tab-switcher {
          width: 100%;
          display: flex;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 4px;
          margin-bottom: 24px;
        }

        .tab-btn {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .tab-btn.active {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
        }

        .tab-btn.inactive {
          background: transparent;
          color: #64748b;
        }

        .register-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
        }

        .btn-submit {
          width: 100%;
          background-color: #2563eb;
          color: #ffffff;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
        }

        .card-footer {
          margin-top: 25px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
        }

        .link-bold {
          color: #2563eb;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 4px;
        }
      `}</style>

      <button className="back-btn" onClick={() => onNavigate('login')}>
        ← Kembali
      </button>

      <div className="register-card">
        <h2 className="register-title">Daftar</h2>

        <div className="tab-switcher">
          <button className="tab-btn inactive" onClick={() => onNavigate('login')}>
            Login
          </button>
          <button className="tab-btn active">Daftar</button>
        </div>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            className="form-input"
            placeholder="Masukkan Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <input
            type="email"
            className="form-input"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="form-input"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn-submit">
            Daftar Sekarang
          </button>
        </form>

        <div className="card-footer">
          Sudah punya akun?
          <button className="link-bold" onClick={() => onNavigate('login')}>
            Masuk Di Sini
          </button>
        </div>
      </div>
    </div>
  );
}
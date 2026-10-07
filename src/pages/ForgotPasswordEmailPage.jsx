import React, { useState } from 'react';

export default function ForgotPasswordEmailPage({ onNavigate }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lanjut ke Halaman Verifikasi Kode (Langkah 2)
    onNavigate('forgot-otp');
  };

  return (
    <div className="forgot-screen">
      <style>{`
        .forgot-screen {
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
          margin-bottom: 40px;
        }

        .forgot-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 35px 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .forgot-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          text-align: center;
        }

        .forgot-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
          background-color: #ffffff;
        }

        .form-input:focus {
          border-color: #2563eb;
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
      `}</style>

      {/* Kembali ke Halaman Login */}
      <button className="back-btn" onClick={() => onNavigate('login')}>
        ← Kembali
      </button>

      <div className="forgot-card">
        <h2 className="forgot-title">Lupa Password</h2>
        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            className="form-input"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-submit">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
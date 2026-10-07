import React, { useState, useRef } from 'react';

export default function ForgotPasswordOtpPage({ onNavigate }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lanjut ke Halaman Reset Password (Langkah 3)
    onNavigate('forgot-reset');
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
          font-size: 22px;
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

        .otp-container {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 8px;
        }

        .otp-input {
          width: 48px;
          height: 48px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          outline: none;
          background-color: #ffffff;
        }

        .otp-input:focus {
          border-color: #2563eb;
        }

        .resend-text {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 8px;
          text-align: center;
        }

        .resend-btn {
          color: #2563eb;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
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

      {/* Kembali ke Halaman Input Email */}
      <button className="back-btn" onClick={() => onNavigate('forgot-email')}>
        ← Kembali
      </button>

      <div className="forgot-card">
        <h2 className="forgot-title">Masukkan Kode Verifikasi</h2>
        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="otp-container">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={otpRefs[idx]}
                type="text"
                maxLength="1"
                className="otp-input"
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                required
              />
            ))}
          </div>

          <p className="resend-text">
            Belum mendapatkan kode?{' '}
            <button
              type="button"
              className="resend-btn"
              onClick={() => alert('Kode ulang dikirim!')}
            >
              Kirim ulang
            </button>
          </p>

          <button type="submit" className="btn-submit">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
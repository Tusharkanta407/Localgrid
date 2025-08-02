import React, { useState, useRef } from 'react';
import { Button } from './ui/button';

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/, '');
    if (!val) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      {otp.map((digit, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputs.current[i] = el)}
          className="w-10 h-12 text-center text-lg border rounded focus:outline-none"
        />
      ))}
    </div>
  );
};

const Otp = () => {
  const [mobile, setMobile] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {!showOtp ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl mb-4 font-semibold">Enter Mobile Number</h2>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            className="border rounded px-4 py-2 w-64 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send OTP
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl mb-4 font-semibold">Enter OTP</h2>
          <OTPInput length={6} />
          <button className='px-5 py-2 bg-black text-black text-xl '>Verify</button>
        </div>
      )}
    </div>
  );
};

export default Otp;
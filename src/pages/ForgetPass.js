import React, { useState } from 'react';
import firebase from '../firebase';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import{Link} from 'react-router-dom'

const ForgetPass = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handleSendOTP = () => {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, 'IN');
    if (!phoneNumberObj || !phoneNumberObj.isValid()) {
      console.log('Invalid phone number');
      return;
    }

    const formattedPhoneNumber = phoneNumberObj.format('E.164');
    let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    firebase.auth().signInWithPhoneNumber(formattedPhoneNumber, recaptcha)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        alert('OTP sent');
      })
      .catch((error) => {
        console.log(error, "Error occurred");
      });
  };

  const handleVerifyOTP = () => {
    let code = prompt('Enter the OTP', '');
    if (code === null) return;
    firebase.auth().signInWithCredential(firebase.auth.PhoneAuthProvider.credential(verificationId, code))
      .then((result) => {
        console.log(result.user, 'user');
        document.querySelector('label').textContent = result.user.phoneNumber + " Number verified";

        window.location.href = "http://localhost:3000/reset";

      })
      .catch((error) => {
        console.log(error, "Error occurred");
        alert('Invalid OTP')
      }) ;
  };


  return (
    <div className='w-[30%] h-56 mx-auto'>
      <label className='text-pink-500 text-lg mt-5 mx-20 font-bold	'>Forget Password</label>
      <input
        type="text"
        className="mx-20 mt-10 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <br />
      <br />
       <button onClick={handleSendOTP} className='ml-20 bg-pink-700  px-2 rounded-md text-white py-2'>Send OTP</button>
      <button onClick={handleVerifyOTP} className='ml-10 bg-green-500 px-2 rounded-md text-white py-2'>Verify OTP</button>
      <div id="recaptcha"></div>
      <Link to={'/register'} className="mt-5 mx-20">
        Signup Now?
      </Link>
    </div>
  );
};

export default ForgetPass;

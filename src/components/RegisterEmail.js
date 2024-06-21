import React from 'react';

export default function RegisterEmail() {
  return (
    <div className="register">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <p className="text-wrapper">Create your Game Mind account</p>
          <p className="p">By continuing, you agree to Game Mind’s Terms of Service and Privacy Policy</p>
          <p className="already-have-an">
            <span className="span">Already have an account? </span>
            <span className="text-wrapper-2">sing in</span>
          </p>
          <div className="text-wrapper-3">Name*</div>
          <div className="text-wrapper-4">Enter your name</div>
          <div className="text-wrapper-5">Enter your email</div>
          <div className="text-wrapper-6">Enter your password</div>
          <div className="text-wrapper-7">Email*</div>
          <div className="text-wrapper-8">Password*</div>
          <div className="sign-in">
            <div className="text-wrapper-9">Get Started</div>
          </div>
        </div>
      </div>
    </div>
  )
}
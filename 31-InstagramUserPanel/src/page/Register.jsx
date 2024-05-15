import React from "react";

const Register = () => {
  return (
    <div className="instagram-signin-container">
      <div className="signin-form">
        <div className="ig-p">
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          className="input-field"
        />
        <input type="password" placeholder="Şifre" className="input-field" />
        <button className="signin-button">Giriş Yap</button>
      </div>
    </div>
  );
};

export default Register;

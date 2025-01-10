import React from "react";

function Login() {
  return (
    <>
      <div>
        <p>Kullanıcı adınız:</p>
        <input type="text"></input>
      </div>
      <div>
        <p>Şifreniz:</p>
        <input type="text"></input>
      </div>
      <button>Giriş Yap</button>
    </>
  );
}

export default Login;

//이진수가 건드렸어요 새롭게 ㅠㅠ
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from 'api'
import "css/Login.css";

import NaverLoginButton from "./NaverLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginBox = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault()
      const { data } = await loginUser({ email, password })
      console.log(data);
      history.push('/')
    } catch (error) {
      console.error(error);
    }
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  
  return (
    <section className="login_body">
      <div className="login_box_container">
        {/* login mode bar */}
        <div className="login_mode_box">
          <button
            onClick={() => {
              setMode("login");
            }}
            style={{ borderRight: "solid 1px #707070" }}
          >
            Sign in
          </button>
          <button
            onClick={() => {
              setMode("join");
            }}
          >
            Sign up
          </button>
        </div>

        {/* 로그인 모드에 따라 다른 DOM 보여주기 */}
        {mode === "login" ? (
          // LOGIN
          <form onSubmit={onSubmitForm}>
            <div className="login_box">
              <h1>로그인</h1>
              <input
                type="email"
                placeholder="이메일 주소 입력"
                value={ email }
                onChange={onChangeEmail}
              />
              <input
                type="password"
                placeholder="비밀번호 입력"
                value={ password }
                onChange={onChangePassword}
              />
              <section className="social_login_box">
                <font color="#e4e4e4">또는</font>
                <ul>
                  <li>
                    <GoogleLoginButton />
                  </li>
                  <li>
                    <NaverLoginButton />
                  </li>
                  <li>
                    <KakaoLoginButton />
                  </li>
                </ul>
                <p>소셜 네트워크로 로그인하세요.</p>
              </section>
              <button className="color_btn" type="submit" >로그인</button>
              
              <p>
                아직 SPANG계정이 없으신가요?{" "}
                <Link
                  to="#"
                  onClick={() => {
                    setMode("join");
                  }}
                >
                  가입하기
                </Link>
              </p>
              <p>
                <Link to="/#">혹시 비밀번호를 잊으셨나요?</Link>
              </p>
            </div>
          </form>
        ) : (
          // JOIN
          <div className="login_box">
            <h1>회원가입</h1>
            <section className="social_login_box">
              <button className="color_btn">이메일로 회원가입</button>
              <p>
                <font color="#e4e4e4">또는</font>
              </p>
              <ul>
                <li>
                  <GoogleLoginButton />
                </li>
                <li>
                  <NaverLoginButton />
                </li>
                <li>
                  <KakaoLoginButton />
                </li>
              </ul>
              <p>소셜 네트워크로 회원가입 해보세요.</p>
            </section>
            <p>이미 Spang 계정이 있으신가요?</p>
            <p>
              <Link
                to="/login"
                onClick={() => {
                  setMode("login");
                }}
              >
                기존 계정으로 로그인하기
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LoginBox;
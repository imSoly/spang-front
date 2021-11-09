import React, { useState, useHistory, useEffect } from "react";
import NaverLogin from "react-naver-login";
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";
import { Link } from "react-router-dom";
import "./Login.css";
import NaverLogo from "../img/naverLogo.png";
import GoogleLogo from "../img/googleLogo.png";
import KakaoLogo from "../img/kakaoLogo.png";
import axios from "axios";

function LoginBox() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   axios
  //     .post("/api", {
  //       id: "bla",
  //       pw: 1234,
  //     })
  //     .then(function (response) {
  //       console.log("response");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log("error");
  //       console.log(error.response.data);
  //     });
  // }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    // reload 막기
    event.preventDefault();
    // 넘겨줄 input 보관?
    const userInput = {
      email: email,
      password: password,
    };
    /* 로그인 처리, 페이지 이동 */
    console.log(userInput);
    // setEmail("");
    // setPassword("");
    // console.log(email, password);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseKakao = (response) => {
    console.log(response);
  };

  return (
    <section>
      <div className="login_box_container">
        <div className="login_mode_box">
          <button
            onClick={() => {
              setMode("login");
            }}
            style={{ borderRight: "solid 1px #707070" }}
          >
            로그인
          </button>
          <button
            onClick={() => {
              setMode("join");
            }}
          >
            회원가입
          </button>
        </div>

        {/* 로그인 모드에 따라 다른 DOM 보여주기 */}
        {mode === "login" ? (
          // LOGIN
          <form onSubmit={onSubmit}>
            <div className="login_box">
              <h1>로그인</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />
              <section className="social_login_box">
                또는
                <ul>
                  <li>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                      render={(renderProps) => (
                        <button
                          className="btn_login_google"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <img alt="login with google" src={GoogleLogo} />
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </li>
                  <li>
                    <NaverLogin
                      clientId={process.env.REACT_APP_NAVER_API_KEY}
                      callBackUrl="http://localhost:3000"
                      render={(renderProps) => (
                        <button
                          className="btn_login_naver"
                          onClick={renderProps.onClick}
                        >
                          <img alt="login with naver" src={NaverLogo} />
                        </button>
                      )}
                    />
                  </li>
                  <li>
                    <KakaoLogin
                      token={process.env.REACT_APP_KAKAO_API_KEY}
                      onSuccess={responseKakao}
                      onFail={responseKakao}
                      onLogout={responseKakao}
                      render={({ onClick }) => {
                        return (
                          <button className="btn_login_kakao" onClick={onClick}>
                            <img alt="login with kakao" src={KakaoLogo} />
                          </button>
                        );
                      }}
                    />
                  </li>
                </ul>
                <p>소셜 네트워크로 로그인하세요.</p>
              </section>
              <input className="color_btn" type="submit" value="Log in" />
              <p>
                아직 SPANG계정이 없으신가요? <Link to="/join">가입하기</Link>
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
              <p>또는</p>
              <ul>
                <li>
                  <button>Google</button>
                </li>
                <li>
                  <button>Naver</button>
                </li>
                <li>
                  <button>Kakao</button>
                </li>
              </ul>
              <p>소셜 네트워크로 회원가입 해보세요.</p>
            </section>
            <p>이미 Spang 계정이 있으신가요?</p>
            <p>
              <Link to="/login">기존 계정으로 로그인하기</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LoginBox;

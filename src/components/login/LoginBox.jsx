import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signInUser } from "api";
import NaverLoginButton from "./NaverLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";
import KakaoLoginButton from "./KakaoLoginButton";
import useInput from "hooks/useInput";

function LoginBox() {
  const [email, onChanedEmail, setEmail] = useInput("");
  const [pw, onChanedPw, setPw] = useInput("");

  const onReset = useCallback(() => {
    setEmail("");
    setPw("");
  }, [setEmail, setPw]);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const history = useHistory();
  // console.log("UserContext", UserContext);

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (!email || !pw) {
        alert("모든 값을 정확히 입력해주세요.");
        return;
      }
      const { data } = await signInUser({ email, pw });
      alert("로그인 되었습니다.");
      onReset();
      console.log(data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="login_box">
        <h1>로그인</h1>
        <input
          type="email"
          placeholder="이메일 주소 입력"
          value={email}
          onChange={onChanedEmail}
          required
        />
        <input
          type="password"
          placeholder="비밀번호 입력"
          value={pw}
          onChange={onChanedPw}
          required
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
        <button className="color_btn" type="submit" onClick={onSubmitForm}>
          로그인
        </button>


        {/* 로그인 모드에 따라 다른 DOM 보여주기 */}
        {mode === "login" ? (
          // LOGIN
          <form onSubmit={onSubmit}>
            <div className="login_box">
              <h1>로그인</h1>
              <input
                type="email"
                placeholder="이메일 주소 입력"
                name="email"
                onChange={onChange}
              />
              <input
                type="password"
                placeholder="비밀번호 입력"
                name="password"
                onChange={onChange}
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
              <input className="color_btn" type="submit" value="로그인" />
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
            <button className="color_btn">
              <Link  to="/#" onClick={console.log('dd')}>이메일로 회원가입하기</Link>

            </button>
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

        <p>
          아직 SPANG계정이 없으신가요? <Link to="/join">가입하기</Link>
        </p>
        <p>
          <Link to="/#">혹시 비밀번호를 잊으셨나요?</Link>
        </p>

      </div>
    </form>
  );
}

export default LoginBox;

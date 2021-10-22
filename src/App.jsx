import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import Notice from "./Notice/Notice.jsx";
import Payment from "./Payment/Payment.jsx";
import LoginBox from "./Login/LoginBox.jsx";
import SearchBox from "./Search/SearchBox.jsx";
import MyPage from "./MyPage/MyPage.jsx";

const communityTitle = [
  "배드민턴이 너무 어려워요....",
  "이 배드민채 어떤가요?",
  "체육관 너무 좋네요^^",
  "배린이 임니다 ㅎ,,",
];

const notice = [
  "배드민턴은 SIPANG...",
  "으음~ 머시따~!",
  "내 집 같은 체육관은 ...",
  "SIPANG 예약 할인 이벤트!",
];

function App() {

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main communityTitle={communityTitle} notice={notice} />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/notice">
          <Notice />
        </Route>

        <Route path="/login">
          <LoginBox />
        </Route>
        {/* <Route path="/join"><JoinBox /></Route> */}
        <Route path="/search">
          <SearchBox />
        </Route>

        <Route path="/my-page">
          <MyPage />
        </Route>

      </Switch>

      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import Notice from "./Notice/Notice.jsx";
import NoticeView from "./Notice/NoticeView.jsx";
import NoticeWrite from "./Notice/NoticeWrite.jsx";
import Payment from "./Payment/Payment.jsx";
import LoginBox from "./Login/LoginBox.jsx";
import SearchBox from "./Search/SearchBox.jsx";
import MyPage from "./MyPage/MyPage.jsx";
import MyPagePast from "./MyPage/MyPagePast.jsx";
import Community from "./Community/Community.jsx";
import CommunityView from "./Community/CommunityView.jsx";
import CommunityWrite from "./Community/CommunityWrite.jsx";

const communityTitle = [
  "배드민턴이 너무 어려워요....",
  "이 배드민채 어떤가요?",
  "체육관 너무 좋네요^^",
  "배린이 임니다 ㅎ,,",
];

const noticeTitle = [
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
          <Main communityTitle={communityTitle} noticeTitle={noticeTitle} />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/notice">
          <Notice />
        </Route>

        <Route path="/notice-view">
          <NoticeView />
        </Route>

        <Route path="/notice-write">
          <NoticeWrite />
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

        <Route path="/my-page-past">
          <MyPagePast />
        </Route>

        <Route path="/community">
          <Community />
        </Route>

        <Route path="/community-view">
          <CommunityView />
        </Route>

        <Route path="/community-write">
          <CommunityWrite />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;

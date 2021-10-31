import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyPage.css";

function MyPage(props) {

  return (
    <>
      <div className="mypage_profile">
        <div className="mypage_img"></div>
        <div className="mypage_id">
          반가워요! '회원닉네임'님!
        </div>
        <div className="mypage_box1">
          예약하기
        </div>
        <div className="mypage_box2">
          회원정보 수정
        </div>
      </div>

      <div className="mypage_history_box">
        <div className="mypage_history">
          <div className="mypage_future_history1">
            <Link to="/my-page" style={{ color: "black" }}>예약내역 /</Link>
          </div>
          <div className="mypage_future_history2">
          <Link to="/my-page-past" style={{ color: "black" }}>과거 예약내역</Link>
          </div>
        </div>
        <div className="mypage_gym">
          <div className="mypage_gym_img"></div>
          <div className="mypage_gym_info">
            <div className="mypage_gym_infotext">체육관 : 우리동네 체육관</div>
            <div className="mypage_gym_infotext">시간 : 11:30</div>
            <div className="mypage_gym_infotext">금액 : 23,000원</div>
            <button className="mypage_gym_cancel">예약 취소</button>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default MyPage;

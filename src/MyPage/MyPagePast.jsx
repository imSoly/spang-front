import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyPagePast.css";

function MyPagePast(props) {

  return (
    <>
      <div className="mypagepast_profile">
        <div className="mypagepast_img"></div>
        <div className="mypagepast_id">
          반가워요! '회원닉네임'님!
        </div>
        <div className="mypagepast_box1">
          예약내역 확인
        </div>
        <div className="mypagepast_box2">
          회원정보 수정
        </div>
      </div>

      <div className="mypagepast_history_box">
        <div className="mypagepast_history">
          <div className="mypagepast_future_history1">
            <Link to="/my-page" style={{ color: "black" }}>예약내역 /</Link>
          </div>
          <div className="mypagepast_future_history2">
            <Link to="/my-page-past" style={{ color: "black" }}>과거 예약내역</Link>
          </div>
        </div>
        <div>
          {[1, 2, 3, 4].map(function (a, i) {
            return (
              <div className="mypagepast_gym">
                <div className="mypagepast_gym_img"></div>
                <div className="mypagepast_gym_info">
                  <div className="mypagepast_gym_infotext">체육관 : 우리동네 체육관</div>
                  <div className="mypagepast_gym_infotext">시간 : 11:30</div>
                  <div className="mypagepast_gym_infotext">금액 : 23,000원</div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </>
  );
}

export default MyPagePast;

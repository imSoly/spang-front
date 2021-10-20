import React, { useState } from "react";
import "./ShowInfo.css";

function ShowInfo(props) {
  const [isShow, setIsShow] = useState(true);

  return (
    <section>
      <>
        {/* <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        trigger
      </button>

        <h1>isShow : {isShow}</h1> */}
      </>

      <section>
        <article className="info_container">
          <div className="info_item_image">
            <button className="btn_right">👈</button>
            <img alt="facility infomation" src={props.facility.img[0]} />
            <img alt="facility infomation" src={props.facility.img[1]} />
            <img alt="facility infomation" src={props.facility.img[2]} />
            <button className="btn_right">👉</button>
          </div>
          <div class="info_item_text">
            <p>기관명 : {props.facility.name}</p>
            <p>주소 : {props.facility.address}</p>
            <p>전화번호 : {props.facility.call}</p>
            <p>코트 수 : {props.facility.courtNum}</p>
            <p>1시간 금액 : {props.facility.perHour}</p>
          </div>
          <button className="btn_rez">예약하기</button>
          <button className="btn_forward">체육관 바로가기</button>
        </article>
      </section>
    </section>
  );
}

export default ShowInfo;

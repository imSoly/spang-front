import React, { useState } from "react";
import "./SelectTime.css";

const SelectTime = () => {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState(0);
  return (
    <>
      <div className="SelectTime_box">
        <div className="select_bar">select_bar</div>
        <div className="selected_time">
          <input name="startTime" type="text" value={startTime} readOnly />
          ~
          <input name="endTime" type="text" value={endTime} readOnly />
        </div>
        <h1>
          총 {parseInt(totalTime / 60)}시간 {parseInt(totalTime % 60)}분
          예약하시겠습니까?
        </h1>
        <button className="btn_submit_rez">예약하기</button>
      </div>
    </>
  );
};

export default SelectTime;

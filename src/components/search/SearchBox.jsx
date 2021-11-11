import React from "react";
import "./search.css";
import ShowInfo from "./ShowInfo.jsx";
import Map from "./Map";
import SelectTime from "./SelectTime.jsx";

let facility = {
  name: "",
  address: "",
  call: "",
  courtNum: 0,
  perHour: 0,
  img: [
    "https://picsum.photos/60/54",
    "https://picsum.photos/60/54",
    "https://picsum.photos/60/54",
  ],
};

function SearchBox(props) {
  const isShow = props.isShow;
  let showInfo = <ShowInfo facility={facility} />;

  if (isShow) {
    showInfo = <ShowInfo facility={facility} isShow={true} />;
  } else {
    showInfo = <ShowInfo facility={facility} isShow={false} />;
  }

  return (
    <section className="search_contents">
      <input
        className="search_box"
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <div className="map">
        <Map />
      </div>
      {/* <ShowInfo isShow={isShow} /> */}
      {showInfo}
      <SelectTime />
    </section>
  );
}

export default SearchBox;

import React, { useState } from "react";
import "css/search.css";
// import Map from "./Map";
// import SelectTime from "./SelectTime.jsx";

// let facility = {
//   name: "",
//   address: "",
//   call: "",
//   courtNum: 0,
//   perHour: 0,
//   img: [
//     "https://picsum.photos/60/54",
//     "https://picsum.photos/60/54",
//     "https://picsum.photos/60/54",
//   ],
// };

function SearchBox({}) {
  // query
  const [query, setQuery] = useState(null);
  // const isShow = props.isShow;
  // let showInfo = <ShowInfo facility={facility} />;

  const changeQuery = (e) => {
    console.log("value : ", e.target.value);
    setQuery(e.target.value);
    console.log("query : ", query);
    console.log("============");
  };

  return (
    <section className="search_contents">
      <input
        className="search_box"
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={changeQuery}
      />
    </section>
  );
}

export default SearchBox;

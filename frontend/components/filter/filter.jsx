import { useRef } from "react";
import "./filter.css";

const Filter = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -200 : 200,
//         behavior: "smooth",
//       });
//     }
//   };

  return (
    <>
    <div className="filter-container">
      <div className="filter"><img src="/resources/filter.png" alt="skitbit-image"/><h5>Filter</h5></div>
      <div className="hash"><h5>Character Animation</h5></div>
      <div className="filter"><h5>Animation GIFS</h5></div>
      <div className="filter"><h5>Animation for Kids</h5></div>
      <div className="filter"><h5>Animation for Streamers</h5></div>
      <div className="filter"><h5>Animation for business</h5></div>
      <div className="filter"><h5>Skit one memebership</h5></div>
    </div>
    <div className="filter-scroller">
      <div className="lefti"><img src="/resources/left-arrow.png" alt="skitbit"/></div>
      <div className="righti"><img src="/resources/right-arrow.png" alt="skitbit"/></div>
    </div>
    </>
  );
};

export default Filter;

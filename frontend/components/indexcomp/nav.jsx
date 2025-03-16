import React, {useEffect, useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const [placeholderText, setplaceholderText] = useState("what services are you looking for ?")
  useEffect(()=>{
    const updateplaceholderText = ()=>{
      if (window.innerWidth <= 850){
        setplaceholderText("search services")
      }else{
        setplaceholderText("what services are you looking for ?")
      }
    }
    updateplaceholderText()
    window.addEventListener("resize", updateplaceholderText)
    return ()=>{
      window.removeEventListener("resize", updateplaceholderText)
    }
  }, [])


  return (
    <nav className="nav">
      {/* Logo */}
      <img src="/resources/logo.png" alt="skitbit-logo" className="logo" />
      <img src="/resources/favicon.svg" alt="skitbit-logo" className="newlogo" />

      {/* Search Bar */}
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#6b7280"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <input
          type="search"
          placeholder={placeholderText}
        />
      </div>

      <div className="nav-right">
        <button className="signup-btn" onClick={() => navigate('/create-account')}>Sign up</button>
        <img src="/resources/profile.png" alt="skitbit-profile-image" className="profile-img" />
      </div>
    </nav>
  );
};

export default Nav;

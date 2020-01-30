import React, { useState } from "react";
import "./Header.css";
import banner from "../images/World_of_Crucible_Banner_Text.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface IHeader {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  const links: Array<{ name: string, to: string }> = [
    { name: "History", to: "/history" },
    { name: "Religion", to: "/religion" },
  ];

  return (
    <div className="main-header">
      <div className="big-header">
        <Link to="/">
          <img src={banner} alt="World of Crucible" />
        </Link>
      </div>
      <div className="small-header" onClick={() => props.setVisible(true)}>
          {
            !props.visible && (<img src={banner} alt="World of Crucible" />)
          }
      </div>
      <div id="flyoutMenu" onClick={() => props.setVisible(!props.visible)}
        className={props.visible ? "show" : "hide"}>
        <h2>
          <Link to={"/"}>Home</Link>
        </h2>
        {
          links.map((l, i) => (
            <h2 key={i}>
              <Link to={l.to}>{l.name}</Link>
            </h2>
          ))
        }
      </div>
      <div className={`top-options`}>
        <ul>
          {
            links.map((l, i) => (
              <li key={i}>
                <Link to={l.to}>{l.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;

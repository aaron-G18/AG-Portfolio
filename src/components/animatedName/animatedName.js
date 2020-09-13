import React from "react";
import "./style.css";
import BottomLinks from "../links/links";

export default function frontPage(props) {
  // functions


  return (
    <div className="sidebar">
        <div class="animated-title">
            <div class="text-top">
                <div className="top-box">
                <span>Aaron Garner</span>
                    <img className="aaron-suit" src="./images/Aaron_Suit_Cropped.jpg" alt="aaron in suit" />
                </div>
            </div>
            <div class="text-bottom">
                <div className="bottom-content">
                    <BottomLinks />
                </div>
            </div>
        </div>
    </div>
  );
}

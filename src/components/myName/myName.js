import React from "react";
import { Wave } from 'react-animated-text';
import "./style.css";

export default function myName(props) {
  // functions

  return (
    <Wave 
    text="Aaron Garner"
    effect="verticalFadeIn"
    effectChange={.5}
    effectDuration={.3}
    iterations={1}
    />
  );
}
import React from "react";
import { FaBalanceScale } from "react-icons/Fa";

const titleContainer = (props) => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
        }}
      >
        <FaBalanceScale style={{width:'24px', height:'24px'}}/>
        <h1
          style={{
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            margin: "40px 20px 60px",
            fontSize: "48px",
            fontFamily: "Bellefair, serif",
            fontWeight: "700",
            textShadow: "2px 2px 4px rgb(105, 105, 105)"
          }}
        >
          {props.title}
        </h1>
        <FaBalanceScale style={{width:'24px', height:'24px'}}/>
      </div>
    </>
  );
};

export default titleContainer;

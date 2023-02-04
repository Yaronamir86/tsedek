import React from "react";
import { GiScales } from "react-icons/gi";

const titleContainer = (props) => {
  return (
    <>
      <div
        style={{
          margin: "200px 0 200px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          width: "1440px",
          borderStartStartRadius: "400px 300px",
          borderEndEndRadius: "400px 300px",
          backgroundColor: "white",
          color: "#333",
          backgroundImage: "url(/circle.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <GiScales style={{ width: "52px", height: "52px" }} />
        <h1
          style={{
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            margin: "20px 20px",
            fontSize: "96px",
            fontFamily: "Bellefair, serif",
            fontWeight: "700",
            textShadow: "1px 2px  rgb(105, 105, 105)",
          }}
        >
          {props.title}
        </h1>
        <GiScales style={{ width: "52px", height: "52px" }} />
      </div>
    </>
  );
};
export default titleContainer;

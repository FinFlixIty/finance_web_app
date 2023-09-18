import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import video from "./delete/video_preview_h264.mp4"
import image1 from "./delete/image1.jpeg"
import Navbar from "./Navbar"
import "./style.css"
function Parallex() {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0}
          speed={2.5} position="fixed" top="0" height >
            <Navbar />
          </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"#000000"
          }}
        >          <h1>Hover Me</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Parallex;

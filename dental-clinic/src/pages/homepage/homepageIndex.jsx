import React from "react";
import Certificate from "./Certificate/Certificate";
import Consultant from "./Consultant/Consultant";
import Doctor from "./Doctor/Doctor";
import Reason from "./Reason/Reason";
import Service from "./Service/Service";
import SliderBanner from "./Slider/SliderBanner";
import StoryContainer from "./Story/StoryContainer";
import Sale from "./Sale/Sale";
import Time from "./Time/Time";

export default function HomepageIndex() {
  return (
    <>
      <SliderBanner />

      <Consultant />

      <Reason />

      <Service />

      <Doctor />

      <Certificate />

      <StoryContainer />

      <Sale />

      {/* <Time /> */}
    </>
  );
}

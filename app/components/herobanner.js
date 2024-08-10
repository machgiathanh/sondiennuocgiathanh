import { Carousel } from "antd";
export default function HeroBanner() {
  return (
    <Carousel className="hero-banner" autoplay={true} arrows={true}>
      <img src="/a-ba-1.png" alt=""></img>
      <img src="/a-ba-2.jpg" alt=""></img>
      <img src="/a-ba-3.jpg" alt=""></img>
      <img src="/a-ba-4.jpg" alt=""></img>
    </Carousel>
  );
}

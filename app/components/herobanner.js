import { Carousel } from "antd";
export default function HeroBanner() {
  return (
    <Carousel className="hero-banner" autoplay={true} arrows={true}>
      <img
        src="https://sonjotun.vn/upload/images/logo_1705072216.png"
        alt=""
      ></img>
      <img
        src="https://www.jotun.com/contentassetsjot03/e0c5c39549044aedafef41e81f36a805/farger.jpg"
        alt=""
      ></img>
      <img
        src="https://www.jotun.com/contentassetsjot03/f496f6f2b1bb4036a08eccafc273fa4e/vietnam-indoors-products-web-1440x870_tcm352-226580.jpg"
        alt=""
      ></img>
      <img
        src="https://www.jotun.com/contentassetsjot03/c5f84c1fda0f4fcd98897ea1d068f61f/interior_1420x870.jpg"
        alt=""
      ></img>
    </Carousel>
  );
}

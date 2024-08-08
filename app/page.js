"use client";
import {
  Button,
  Image,
  Rate,
  Avatar,
  Card,
  QRCode,
  Space,
  Spin,
  Flex,
  Progress,
  Col,
  Row,
  Link,
} from "antd";
import Footer from "./components/footer";
import { product_list } from "./data";
import HeroBanner from "./components/herobanner";
import Header from "./components/Header";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#d9f2fa",
      }}
    >
      <Header></Header>
      <HeroBanner />
      <Row
        gutter={[16, 16]}
        style={{
          maxWidth: "1080px",
          margin: "auto",
          marginTop: "16px",
        }}
      >
        {product_list.map((item, index) => (
          <Col key={index} md={8} xs={12}>
            <a href={item.link}>
              <Card hoverable cover={<img alt="example" src={item.image} />}>
                <h3
                  style={{
                    fontWeight: "bold",
                    height: "44px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </h3>
                <p>{item.price}</p>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      <Footer></Footer>
    </div>
  );
}

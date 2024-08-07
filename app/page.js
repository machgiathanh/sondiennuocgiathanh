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
import { prd1, prd2, prd3, product_list } from "./data/page";
import HeroBanner from "./components/herobanner";
import Header from "./components/Header";
import Item from "antd/es/list/Item";
const { Meta } = Card;
export default function Home() {
  return (
    <div>
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
        {product_list.map((item) => (
          <Col md={8} xs={12}>
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

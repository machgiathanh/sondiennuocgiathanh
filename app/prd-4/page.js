"use client";
import { Row, Col, Card, Typography, Button, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { product_list } from "../data/page";
import Footer from "../components/footer";
import Header from "../components/Header";
import Gallery from "../components/gallery";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function hello() {
  const product3 = product_list[3];
  return (
    <div>
      <Header>{Header.link}</Header>
      <Row
        gutter={15}
        style={{
          maxWidth: "1080px",
          margin: "auto",
          marginTop: "16px",
          backgroundColor: "#ffff",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Col md={8} xs={24}>
          <Gallery images={product3.gallery}></Gallery>
        </Col>
        <Col md={16} xs={24} gutter={15}>
          <div>
            <Typography.Title level={3}>{product3.name}</Typography.Title>
            <Typography
              style={{
                color: "#1435c3",
                fontSize: 20,
                fontWeight: 700,
              }}
              level={4}
            >
              {product3.price}
            </Typography>
            <Typography.Text level={5}>
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {product3.price_sale}
              </span>
              {product3.discount_percent}
            </Typography.Text>
          </div>
          <h4>
            <strong>Thương hiệu:</strong> Sơn Jotun
          </h4>
          <h4>
            <strong>Mã sản phẩm:</strong> Jotun Jotaplast
          </h4>
          <h4>
            <strong>Trạng thái:</strong> Có hàng
          </h4>
          <Button
            size="large"
            type="primary"
            style={{ marginTop: 20 }}
            href="0939963888"
          >
            Liên hệ ngay
          </Button>
        </Col>
      </Row>
      <Row
        style={{
          maxWidth: "1080px",
          margin: "auto",
          marginTop: "16px",
          backgroundColor: "#ffff",
          padding: 16,
          borderRadius: 8,
          paddingLeft: 12,
          paddingRight: 12,
        }}
        gutter={16}
      >
        <Col md={16} xs={24}>
          <Typography.Title level={4}>Mô Tả Sản Phẩm </Typography.Title>
          <Typography.Title level={5}>
            1. Giới thiệu sản phẩm Sơn nội thất Jotun Jotaplast
          </Typography.Title>
          <span>
            {" "}
            <Typography>
              Dòng sơn nội thất Jotun Jotaplast tiết kiệm được chi phí cho công
              trình của bạn nhưng chắc chắn sẽ không có nhiều tính năng vượt
              trội như những dòng sơn nước cao cấp và trung cấp. Nhưng nói về
              chất lượng thì ổn hơn rất nhiều so với các thương hiệu khác trên
              thị trường bởi Jotun được biết đến là một thương hiệu sơn tốt và
              uy tín. Chất sơn bóng mờ siêu mịn, đảm bảo được độ che phủ tốt,
              chống nấm mốc và dễ dàng thi công mang lại hiệu quả kinh tế cao.
            </Typography>
          </span>
          <img src="/son-6.png" alt=""></img>

          <Typography.Title level={5}>
            2. Đặc tính của sơn nội thất Jotun Jotaplast.
          </Typography.Title>

          <ul>
            <li>
              {" "}
              Sơn nội thất kinh tế gốc Acrylic bảo vệ tốt cho bề mặt sơn.
            </li>
            <li> Màng sơn bóng mờ siêu mịn.</li>
            <li> Độ che phủ cao hỗ trợ công trình nhanh chóng và dễ dàng.</li>
            <li>Hiệu quả kinh tế.</li>
          </ul>

          <Typography.Title level={5}>3. Dung tích</Typography.Title>

          <ul>
            <li>Thùng 17 Lít</li>
            <li>Lon 5 Lít</li>
          </ul>

          <Typography.Title level={5}>
            4. Cách thực hiện sơn phủ màu hiệu quả
          </Typography.Title>

          <ul className="">
            <li>
              Cần chuẩn bị đầy đủ các dụng cụ sơn: rulo, cọ sơn hay máy phun
              sơn.
            </li>
            <li>
              Trước khi tiến hành sơn phủ màu, bạn phải đảm bảo chắc chắn về bề
              mặt của tường luôn trong trạng thái sạch và khô ráo tránh ảnh
              hưởng đến quá trình thi công sơn phủ để có được một bề mặt đều màu
              đồng thời giúp sơn phát huy tác dụng một cách tốt nhất.
            </li>
            <li>
              Sau 2 giờ khi đã sơn lót chống kiềm, cơ bản bạn có thể thực hiện 1
              lớp sơn phủ màu. Đợi cho khô ráo hoàn toàn lớp sơn đầu (khoảng 2
              giờ), bạn nên kiểm tra lại xem bề mặt tường đã đồng đều màu hay
              chưa và lấp vá các chỗ còn thiếu sót và tiến hành cho lớp sơn thứ
              2.
            </li>
            <li>
              Lưu ý về điều kiện thời tiết để tránh làm hỏng lớp sơn vừa mới thi
              công
            </li>
          </ul>
        </Col>
        <Col md={8} xs={24} style={{ width: "100%" }}>
          <Typography.Title level={5}>Thông Tin Sản Phẩm</Typography.Title>
          {product3.attributes.map((item, index) => (
            <Row
              style={{
                padding: 8,
                background: index % 2 ? "#ddd" : "#fff",
                width: "100%",
              }}
            >
              <Col span={12}>{item.label}</Col>
              <Col span={12}>{item.value}</Col>
            </Row>
          ))}
        </Col>
      </Row>

      <div
        style={{
          maxWidth: 1080,
          margin: "auto",
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <Divider />
        <Typography.Title level={3}>KHÁM PHÁ THÊM</Typography.Title>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={16}
        >
          {product_list.map((item) => (
            <SwiperSlide>
              <a href={item.link}>
                <Card
                  hoverable
                  cover={
                    <img
                      style={{ height: "160px", objectFit: "contain" }}
                      src={item.image}
                    />
                  }
                >
                  <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                </Card>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer></Footer>
    </div>
  );
}

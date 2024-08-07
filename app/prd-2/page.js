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
  const product1 = product_list[1];
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
          <Gallery images={product1.gallery}></Gallery>
        </Col>
        <Col md={16} xs={24} gutter={15}>
          <div>
            <Typography.Title level={3}>{product1.name}</Typography.Title>
            <Typography
              style={{
                color: "#1435c3",
                fontSize: 20,
                fontWeight: 700,
              }}
              level={4}
            >
              {product1.price}
            </Typography>
            <Typography.Text level={5}>
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {product1.price_sale}
              </span>
              {product1.discount_percent}
            </Typography.Text>
          </div>
          <h4>
            <strong>Thương hiệu:</strong> Sơn Jotun
          </h4>
          <h4>
            <strong>Mã sản phẩm:</strong> Jotun Jotashield CPM 5L
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
            1. Sơn ngoại thất Jotun Jotashield chống phai màu
          </Typography.Title>
          <Typography>
            Để đáp ứng nhu cầu ngày càng cao của khách hàng, Jotun đã cho ra đời
            dòng sơn nước ngoại thất Jotun Jotashield chống phai màu với nhiều
            tính năng vượt trội bất ngờ. Ngoài hỗ trợ các tính năng thông thường
            như khả năng che phủ tốt, chống nấm mốc, rêu mốc, dễ lau chùi, hạn
            chế chế bám bụi và chống thấm hiệu quả.
          </Typography>
          <img src="/son-3.png" alt=""></img>
          <Typography>
            <strong>Jotun Jotashield bền màu tối ưu </strong>được kiểm tra và
            chứng thực đầy đủ bởi các phòng thí nghiệm độc về khả năng bảo vệ và
            độ bền màu cao.
          </Typography>
          <img src="/son-2.png" alt=""></img>
          <Typography.Title level={5}>
            2. Công nghệ Jotun Pigment Technology
          </Typography.Title>
          <Typography>
            được áp dụng công nghệ chất tạo màu tiên tiến mới và độc quyền Jotun
            Pigment Technology đảm bảo cho không gian nhà bạn một diện mạo đầy
            màu sắc với bảng màu đa dạng theo nhiều phong cách khác nhau từ
            những chuyên gia hàng đầu trên thế giới. Mang lại một không gian
            sống đích thực - nâng bước bạn đến với thành công trong mọi kế hoạch
            cuộc sống.
          </Typography>
          <Typography.Title level={5}>
            3. Đặc tính Jotun Jotashield
          </Typography.Title>
          <ul>
            <li> Kháng tia cực tím gấp 2 lần.</li>
            <li> Chống bám bụi.</li>
            <li>Giảm nhiệt.</li>
            <li>Chống rong rêu và nấm móc.</li>
            <li>Chống thấm nước.</li>
            <li>8 năm bảo vệ.</li>
            <li>Không chứa hóa chất độc hại.</li>
          </ul>

          <Typography.Title level={5}>4. Dung tích</Typography.Title>

          <ul className="">
            <li>Lon 1 Lít.</li>
            <li>Lon 5 Lít.</li>
            <li>Thùng 15 Lít.</li>
            <li>Thùng 17 Lít.</li>
          </ul>

          <Typography.Title level={5}>
            5-cach-thuc-hien-son-phu-mau-hieu-qua
          </Typography.Title>
          <ul>
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
              công.
            </li>
          </ul>
        </Col>
        <Col md={8} xs={24} style={{ width: "100%" }}>
          <Typography.Title level={5}>Thông Tin Sản Phẩm</Typography.Title>
          {product1.attributes.map((item, index) => (
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

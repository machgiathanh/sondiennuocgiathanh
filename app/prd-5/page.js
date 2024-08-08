"use client";
import { Row, Col, Card, Typography, Button, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { product_list } from "../data";
import Footer from "../components/footer";
import Header from "../components/Header";
import Gallery from "../components/gallery";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function hello() {
  const product4 = product_list[4];
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
          <Gallery images={product4.gallery}></Gallery>
        </Col>
        <Col md={16} xs={24} gutter={15}>
          <div>
            <Typography.Title level={3}>{product4.name}</Typography.Title>
            <Typography
              style={{
                color: "#1435c3",
                fontSize: 20,
                fontWeight: 700,
              }}
              level={4}
            >
              {product4.price}
            </Typography>
            <Typography.Text level={5}>
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {product4.price_sale}
              </span>
              {product4.discount_percent}
            </Typography.Text>
          </div>
          <h4>
            <strong>Thương hiệu:</strong> Sơn Jotun
          </h4>
          <h4>
            <strong>Mã sản phẩm:</strong> Jotun Jotashield
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
            1. Sơn Jotun Jotashield bền màu tối ưu
          </Typography.Title>
          <Typography>
            Nếu bạn đang tìm kiếm một sản phẩm sơn nước ngoại thất chất lượng,
            luôn bền bỉ sau một thời gian dài và kháng được tia cực tím tối đa
            để bảo vệ vững chắc cho&nbsp;diện mạo của ngôi nhà bạn thì dòng sơn
            ngoại thất <strong>Jotun Jotashield bền màu tối ưu</strong> này đích
            thực là sự lựa chọn hoàn hảo dành cho bạn. Bởi dòng sơn này sở hữu
            nhiều tính năng nổi bật và tiện lợi với khả năng chống nấm mốc, rêu
            mốc tốt và hạn chế bám bụi hoàn hảo. Điểm nhấn chính trong sản phẩm
            chính là khả năng kháng tia cực tím và đảm bảo cho bề mặt tường bên
            ngoài nhà lên đến 12 năm.
          </Typography>
          <img src="/son-1.png" alt=""></img>
          <Typography>
            <strong>Jotun Jotashield bền màu tối ưu </strong>được kiểm tra và
            chứng thực đầy đủ bởi các phòng thí nghiệm độc về khả năng bảo vệ và
            độ bền màu cao.
          </Typography>
          <img src="/son-2.png" alt=""></img>
          <Typography.Title level={5}>
            2. Đặc tính Jotashield bền màu tối ưu
          </Typography.Title>
          <ul>
            <li> Chống nóng (phản nhiệt gấp 2 lần).</li>
            <li> 12 năm bảo vệ.</li>
            <li> Bền màu gấp 2 lần.</li>
            <li> Bền thời tiết & chống bám bụi.</li>
            <li> Ngăn ngừa sự phát triển của rong rêu, nấm mố.</li>
            <li> 100% nhựa Acrylic nguyên chất công nghệ cao.</li>
            <li> Giảm ăn mòn đối với các kết cấu.</li>
          </ul>
          <Typography.Title level={5}>3. Dung tích</Typography.Title>
          <ul>
            <li>Lon 5 Lít</li>
            <li>Lon 1 Lít</li>
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
          {product4.attributes.map((item, index) => (
            <Row
              key={index}
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
          {product_list.map((item, index) => (
            <SwiperSlide key={index}>
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

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
  const product8 = product_list[8];
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
          <Gallery images={product8.gallery}></Gallery>
        </Col>
        <Col md={16} xs={24} gutter={15}>
          <div>
            <Typography.Title level={3}>{product8.name}</Typography.Title>
            <Typography
              style={{
                color: "#1435c3",
                fontSize: 20,
                fontWeight: 700,
              }}
              level={4}
            >
              {product8.price}
            </Typography>
            <Typography.Text level={5}>
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {product8.price_sale}
              </span>
              {product8.discount_percent}
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
            1. Sơn nước nội thất Jotun Majestic sang trọng bóng
          </Typography.Title>
          <Typography>
            Sơn nước nội thất Jotun Majestic sang trọng ( bóng ) góp phần đảm
            bảo không gian sống đẹp trong lành. Không chỉ nổ lực mang đến bề mặt
            láng mịn hoàn hảo và bền màu, Majestic sang trọng còn giúp làm sạch
            không khí trong nhà nhờ công nghệ Clean Air độc quyền
          </Typography>
          <Typography>
            Đây là dòng sản phẩm sơn nội thất siêu cao cấp duy nhất trên thị
            trường thỏa mãn đồng thời cả hai nhu cầu :{" "}
          </Typography>
          <ul>
            <li>Bề mặt tường bóng đẹp sang trọng</li>
            <li>
              Khả năng làm sạch không khí mang đến một không gian sống trong
              lành hơn.
            </li>
          </ul>
          <img style={{ marginTop: 10 }} src="/son-7.png" alt=""></img>

          <Typography.Title level={5}>2. Tính năng nổi bật</Typography.Title>
          <Typography>
            Sơn nước nội thất Jotun Majestic sang trọng ( bóng ) là dòng sản
            phẩm siêu cao cấp với nhiều tính năng nổi bật
          </Typography>
          <img style={{ marginTop: 10 }} src="/son-8.png" alt="" />
          <ul>
            <li>
              {" "}
              <strong>Làm sạch không khí:</strong> Cải thiện chất lượng không
              khí trong nhà bằng cách loại bỏ hơn 90% formaldehyde trong nhà.
              Gia tăng chất lượng không khí, mang đến không gian sống an toàn
              nhất.
            </li>
            <li>
              {" "}
              <strong>Siêu nhẹ mùi:</strong> Sử dụng nguyên liệu có hàm lượng
              VOC siêu thấp, sơn thành phẩm siêu nhẹ mùi. Bạn có thể chuyển ngay
              vào ngôi nhà mới sơn.
            </li>
            <li>
              {" "}
              <strong>Siêu láng min:</strong> Mang đến bề mặt sơn tốt nhất mà
              bạn có thể sở hữu. Tường nhà bạn sẽ đẹp và sang trọng trong thời
              gian dài.
            </li>
            <li>
              {" "}
              <strong>Che phủ vết nứt:</strong> Công thức sơn được phát triển
              đặc biệt tạo nên độ co giãn cao giúp che phủ tốt các vết nứt nhỏ.
              Độ phủ liền mạch, đảm bảo bức tường của bạn sẽ đẹp hoàn hảo.
            </li>
          </ul>
          <img
            style={{ marginTop: 10 }}
            src="https://www.paintmart.vn/image/catalog/SON-JOTUN/majestic-sang-trong/kha-nang-che-phu-vet-nut-cua-son-majestic-sang-trong.jpg"
            alt=""
          />
          <Typography>
            Ngoài những tính năng đặc trưng trên thì dòng majestic sang trọng
            cũng sở hưu những tính năng khác của dòng majestic như:{" "}
          </Typography>
          <ul>
            <li>Kháng khuẩn chống nấm mốc </li>
            <li>Lau chùi vượt trội </li>
            <li>Màu sắc rực rỡ bền lâu </li>
          </ul>
          <Typography.Title level={5}>
            3. Công nghệ màu đích thực
          </Typography.Title>
          <Typography>
            Đây là loại sơn cao cấp acrylic gốc nước. Sản phẩm này ứng dụng
            những kinh nghiệm <strong>"Công nghệ màu đích thực "&nbsp;</strong>
            mang lại cho ngôi nhà bạn một không gian đẹp mà bạn đang mong chờ.
            Với một bề mặt hoàn thiện có màu sắc sang trọng và bóng mịn, loại
            sơn này mang lại cho tường nhà bạn khả năng dễ dàng vệ sinh lau
            chùi.
          </Typography>
          <img style={{ marginTop: 10 }} src="/son-9.png" alt="" />
          <Typography>
            "Công nghệ màu đích thực" độc quyền của Jotun nhằm bảo đảm mang lại
            màu sắc đồng nhất và chính xác, là một công thức độc nhất bao gồm
            các nguyên liệu chất lượng. Với cam kết "Thân thiện môi trường" của
            Jotun, bạn có thể được bảo đảm rằng loại sơn này an toàn cho bạn và
            môi trường sống.{" "}
          </Typography>
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
          {product8.attributes.map((item, index) => (
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

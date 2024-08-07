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
  const product2 = product_list[2];
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
          <Gallery images={product2.gallery}></Gallery>
        </Col>
        <Col md={16} xs={24} gutter={15}>
          <div>
            <Typography.Title level={3}>{product2.name}</Typography.Title>
            <Typography
              style={{
                color: "#1435c3",
                fontSize: 20,
                fontWeight: 700,
              }}
              level={4}
            >
              {product2.price}
            </Typography>
            <Typography.Text level={5}>
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                {product2.price_sale}
              </span>
              {product2.discount_percent}
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
          <Typography.Title level={4}>
            1. Sơn Jotun Jotashield sạch vượt trội
          </Typography.Title>
          <Typography>
            Sản phẩm Jotun Jotashield sạch vượt trội với 3 tính năng chính:
            chống bám bụi, ngăn ngừa vết bẩn và tự làm sạch bề mặt giúp ngăn
            chặn bụi bẩn bám vào tường và khả năng tự làm sạch khi trời mưa giúp
            tường nhà bạn luôn sạch và mới.
          </Typography>
          <Typography>
            Công nghệ chống bám bụi của Jotashield sạch vượt trội làm cho bụi
            bẩn rất khó bám vào tường, giữ cho ngôi nhà sáng sạch theo thời
            gian. Tính năng ngăn ngừa vệt bẩn giúp bảo vệ tường nhà khỏi sự hình
            thành của các vệt bẩn xấu xí do bụi bẩn và nước mưa lâu ngày tạo
            nên. Và cuối cùng là khả năng tự làm sạch bề mặt giúp cho bụi bẩn sẽ
            bị cuốn trôi dễ dàng mỗi khi có mưa.
          </Typography>
          <Typography>
            Bên cạnh giữ cho ngôi nhà trở nên sáng sạch, Jotashield sạch vượt
            trội mang đến 8 năm bảo vệ, cho tường nhà được bền lâu tối ưu.
          </Typography>
          <img src="/son-5.png" alt=""></img>
          <Typography.Title level={4}>
            2. Tính năng nổi bật của sản phẩm.
          </Typography.Title>
          <Typography.Title level={5}>2.1.Chống bám bụi.</Typography.Title>
          <Typography>
            Bề mặt sơn Jotun có khả năng làm bụi bẩn khó bám vào màng sơn, đặc
            biệt là khoảng thời gian sau khi vừa sơn xong. Đó là nhờ sự hoạt
            động hiệu quả của siêu hạt Silica!
          </Typography>
          <Typography.Title level={5}>2.2.Ngăn ngừa vết bắn.</Typography.Title>
          <Typography>
            Các vết bẩn thường được tích tụ trên bề mặt phẳng nằm ngang. Khi
            trải qua một trận mưa, lớp bụi bẩn này sẽ bị trôi xuống bề mặt tường
            thẳng đứng. Nếu sử dụng loại sơn không có khả năng chống bụi bẩn,
            lớp bụi này sẽ tích tụ trên bề mặt khiến tường bị bẩn.
          </Typography>
          <Typography>
            Với công thức chống bám bụi, sơn ngoại thất Jotun Jotashield sạch
            vượt trội khiến lượng bụi tích tụ trên bề mặt rất ít. Bên cạnh đó,
            màng ẩm kết hợp với nước mưa giúp cuốn trôi và rửa sạch dễ dàng.
          </Typography>
          <Typography>
            Sự xuất hiện của sơn Jotun Jotashield sạch vượt trội giúp bạn có thể
            giảm thiểu tối đa sự hình thành của những vệt bẩn thường hay xuất
            hiện ở các rìa tường sau một thời gian dài chịu ảnh hưởng bởi nước
            mưa.
          </Typography>
          <Typography.Title level={5}>2.3. Tự làm sạch bề mặt</Typography.Title>
          <Typography>
            Công thức chống bám bụi của sơn Jotun Jotashield có thể rửa trôi
            những bụi bẩn cứng đầu, giữ bề mặt tường luôn sạch sẽ như mới, bảo
            vệ lâu dài và giúp bạn tiết kiệm chi phí bảo dưỡng.
          </Typography>
          <Typography.Title level={4}>
            3. Hướng dẫn thi công sơn ngoại thất Jotun Jotashield sạch vượt trội
          </Typography.Title>
          <Typography.Title level={5}>
            Bước 1: Vệ sinh + chuẩn bị bề mặt
          </Typography.Title>
          <Typography>
            Đây là bước vô cùng quan trọng bởi nếu xử lý không kỹ, lớp sơn có
            thể bị bong tróc và không được đẹp mắt. Để chuẩn bị bề mặt tốt nhất,
            bạn cần thực hiện các công việc sau:
          </Typography>
          <Typography.Title level={5}>
            Đối với công trình mới (nhà mới xây)
          </Typography.Title>
          <Typography>
            Công trình mới cần phải đạt độ khô trước khi thi công. Trong điều
            kiện thời tiết khô ráo và có độ ẩm nhỏ hơn 18%, bạn chỉ cần đợi
            tường khoảng 3 tuần là có thể thực hiện công việc.
          </Typography>
          <Typography>
            Bên cạnh đó, bạn cần loại bỏ các tạp chất và tăng độ bám dính cho
            lớp bả bằng lớp sơn phủ tiếp theo trước khi dùng sơn nước ngoại thất
            Jotun Jotashield sạch vượt trội.
          </Typography>
          <Typography.Title level={5}>
            Đối với công trình cũ (nhà sơn lại)
          </Typography.Title>
          <Typography>
            Bề mặt tường sau một thời gian dài sẽ dễ bị ố vàng, rêu mốc, bụi
            bẩn. Vì vậy, bạn cần xử lý theo các bước sau:
          </Typography>
          <ul>
            <li>
              Bề mặt chứa màng sơn cũ/bột trét/vữa xi măng: Tẩy sạch bằng dụng
              cụ đục, cạo, máy chà xát,...
            </li>
            <li>
              Bề mặt chứa dầu mỡ: Tẩy sạch bằng chất tẩy nhẹ và một ít dung môi.
              Rửa lại thật kỹ để tẩy mọi vết bẩn.
            </li>
            <li>
              Bề mặt chứa chất dơ, chứa bột: Làm sạch bằng nước. Nếu bề mặt có
              nhiều bột, nên sơn hai lớp sơn lót chống kiềm sau khi làm sạch bề
              mặt.
            </li>
            <li>
              Bề mặt chứa rêu/nấm: Tẩy sạch bằng nước hoặc bằng dụng cụ đục,
              cạo. Xử lý bằng dung dịch chống rêu, nấm và rửa lại bề mặt bằng
              nước sạch.
            </li>
          </ul>

          <Typography.Title level={5}>
            Bước 2: Thi công bột trét tường
          </Typography.Title>
          <Typography>
            Bột trét (bột bả) là vật liệu dùng che khe nứt, khuyết điểm tạo bề
            mặt phẳng cho tường trước khi thi công sơn lót và sơn phủ.
          </Typography>
          <Typography.Title level={5}>
            Bước 3: Thi công sơn lót
          </Typography.Title>
          <Typography>
            Theo quy trình sơn nhà đạt chuẩn, bạn cần thi công 1 lớp sơn lót tối
            thiểu. Song, bạn nên thi công từ 2 lớp sơn để bảo vệ tường một cách
            tối ưu nhất.
          </Typography>
          <Typography.Title level={5}>
            Bước 4: Sơn lớp sơn hoàn thiện
          </Typography.Title>
          <Typography>
            Đây là bước cuối cùng để hoàn thiện quy trình sơn. Trong quy trình
            này, bạn nên thi công từ 2 - 3 lớp sơn phủ Jotun Jotashield sạch
            vượt trội để lên màu chuẩn nhất.
          </Typography>
          <Typography>
            Hiện tại, dòng sơn ngoại thất cao cấp Jotun Jotashield sạch vượt
            trội đang được bán tại Paint Mart - Siêu thị sơn số 1 Việt Nam. Để
            được tư vấn hoặc đến trực tiếp siêu thị xem sản phẩm{" "}
          </Typography>
        </Col>
        <Col md={8} xs={24} style={{ width: "100%" }}>
          <Typography.Title level={5}>Thông Tin Sản Phẩm</Typography.Title>
          {product2.attributes.map((item, index) => (
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

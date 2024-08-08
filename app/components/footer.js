import { Row, Col, Divider } from "antd";
export default function Footer() {
  return (
    <div
      style={{
        background: "#eee",
        padding: 24,
      }}
    >
      <Row
        gutter={24}
        style={{
          maxWidth: "1080px",
          margin: "auto",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <Col md={8} xs={24}>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "18px",
              color: "green",
            }}
          >
            GIỚI THIỆU
          </h3>
          <Divider
            style={{
              marginTop: 4,
              marginBottom: 4,
            }}
          />
          <div>
            <strong>Địa chỉ:</strong> Số nhà 106, phố Trần Thủ Độ, khu 3 Hải Hòa
            TP Móng Cái, Tỉnh Quảng Ninh.
          </div>
          <div>
            {" "}
            <strong>Điện Thoại :</strong>{" "}
            <a href="tel: 09584985904859048">0859065666</a>
            <div>
              {" "}
              <strong> Email:</strong> cskh@hotro.shopee.vn
            </div>
          </div>
        </Col>
        <Col md={10} xs={24}>
          <h3
            style={{
              fontWeight: "500",
              fontSize: "18px",
              color: "green",
            }}
          >
            Bản đồ vị trí
          </h3>
          <Divider
            style={{
              marginTop: 4,
              marginBottom: 4,
            }}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419.82899900215483!2d107.97525547898815!3d21.530850672365062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b553d95937e0f%3A0xc8ada8b79629ac47!2zU8ahbiDEkWnhu4duIG7GsOG7m2MgZ2lhIFRow6BuaA!5e1!3m2!1svi!2s!4v1723039393369!5m2!1svi!2s"
            width="100%"
            height="300"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
        <Col
          md={6}
          xs={24}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <img
            src="https://shopfront-cdn.tekoapis.com/common/da-dang-ky.png"
            alt=""
          />
          <img
            src="https://images.dmca.com/Badges/dmca-badge-w150-2x1-02.png?ID=73ee7811-7aa7-44d0-bb06-6c0df0da41d8"
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
}

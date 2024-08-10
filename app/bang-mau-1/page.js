"use client";
import BangMau from "../components/bangmau";
import BangMau1 from "../components/bangmau1";
import Footer from "../components/footer";
import Header from "../components/Header";
import HTMLFlipBook from "react-pageflip";
import { Row, Col, Card, Typography, Button, Divider } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Index() {
  const danh_sach_anh = [
    "/bang-mau-1/1.jpg",
    "/bang-mau-1/2.jpg",
    "/bang-mau-1/3.jpg",
    "/bang-mau-1/4.jpg",
    "/bang-mau-1/5.jpg",
    "/bang-mau-1/6.jpg",
    "/bang-mau-1/7.jpg",
    "/bang-mau-1/8.jpg",
  ];
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
        <h1
          gutter={15}
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 24,
          }}
        >
          BẢNG MÀU SƠN JOTUN
        </h1>
        <Typography>
          Bảng màu sơn Jotun mới nhất năm 2024 là bảng những màu thông dụng và
          đẹp nhất cho các sản phẩm sơn nội thất và ngoại thất của sơn Jotun.
        </Typography>
        <Typography.Title level={5}>
          Một số lưu ý khi sử dụng bảng màu sơn jotun:
        </Typography.Title>
        <ul>
          <li>
            {" "}
            Trước khi lựa chọn màu sắc cho các phòng trong nhà cũng như tường
            ngoài nhà. Các bạn phải xác định chính xác sản phẩm mình dự kiến
            mua. Sau đó mới lựa chọn bảng màu cho sản phẩm đó để tìm màu sắc. Ví
            dụ: Trong nhà sử dụng sơn Jotun Majestic đẹp và chăm sóc hoàn hảo
            thì các bạn xem
          </li>
          <li>
            {" "}
            Trước khi lựa chọn màu sắc cho các phòng trong nhà cũng như tường
            ngoài nhà. Các bạn phải xác định chính xác sản phẩm mình dự kiến
            mua. Sau đó mới lựa chọn bảng màu cho sản phẩm đó để tìm màu sắc. Ví
            dụ: Trong nhà sử dụng sơn Jotun Majestic đẹp và chăm sóc hoàn hảo
            thì các bạn xem
          </li>
          <li>
            Bảng màu sơn jotun ở đây chỉ là một số màu thông dụng. Để lựa chọn
            nhiều màu sắc đa dạng hơn, các bạn nên xem thêm ở quạt màu sơn
            jotun. Hiện tại Quạt màu sơn jotun gồm có 2 quyển là Sơn nội thất và
            Sơn ngoại thất. Các quạt màu này đều có sẵn tại các đại lý sơn Jotun
          </li>
          <li>
            {" "}
            Lựa chọn màu sắc là quan điểm cá nhân vì thế mỗi người có một con
            mắt thẩm mỹ khác nhau. Tuy nhiên về có một kinh nghiệm chọn màu các
            bạn nên tham khảo. Đó là trong phòng nên chọn màu nhạt, tránh chọn
            màu đậm (trừ những vị trí điểm nhấn) vì màu tường nhạt sẽ làm phòng
            sáng hơn, mát và dịu hơn cũng như dễ phối màu với các đồ nội thất
            hơn
          </li>
          <li>
            Sơn jotun được pha màu bằng công nghệ hiện đại trên máy tính. Vì thế
            màu sơn tường sau khi sơn với màu bạn chọn trên bảng màu là hoàn
            toàn giống nhau. Màu sắc giữa các thùng sơn (cùng loại) và giữa các
            lần pha khác nhau cũng là hoàn toàn giống nhau. Chính vì vậy khi bạn
            bị thiếu sơn và cần mua tiếp thì bạn hoàn toàn yên tâm về vấn đề
            đồng màu.
          </li>
          <li>
            {" "}
            Mỗi màu sơn trên bảng màu đều có mã số còn được gọi là mã màu. Sau
            khi sơn xong, bạn nên lưu lại mã màu này để sau đó muốn sửa chữa hay
            sơn lại thì sẽ mua được đúng màu sơn cũ
          </li>
        </ul>
        <h2
          style={{
            fontWeight: 600,
            textAlign: "center",
            fontSize: 18,
            margin: "auto",
            marginTop: 24,
          }}
        >
          Bảng Màu Sơn MAJESTIC
        </h2>
        <BangMau></BangMau>
        <h2
          style={{
            fontWeight: 600,
            textAlign: "center",
            fontSize: 18,
            margin: "auto",
            marginTop: 24,
          }}
        >
          Bảng Màu Sơn JOTASHIELD
        </h2>
        <BangMau1></BangMau1>
        <Typography style={{ margin: "auto", marginTop: 24 }}>
          Do sự khác biệt giữa các cài đặt màn hình và các hệ điều hành khác
          nhau, màu sắc xuất hiện trên màn hình của bạn có thể khác biệt so với
          màu sắc thực tế từ Jotun. Những màu sắc được trình bày ở đây với mục
          đích giúp bạn tham khảo. Hãy ghé cửa hàng Jotun gần nhất để xem mẫu
          màu chính xác hơn.
        </Typography>
      </Row>

      <Footer></Footer>
    </div>
  );
}

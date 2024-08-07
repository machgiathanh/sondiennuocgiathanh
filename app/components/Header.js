import { Menu, Flex, Avatar, Button } from "antd";

export default function Header() {
  const items = [
    {
      label: <a href="/">Trang chủ</a>,
    },
    {
      label: <a href="">Sơn Jotun</a>,
      children: [
        {
          label: "Nội Thất",
        },
        { label: "Ngoại thất" },
      ],
    },
    {
      label: <a href="/bang-mau-1">Bảng màu</a>,
    },
    {
      label: <a href="">Bảng Giá</a>,
    },
  ];
  return (
    <div
      style={{ background: "#fff", position: "sticky", top: 0, zIndex: 999 }}
    >
      <Flex align="center" style={{ maxWidth: 1080, margin: "auto" }}>
        <Avatar
          src="https://sonjotunvietnam.com/wp-content/uploads/2017/05/cropped-Jotun_logo.svg_.png"
          alt=""
        />
        <Menu
          mode="horizontal"
          style={{ width: "100%", height: "50px" }}
          items={items}
        />
      </Flex>
    </div>
  );
}

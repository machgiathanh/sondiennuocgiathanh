"use client";
import HTMLFlipBook from "react-pageflip";

export default function BangMau1() {
  const danh_sach_anh = [
    "/bang-mau-2/1.jpg",
    "/bang-mau-2/2.jpg",
    "/bang-mau-2/3.jpg",
    "/bang-mau-2/4.jpg",
    "/bang-mau-2/5.jpg",
    "/bang-mau-2/6.jpg",
    "/bang-mau-2/7.jpg",
    "/bang-mau-2/8.jpg",
  ];
  return (
    <div
      style={{
        maxWidth: "1080px",
        margin: "auto",
        width: "100%",
        textAlign: "center",
      }}
    >
      <HTMLFlipBook
        style={{
          margin: "auto",
        }}
        width={300}
        height={500}
      >
        {danh_sach_anh.map((item, index) => (
          <img key={index} src={item} alt="" />
        ))}
      </HTMLFlipBook>
    </div>
  );
}

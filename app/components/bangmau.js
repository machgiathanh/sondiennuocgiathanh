"use client";
import HTMLFlipBook from "react-pageflip";

export default function BangMau() {
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

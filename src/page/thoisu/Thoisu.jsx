import React, { Component } from "react";

export default class Thoisu extends Component {
  thoisuList = [
    {
      id: 1,
      title: "TP Thủ Đức mênh mông nước sau mưa lớn",
      content:
        "TP HCMMưa lớn kéo dài khiến một số đường ở TP Thủ Đức ngập nặng, người dân bì bõm lội nước về nhà, chiều 3/8.",
      img: "./image/id1.jpg",
      url:'https://vnexpress.net/tp-thu-duc-menh-mong-nuoc-sau-mua-lon-4495583.html'
    },
    {
      id: 2,
      title: "Bộ Giáo dục điều chỉnh chương trình giáo dục THPT",
      content:
        "Bộ Giáo dục và Đào tạo điều chỉnh hoạt động giáo dục bắt buộc và các môn lựa chọn ở cấp THPT sau khi Lịch sử thành môn bắt buộc",
      img: "./image/id2.jpg",
      url:'https://vnexpress.net/bo-giao-duc-dieu-chinh-chuong-trinh-giao-duc-thpt-4495586.html'
    },
    {
      id: 3,
      title: "Thiếu gia miền Tây hối hận vì bắn chết trùm giang hồ",
      content:
        "Theo cáo trạng VKS công bố tại tòa, từ tháng 3/2019 đến tháng 2/2020, Khanh đặt mua trên mạng 4 khẩu súng hoa cải tự chế, 2 khẩu súng dạng Rulo, 33 viên đạn, khóa số 8, súng bắn điện, bình xịt hơi cay... để sử dụng. Xảy ra mâu thuẫn với ông Liêu trong quá trình làm ăn và bị nhóm đại ca giang hồ này bắn, chém gây thương tích, Khanh quyết trả thù.",
      img: "./image/id3.jpg",
      url:'https://vnexpress.net/thieu-gia-mien-tay-hoi-han-vi-ban-chet-trum-giang-ho-4495418.html'

    },
    {
      id: 4,
      title: "Bỏ khung giá đất 'sẽ thúc đẩy tiến độ dự án",
      content:
        "Dự thảo Luật Đất đai sửa đổi đang được cơ quan soạn thảo là Bộ Tài nguyên và Môi trường xin ý kiến nhân dân. Dự luật bỏ quy định khung giá đất, chuyển sang xác định giá đất phù hợp với giá phổ biến trên thị trường. UBND cấp tỉnh xây dựng và trình HĐND cùng cấp thông qua bảng giá đất, hệ số điều chỉnh biến động giá trước khi ban hành.",
      img: "./image/id4.jpg",
      url:'https://vnexpress.net/bo-khung-gia-dat-se-thuc-day-tien-do-du-an-4494723.html'

    },
    

  ];
  renderThoiSuDivBootStrap = () => {
    //output [<div className="col-4"></div>,<div className="col-4"></div>]
    return this.thoisuList.map((thoisu, index) => {
      return (
        <div  key={index}>
          <div className="card">
            <img src={thoisu.img} alt="..." />
            <div className="card-body">
              <h3>{thoisu.title}</h3>
              <a href={thoisu.url} >{thoisu.content.length > 120 ? <span>{thoisu.content.slice(0,120)}... <a  href={thoisu.url}>Đọc tiếp</a> </span> :<span>{thoisu.content}</span>}</a>
             <hr />
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="">
      {this.renderThoiSuDivBootStrap()}
      </div>;
  }
}

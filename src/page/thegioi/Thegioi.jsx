import React, { PureComponent } from "react";
import Gocnhin from "../gocnhin/Gocnhin";
import QuocTe from "../quocte/QuocTe";



export default class Thegioi extends PureComponent {
  thegioiList = [
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
    {
      id: 5,
      title: "OPEC+ tăng sản xuất dầu với mức thấp kỷ lục",
      content:
        "Kết thúc phiên họp hôm nay, Tổ chức Các nước Xuất khẩu Dầu mỏ (OPEC) và các đồng minh thống nhất tăng sản lượng dầu thêm 100.000 thùng một ngày trong tháng 9. Con số này thấp hơn nhiều so với mục tiêu tăng hơn 600.000 thùng trong tháng 7 và 8.",
      img: "./image/id5.jpg",
      url:'https://vnexpress.net/opec-tang-san-xuat-dau-voi-muc-thap-ky-luc-4495600.html'
    },
    {
      id: 6,
      title: "Người Mỹ tăng cà thẻ tín dụng thời lạm phát",
      content:
        "Số liệu của Fed New York cho biết nợ hộ gia đình của Mỹ lần đầu tiên vượt ngưỡng 16.000 tỷ USD trong quý II. Ngay cả khi lãi suất tăng, dư nợ thẻ tín dụng vẫn tăng thêm 46 tỷ USD trong quý trước.",
      img: "./image/id6.jpg",
      url:'https://vnexpress.net/nguoi-my-tang-ca-the-tin-dung-thoi-lam-phat-4495386.html'

    },
    {
      id: 7,
      title: "Giá dầu thế giới xuống thấp nhất 6 tháng",
      content:
        "Chốt phiên giao dịch 3/8, mỗi thùng dầu Brent giảm 3,7 USD về 96,78 USD. Dầu thô Mỹ WTI cũng giảm tương tự, về 90,66 USD. Đây là mức thấp nhất kể từ đầu tháng 2, trước thời điểm Nga mở chiến dịch quân sự tại Ukraine.",
      img: "./image/tg7.jpg",
      url:'https://vnexpress.net/gia-dau-the-gioi-xuong-thap-nhat-6-thang-4495678.html'

    },
    {
      id: 8,
      title: "Tổng thống Zelensky muốn gặp Chủ tịch Tập Cận Bình",
      content:
      "Tổng thống Zelensky muốn đối thoại trực tiếp với Chủ tịch Tập Cận Bình, kêu gọi Trung Quốc gây sức ép để Nga chấm dứt chiến dịch tại Ukraine.",

      img: "./image/gn7.jpg",
      url:'https://vnexpress.net/tong-thong-zelensky-muon-gap-chu-tich-tap-can-binh-4495651.html'

    },
    {
      id: 9,
      title: "Mê cung' đường ống giúp Paris giải nhiệt trong nắng nóng",
      content:
        "PHÁPHệ thống bao gồm các loại đường ống bơm nước làm mát dưới lòng đất Paris giúp thành phố giảm bớt hiệu ứng đảo nhiệt và đối phó hiện tượng ấm lên toàn cầu.",
      img: "./image/tg9.jpg",
      url:'https://vnexpress.net/nguoi-my-tang-ca-the-tin-dung-thoi-lam-phat-4495386.html'

    },
  
  ];
  renderTheGioiDivBootStrap = () => {
    //output [<div className="col-4"></div>,<div className="col-4"></div>]
    return this.thegioiList.map((thegioi, index) => {
      return (
        <div  className="thegioi_container container "  key={index}>
          <div  className="thegioi_card row">
            <img className="col-6" style={{width:'237px', height:'144px', paddingLeft:'20px' }} src={thegioi.img} alt="..." />
            <div className="thegioi_cardbody col-6  ">
              <h3 style={{fontSize:'15px'}}>{thegioi.title}</h3>
              <a href={thegioi.url} >{thegioi.content.length > 100 ? <span>{thegioi.content.slice(0,108)}... <a  href={thegioi.url}>Đọc tiếp</a> </span> :<span>{thegioi.content}</span>}</a>
             <hr />
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="category  wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active ml-3" id="newTab" data-toggle="tab" href="#new" role="tab" aria-controls="new" aria-selected="true">
              Quốc Tế</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="popularTab" data-toggle="tab" href="#Popular" role="tab" aria-controls="Popular" aria-selected="false">
             Thế Giới</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="videoTab" data-toggle="tab" href="#Video" role="tab" aria-controls="Video" aria-selected="false">
              Gốc Nhìn</a>
          </li>
        </ul>
        <div className="thoigioitabcontent tab-content " id="myTabContent">
          {/* The Gioi */}
          <div className="tab-pane fade show active " id="new" role="tabpanel" aria-labelledby="new-tab">
          <div>  {this.renderTheGioiDivBootStrap()}</div>
            
          </div>
          {/* Quoc Te */}
          <div className="tab-pane fade" id="Popular" role="tabpanel" aria-labelledby="Popular-tab">
          <QuocTe/>

          </div>
          {/* Goc Nhin */}
          <div className="tab-pane fade" id="Video" role="tabpanel" aria-labelledby="Video-tab">
            <div> <Gocnhin/> </div>

          </div>
        </div>
      </section>

    );
  }
}

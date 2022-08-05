import React, { Component } from 'react'
import Thoisu from '../thoisu/Thoisu';

export default class Doisong extends Component {

  doisongList = [
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
          title: "Người Mỹ lo lạm phát kéo dài khi nhìn giá hàng hóa",
          content:
            "Số liệu của Fed New York cho biết nợ hộ gia đình của Mỹ lần đầu tiên vượt ngưỡng 16.000 tỷ USD trong quý II. Ngay cả khi lãi suất tăng, dư nợ thẻ tín dụng vẫn tăng thêm 46 tỷ USD trong quý trước.",
          img: "./image/id7.jpg",
          url:'https://vnexpress.net/nguoi-my-lo-lam-phat-keo-dai-khi-nhin-gia-hang-hoa-4492833.html'
    
        },
        {
          id: 8,
          title: "Cước vận tải tăng theo giá xăng dầu nhưng giảm có độ trễ",
          content:
            "Từ đầu năm đến nay, giá xăng dầu tăng liên tục đã khiến nhiều mặt hàng, dịch vụ thiết lập mặt bằng giá mới. Tuy nhiên, ở 4 đợt giảm liên tiếp với mức hạ hơn 6.500 đồng một lít xăng, giá nhiều mặt hàng, trong đó có vận tải, lại chưa giảm theo.",
          img: "./image/id8.jpg",
          url:'https://vnexpress.net/cuoc-van-tai-tang-theo-gia-xang-dau-nhung-giam-co-do-tre-4495601.html'
    
        },
      ];
      renderDoiSongDivBootStrap = () => {
        //output [<div className="col-4"></div>,<div className="col-4"></div>]
        return this.doisongList.map((doisong, index) => {
          return (
            <div  className="doisong_container container "  key={index}>
            <div  className="doisong_card row">
              
              <div className="doisong_cardbody   ">
                <h3 style={{fontSize:'15px',paddingTop:'30px',paddingRight:'15px'}}>{doisong.title}</h3>
                <a href={doisong.url} >{doisong.content.length > 100 ? <span>{doisong.content.slice(0,108)}... <a  href={doisong.url}>Đọc tiếp</a> </span> :<span>{doisong.content}</span>}</a>
               <hr />
              </div>
            </div>
          </div>
          );
        });
      };

  render() {
    return (
      <div>
        {this.renderDoiSongDivBootStrap()}
 

      </div>
    )
  }
}

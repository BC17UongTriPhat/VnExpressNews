import React, { Component } from 'react'

export default class QuocTe extends Component {

    quocteList = [
        {
          id: 1,
          title: "Giá nhà đất cao gây thiệt hại cho nền kinh tế như thế nào?",
          content:
            "Các nghiên cứu cho thấy giá bất động sản cao gây sai lệch phân bổ vốn, giảm hiệu quả đầu tư, chậm tăng trưởng năng suất. ",
          img: "./image/qt1.jpg",
          url:'https://vnexpress.net/gia-nha-dat-cao-gay-thiet-hai-cho-nen-kinh-te-nhu-the-nao-4495446.html'
        },
        {
          id: 2,
          title: "Lạm phát Thổ Nhĩ Kỳ gần chạm 80%",
          content:
            "Lạm phát tháng 7 của Thổ Nhĩ Kỳ lên cao nhất 25 năm và chưa có dấu hiệu chạm đỉnh. ",
          img: "./image/qt2.jpg",
          url:'https://vnexpress.net/lam-phat-tho-nhi-ky-gan-cham-80-4495466.html'
        },
        {
          id: 3,
          title: "Bức tranh thiếu thốn năng lượng của Mỹ",
          content:
            "Khủng hoảng năng lượng diễn ra khi điện than giảm nhanh hơn sự phát triển của điện tái tạo, còn sản xuất xăng dầu không kịp nhu cầu.",
          img: "./image/qt3.jpg",
          url:'https://vnexpress.net/buc-tranh-thieu-thon-nang-luong-cua-my-4494988.html'
    
        },
        {
          id: 4,
          title: "Giá vàng, Wall Street trồi sụt vì Mỹ - Trung",
          content:
            "Giá vàng lên sát đỉnh 1 tháng rồi giảm mạnh, chứng khoán Mỹ cũng rung lắc vì chuyến thăm Đài Loan của bà Pelosi và tin tức từ Fed. ",
          img: "./image/qt4.jpg",
          url:'https://vnexpress.net/gia-vang-wall-street-troi-sut-vi-my-trung-4495219.html'
    
        },
        {
          id: 5,
          title: "Lợi nhuận đại gia dầu mỏ BP lên đỉnh 14 năm",
          content:
            "BP (Anh) ghi nhận lợi nhuận ròng quý II tăng hơn gấp 3 năm ngoái, lên cao nhất kể từ năm 2008. ",
          img: "./image/id5.jpg",
          url:'https://vnexpress.net/loi-nhuan-dai-gia-dau-mo-bp-len-dinh-14-nam-4495039.html'
        },
        {
            id: 6,
            title: "Người Mỹ lo lạm phát kéo dài khi nhìn giá hàng hóa",
            content:
              "Số liệu của Fed New York cho biết nợ hộ gia đình của Mỹ lần đầu tiên vượt ngưỡng 16.000 tỷ USD trong quý II. Ngay cả khi lãi suất tăng, dư nợ thẻ tín dụng vẫn tăng thêm 46 tỷ USD trong quý trước.",
            img: "./image/id7.jpg",
            url:'https://vnexpress.net/nguoi-my-lo-lam-phat-keo-dai-khi-nhin-gia-hang-hoa-4492833.html'
      
          },
        
      ];

      renderQuocTeiDivBootStrap = () => {
        //output [<div className="col-4"></div>,<div className="col-4"></div>]
        return this.quocteList.map((quocte, index) => {
          return (
            <div  className="quocte_container container "  key={index}>
          <div  className="quocte_card row">
            <img className="col-6" style={{width:'237px', height:'144px', paddingLeft:'20px' }} src={quocte.img} alt="..." />
            <div className="quocte_cardbody col-6  ">
              <h3 style={{fontSize:'15px'}}>{quocte.title}</h3>
              <a href={quocte.url} >{quocte.content.length > 100 ? <span>{quocte.content.slice(0,108)}... <a  href={quocte.url}>Đọc tiếp</a> </span> :<span>{quocte.content}</span>}</a>
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
      
        <div className="thoigioitabcontent tab-content " id="myTabContent">
          {/* new */}
          <div className="tab-pane fade show active " id="new" role="tabpanel" aria-labelledby="new-tab">
            <div>  {this.renderQuocTeiDivBootStrap()}</div>
          </div>
          {/* Popular */}
          <div className="tab-pane fade" id="Popular" role="tabpanel" aria-labelledby="Popular-tab">
            <div>  {this.renderQuocTeiDivBootStrap()}</div>

          </div>
          {/* Videos */}
          <div className="tab-pane fade" id="Video" role="tabpanel" aria-labelledby="Video-tab">
            <div> {this.renderQuocTeiDivBootStrap()}</div>

          </div>
        </div>
      </section>
    )
  }
}

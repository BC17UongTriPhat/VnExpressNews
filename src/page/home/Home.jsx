import React, { Component } from "react";
import { Link } from "react-router-dom";
import Doisong from "../doisong/Doisong";
import Footer from "../footer/Footer";
import Thegioi from "../thegioi/Thegioi";
import Thoisu from "../thoisu/Thoisu";

export default class Home extends Component {

  state = {
    isLogin: false,
    
    
  
  }
  // isLogin = true
    userName = "Phat Dev"

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <span className=" text-dark">
          <a className="text-dark" href="#">
            Hello ! {this.userName}
          </a>
        </span>
      );
    }
    return (
      <button className="btn btn-outline my-2 my-sm-0" type="button" onClick={()=>{
        this.handleLogin();
      }}>
        <i class="fa fa-user"></i>Đăng Nhập
      </button>
    );
  };

  handleLogin = () => {
      // this.state.isLogin = true; Không được gán giá trị state trực tiếp mà phải thông qua phương thức setState
        /*
                this.setState: là phương thức có sẵn của react class component dùng để thay đổi giá trị của state. Hàm setState sẽ nhận vào giá trị state mới và gọi lại hàm render => giao diện thay đổi
                this.setState: là 1 hàm bất đồng bộ, khi nó xử lý thì các đoạn code phía sau vẫn tiếp tục thực thi
            */
    // console.log("islogin", this.state.isLogin);
    let newState = { isLogin: true}  
    
    this.setState( newState,()=>{ //Hàm sẽ chạy sau khi state thay đổi và giao diện render xong
      console.log(this.state)  // console.log(this.state) sẽ không ra giá trị đúng vì hàm no chưa render xong thì các thằng sau đã chạy

    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <nav className="navbar navbar-expand-sm navbar-dark">
              <div className="img">
                <a href="/">
                  <img className="logo"
                    src="https://s1.vnecdn.net/vnexpress/restruct/i/v630/v2_2019/pc/graphics/logo.svg"
                    alt="vnEpresslogo"
                  />
                </a>
              </div>
              <div
                className="collapse-top navbar-collapse text-dark"
                id="collapsibleNavId"
              >
                <ul className="navbar-nav-top-right mr-auto mt-2 mt-lg-0">
                  <li className="nav-item   ">
                    <a className="nav-link" href="https://vnexpress.net/tin-tuc-24h">
                      Mới nhất
                    </a>
                  </li>
                  <li className="nav-item   ">
                    <a className="nav-link" href="https://e.vnexpress.net/">
                      International
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 ">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Tìm kiếm  "
                  />
                  {this.renderLogin()}
                  {/* <button className="btn btn-outline my-2 my-sm-0" type="button" >
                    <i class="fa fa-user"></i>Đăng Nhập
                  </button> */}
                </form>
              </div>
            </nav>
            <hr />
            <nav className="navbar  navbar-expand-sm navbar-dark text-dark">

              <div>
                <ul className="navbar-nav navbar-bot mr-auto mt-2 mt-lg-0 ">
                  <i class="fa-solid fa-house"></i>
                  <li className="nav-item  text-dark ">
                    <Link className="nav-link" to="/thoisu">
                      Thời sự
                    </Link>
                  </li>
                  <li className="nav-item text-dark  ">
                    <Link className="nav-link" to="/gocnhin">
                      Góc nhìn
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/thegioi">
                      Thế giới
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/video">
                      Video
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/podcasts">
                      Podcasts
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/kinhdoanh">
                      Kinh doanh
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/khoahoc">
                      Khoa học
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/giaitri">
                      Giải trí
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/thethao">
                      Thể thao
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/phapluat">
                      Pháp luật
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/giaoduc">
                      Giáo dục
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/suckhoe">
                      Sức khỏe
                    </Link>
                  </li>
                  <li className="nav-item   ">
                    <Link className="nav-link" to="/doisong">
                      Đời sống
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dulich">
                      Du lịch
                    </Link>
                  </li>
                </ul>
              </div>

            </nav>

            <hr />
          </div>
        </header>
        <section className="section">
          <div className="section_topstory">
            <div className="section_topstory_leftimg">
              <div className="section_topstory_leftimg-left">
                <img src="./image/chutichhavienmy.jpg" alt="chutinhhavienmy" />
              </div>
              <div className="section_topstory_left_content animate__slideInUp" data-wow-delay="0.3s">
                <h3>Chủ tịch Hạ viện Mỹ Pelosi gặp bà Thái Anh Văn</h3>
                <a
                  href="https://vnexpress.net/chu-tich-ha-vien-my-pelosi-gap-ba-thai-anh-van-4495268.html"
                  alt="chủ tịch hạ viện mỹ đến thăm đài loan"
                >
                  Chủ tịch Hạ viện Mỹ Nancy Pelosi gặp lãnh đạo Đài Loan Thái Anh
                  Văn tại Đài Bắc hôm nay, tuyên bố Mỹ không từ bỏ cam kết với hòn
                  đảo.
                </a>
                <div className="hide_mobile">
                  <h3 >Bỏ khung giá đất 'sẽ thúc đẩy tiến độ dự án</h3>
                  <a
                    href="https://vnexpress.net/bo-khung-gia-dat-se-thuc-day-tien-do-du-an-4494723.html"
                    alt="Bỏ khung giá đất 'sẽ thúc đẩy tiến độ dự án"
                  >
                    Dự thảo Luật Đất đai sửa đổi đang được cơ quan soạn thảo là Bộ Tài nguyên và Môi trường xin ý kiến nhân dân. Dự luật bỏ quy định khung giá đất, chuyển sang xác định giá đất phù hợp với giá phổ biến trên thị trường... Đọc tiếp
                  </a>
                </div>
              </div>

            </div>
            <div className="section_topstory_rightimg wow animate__animated animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
              <img
                src="../../assets/image/Vlasta-Sam-Son_Cam-Tong-the_-Anh-03-resize.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="section_bottomstory wow animate__animated animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
            <div className="section_bottomstory container">
              <div className="row">
                <div className="col-4">
                  <h3>Chủ tịch Hạ viện Mỹ rời Đài Loan</h3>
                  <a
                    href="https://vnexpress.net/chu-tich-ha-vien-my-roi-dai-loan-4495558.html"
                    alt=""
                  >
                    Chủ tịch Hạ viện Mỹ Pelosi kết thúc chuyến thăm Đài Loan, lên
                    máy bay rời hòn đảo để tới Hàn Quốc, tiếp tục chuyến công du
                    châu Á.
                  </a>
                </div>
                <div className="col-4">
                  <h3>
                    Trung Quốc cảnh báo các hãng hàng không tránh bay gần Đài Loan
                  </h3>
                  <a href="https://vnexpress.net/trung-quoc-canh-bao-cac-hang-hang-khong-tranh-bay-gan-dai-loan-4495428.html">
                    Trung Quốc cảnh báo các hãng hàng không hoạt động ở châu Á
                    tránh bay xung quanh Đài Loan, nơi Bắc Kinh sẽ diễn tập bắn
                    đạn thật.
                  </a>
                </div>
                <div className="col-4">
                  <h3>
                    Thủ tướng yêu cầu Bộ Công an tìm giải pháp về hộ chiếu mẫu mới
                  </h3>
                  <a href="https://vnexpress.net/thu-tuong-yeu-cau-bo-cong-an-tim-giai-phap-ve-mau-ho-chieu-moi-4495453.html">
                    Thủ tướng yêu cầu Bộ Công an nghiên cứu giải pháp về vấn đề
                    liên quan hộ chiếu mẫu mới, tránh tác động bất lợi trong bối
                    cảnh mở cửa, phục hồi, phát triển kinh tế - xã hội.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---Thoi Su--- */}
        <div className="thoisu container wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <hr />

          <div className="thoisu_row row">
            <div className="col-4">
              <Thoisu />
            </div>
            {/* --- thegioi --- */}
            <div className="thegioi_col col-8">
              <div className=" row">
                <div className="col-8 border-right border-left    ">
                  <Thegioi />
                </div>
                <div className="col-4">
                  <Doisong className='doisong' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* back top */}
        <div class="back-to-top">
          <span class="back-top">
            <i class="fa fa-angle-up"></i>
          </span>
        </div>
        {/* Footer */}


      </div>
    );
  }

}

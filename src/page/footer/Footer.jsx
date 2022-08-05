import React, { Component } from "react";


export default class Footer extends Component {
    render() {
        return (


            <div className="Footer_container container">

                <div className="Footer_row row">
                    <div id="footer_left1" className="col_2_left  ">
                        <ul>
                            <li>Trang chủ</li>
                            <li>Video</li>
                            <li>Podcasts</li>
                            <li>Ảnh</li>
                            <li>Infographics</li>
                        </ul>
                    </div>
                    <div className="col_2_left ">
                        <ul>
                            <li>Thời sự</li>
                            <li>Góc nhìn</li>
                            <li>Thế giới</li>
                            <li>Kinh doanh</li>
                            <li>Giải trí</li>
                        </ul>
                    </div>
                    <div className="col_2_left ">
                        <ul>
                            <li>Thể thao</li>
                            <li>Pháp luật</li>
                            <li>Giáo dục</li>
                            <li>Sức khỏe</li>
                            <li>Đời sống</li>
                            <li>Du lịch</li>
                        </ul>
                    </div>
                    <div className="col_2_left ">
                        <ul>
                            <li>Khoa học</li>
                            <li>Số hóa</li>
                            <li>Xe</li>
                            <li>Ý kiến</li>
                            <li>Tâm sự</li>
                            <li>Hài</li>
                        </ul>
                    </div>
                    <div className="col_2_left border-left border-right  ">
                        <ul>
                            <li>Rao vặt</li>
                            <li>Startup</li>
                            <li>Mua ảnh VnExpress</li>
                            <li>Vhome</li>
                            <li>eBox</li>
                            <li>eWork</li>
                        </ul>
                    </div>
                    <div className="col_2_right ">
                        <p> Tải ứng dụng </p>
                        <div className="footer_right_top footer_qr_has-qr">
                            <p id="p2"> <img src="./image/logoE.png" alt="logovnEpress" /> VnExpress</p>
                            <p id="p3"> <img src="./image/logoE.png" alt="logovnEpress" /> International</p>
                            {/* --- Qr --- */}
                            <div className="footer_qr ">
                                <h5>Tải ứng dụng VnExpress</h5>
                                <div className="footer_container_qr">
                                    <div className="footer_app_left">
                                        <img src="./image/appGallery.png" alt="appGallery" className="footer_app_galery" />
                                        <img src="./image/AppleStore.png" alt="AppleStore" className="footer_app_apple" />
                                        <img src="./image/GGStore.png" alt="GGStore" className="footer_app_google" />
                                    </div>
                                    <div className="footer_qr_right">
                                        <img src="./image/qr.svg" alt="QR code" className="footer_imgQr_right" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <p> Liên hệ </p>
                        <div className="footer_right_bot">
                            <p id="p2"> <i class="fa fa-envelope"></i> Tòa soạn</p>
                            <p id="p3"> <img src="./image/icon-eclick.svg" alt="" />   Quảng cáo</p>

                        </div>
                        <div className="footer_right_bot">
                            <p id="p4"> <img src="./image/htbq.svg" alt="" /> Hợp tác bản quyền</p>

                        </div>
                    </div>
                </div>
                <div className="footer_bottom_top  ">
                    <div className="footer_bottom_topleft  "> <a href="https://vnexpress.net/">Báo điện tử <img src="./image/logo.svg" alt="" /></a></div>
                    <div className="footer_bottom_topright  ">
                        <a href="https://vnexpress.net/rss">RSS</a>
                        <a href="">Theo dõi VnExpress trên  </a><i id="icon1" class="fab fa-facebook-f"></i><i id="icon" class="fab fa-twitter"></i><i id="icon" class="fab fa-youtube"></i>
                    </div>
                    <hr />
                </div>
                <hr />
                <div className="footer_bottom_bottom ">

                    <div className="footer_bottom_topleft ">
                        <h4>Báo tiếng Việt nhiều người xem nhất</h4>
                        <span>Thuộc Bộ Khoa học Công nghệ <br /> Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</span>

                    </div>
                    <div className="footer_bottom_botmiddle ">
                        <p>Tổng biên tập: Phạm Hiếu</p>
                        <p>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</p>
                        <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
                    </div>
                    <div className="footer_bottom_botright ">

                        <p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
                    </div>
                    {/* nút di chuyển lên  */}
                    <div class="footer-active-up">
                        <a href=""><i class="footer-active-up-icon fas fa-chevron-up"></i></a>
                    </div>


                </div>
            </div>

        );
    }
}

import React from "react";
import {Layout, Row, Col} from "antd";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined, TwitterOutlined} from "@ant-design/icons";

const FooterComponent = () => {
    const currentDate = new Date();
    const previousYear = currentDate.getFullYear() - 1;
    return (
        <Layout.Footer className="footer_cd">
            <Row gutter={[16, 16]} justify="center" align="center">
                <Col xs={24} sm={8} md={8} lg={8}>
                    <ul className="menu-ul">
                        <li className="menu_li">About </li>
                        <li className="menu_li"> Career</li>
                        <li className="menu_li">Blog</li>
                        <li className="menu_li">Terms & Conditions</li>
                    </ul>
                </Col>

                <Col xs={24} sm={8} md={8} lg={8}>
                    <div className="media_icons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FacebookOutlined className="media_svg" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <InstagramOutlined className="media_svg" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <YoutubeOutlined className="media_svg" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <TwitterOutlined className="media_svg" />
                        </a>
                    </div>
                </Col>

                <Col xs={24} sm={8} md={8} lg={8} className="copy_td">
                    &copy; {previousYear} antforfigma.com. All right reserved
                </Col>
            </Row>
        </Layout.Footer>
    );
};

export default FooterComponent;

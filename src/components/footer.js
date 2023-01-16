import { Col, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube, faPinterest, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return <>
        <Row className="mt-3">
            <Col>
                <h6>BEYMEN HAKKINDA</h6>
                <Nav>
                    <Nav.Link href="/home">Markalar</Nav.Link>
                    <Nav.Link eventKey="link-1">Koşulsuz Müşteri Mutluluğu</Nav.Link>
                    <Nav.Link eventKey="link-2">Kurumsal Satış</Nav.Link>
                </Nav>
            </Col>
            <Col>
               <h6>MÜŞTERİ HİZMETLERİ</h6>
               <Nav>
                    <Nav.Link eventKey="link-1">Bize Sorun</Nav.Link>
                    <Nav.Link eventKey="link-2">Ücretsiz Kargo ve İade</Nav.Link>
                    <Nav.Link eventKey="link-3">Mağazadan Teslim</Nav.Link>
               </Nav> 
            </Col>
            <Col>
                <h6>HESABIM</h6>
                <Nav>
                    <Nav.Link eventKey="link-1">Siparişlerim</Nav.Link>
                    <Nav.Link eventKey="link-2">Adreslerim</Nav.Link>
                    <Nav.Link eventKey="link-3">Üyelik Bilgilerim</Nav.Link>
                </Nav> 
            </Col>
            <Col>
                <Row>
                    <Col>
                        <img src="https://cdn.beymen.com/bannerimages/logo-yilbasi_2021111214415086824.svg" alt="logo"></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>BİZİ TAKİP EDİN</h6>
                        <a href="https://tr-tr.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube}/></a>
                        <a href="https://tr.pinterest.com/"><FontAwesomeIcon icon={faPinterest}/></a>
                        <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
}

export default Footer;

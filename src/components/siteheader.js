import { Container, Row, Col } from 'react-bootstrap';
import Search from './search';
import MyMenu from './menu';

function SiteHeader() {
    return <Container>
        <Row>
            <Col><img src="https://cdn.beymen.com/bannerimages/logo-yilbasi_2021111214415086824.svg" alt="LOGO"/></Col>
            <Col xs={12} sm={12} xl={6}><MyMenu/></Col>
            <Col><Search/></Col>
        </Row>
    </Container>
}

export default SiteHeader;
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import menuItems from "../db/menu_items";
import SubMenu from "./sub-menu";

function MyMenu() {
    var menuElems = [];
    for(const cat of menuItems) {
        menuElems.push(
            <NavDropdown title={cat.catName} key={cat.catName} id="basic-nav-dropdown">
                <SubMenu cats={cat.subCats}/>
            </NavDropdown>
        );

    }
    return <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {menuElems}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
export default MyMenu;
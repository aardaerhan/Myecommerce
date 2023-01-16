import { Button, Card, Col } from "react-bootstrap";
import productData from "../db/data.js";

function Products(props) {
    var productElems = [];
    for (const product of productData.slice(0,props.productCount)) {
        productElems.push(
            <Col key={product.id} className="mt-3">
                <Card>
                    <Card.Img variant="top" src={product.image}/>
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title style={{ height: "50px",overflow: "hidden"}}>{product.title}</Card.Title>
                        <Card.Text>
                            ₺{product.price}
                        </Card.Text>
                        <Button variant="secondary">Sepete Ekle</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
    return <>
        {productElems}
    </>
}

export default Products;
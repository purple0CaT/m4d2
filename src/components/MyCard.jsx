import { Card, Col, Button } from "react-bootstrap"

const MyCard = ({data}) => {
    return (
        <Col xs="12 mb-2" md="3" lg="2" key={data.asin}>
                <Card className="h-100">
                  <Card.Img variant="top" src={data.img}/>
                  <Card.Body className="d-flex flex-column justify-content-end p-2">
                    <Card.Title className="mb-auto">{data.title}</Card.Title>
                    <Card.Text>{data.category} </Card.Text>
                    <small className="font-weight-bold">Asin: {data.asin}</small>
                    <Button variant="info">Read</Button>
                  </Card.Body>
                </Card>
            </Col>
    )
}

export default MyCard
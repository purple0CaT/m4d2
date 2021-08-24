import { Card, Col, Button } from "react-bootstrap"

const MyCard = ({data}) => {
    console.log(data)
    return (
        <Col xs="2 mb-2" key={data.asin}>
                <Card className="h-100">
                  <Card.Img variant="top" src={data.img}/>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="info">Read</Button>
                  </Card.Body>
                </Card>
            </Col>
    )
}

export default MyCard
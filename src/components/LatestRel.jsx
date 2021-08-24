import SciFi from '../data/scifi.json'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Horror from '../data/horror.json'
import MyCard from './MyCard'
import { Card, Row, Col, Button } from "react-bootstrap"

const LatestRel = () => {
    return (
    <>
        <Row className="p-2">
        <Col xs="12">
          <h3>Latest Releeses</h3>
          <hr />
        </Col>
        <MyCard data={History[0]} />
        <MyCard data={Horror[0]} />
        <MyCard data={Romance[0]} />
        <MyCard data={Fantasy[0]} />
        <MyCard data={SciFi[0]} />
        </Row>

        <Row className="p-2">
        <Col xs="12">
          <h3>Sci-Fi Releeses</h3>
          <hr />
        </Col>
        {
          SciFi.map(data => MyCard({data}))
        }
        
        {/* 
            { SciFi.map(book => 
            <Col xs="2 mb-2" key={book.asin}>
                <Card className="h-100">
                  <Card.Img variant="top" src={book.img}/>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="info">Read</Button>
                  </Card.Body>
                </Card>
            </Col>
            )} */}
        </Row>
    </>
    )
}

export default LatestRel
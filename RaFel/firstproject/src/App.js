import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./Header";
import { Practice1, PS } from "./Practice1";
import Footer from "./Footer";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    // <div>
    //   <div className="container">
    //       <h1 className="text-danger text">Hello World</h1>
    //     </div>
    //   <Header />
    //   <Practice1 />
    //   <PS />

    //   <Footer />
    // </div>

    <div >
      <Header />
      <Container >
        <Row className="main d-flex justify-content-center align-items-center" >
          <Col lg="3" md="6" className="d-flex justify-content-center align-items-center" >
            <Card style={{ width: "18rem" }} className="my-3">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Course1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6" className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }} className="my-3">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Course2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6" className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }} className="my-3">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Course3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

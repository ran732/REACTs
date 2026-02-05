import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./Header";
import { Practice1, PS } from "./Practice1";
import Footer from "./Footer";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { post } from "./Data/post";

function App() {
  let headerInfo = {
    email: "ran@gmail.com",
    phone: "8989599865956",
  };
  const sayhello = () => {
    alert("Good Morning. Thank you God for giving me this life.Love you.");
  };
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

    <div>
      {/* props  parents to child*/}
      <Header headerInfo={headerInfo} greet={sayhello} cname="RAFEL" />
      {/* <Container>
        <Row className="main d-flex justify-content-center align-items-center">
          <Col
            lg="3"
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }} className="my-3">
              {/* 
               This is inline styling in React.
               First {} → enter JavaScript
               Second {} → JavaScript object 

              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Course1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg="3"
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
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
          <Col
            lg="3"
            md="6"
            className="d-flex justify-content-center align-items-center"
          >
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
      </Container> */}
      <Container>
        <Row>
          {post.map((v, i) => {
            return <ProductItems pitems={v} key={i}/>
          })}
        </Row>
      </Container>

      <Footer>
        <div className="text-center">
          <h3>this is my footer section where i store fotter only.</h3>
        </div>
      </Footer>
    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <Col lg="3" md="4" sm="6" >
    <Card style={{ width: "16rem" }} className="m-3">
      <Card.Body>
        <Card.Title>{pitems.title}</Card.Title>
        <Card.Text>
          {pitems.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

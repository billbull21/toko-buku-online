import {
  Navbar,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar fixed="top" bg="light">
        <div className="container">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={8} className="d-grid gap-2">
                <Navbar.Brand href="/">Gramedium</Navbar.Brand>
              </Col>
              <Col xs={12} sm={12} md={4} className="d-grid gap-2">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Col>
            </Row>
          </Container>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <a href="https://instagram.com/habibuloemam">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.iconButton}
                  />
                </a>
                <a href="https://github.com/billbull21">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.iconButton}
                  />
                </a>
                <a href="https://oemampedia.medium.com/">
                  <FontAwesomeIcon
                    icon={faMedium}
                    className={styles.iconButton}
                  />
                </a>
                <a href="https://play.google.com/store/apps/developer?id=Oemam">
                  <FontAwesomeIcon
                    icon={faGooglePlay}
                    className={styles.iconButton}
                  />
                </a>
              </Nav>
            </Navbar.Collapse> */}
        </div>
      </Navbar>
    </div>
  );
}

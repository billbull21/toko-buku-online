import { ListGroup } from "react-bootstrap";

export default function SidebarComponent() {
  return (
    <ListGroup>
      <ListGroup.Item action href="/">
        Home
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Contact Us
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Instagram
      </ListGroup.Item>
      <ListGroup.Item action href="#">
        Linked In
      </ListGroup.Item>
    </ListGroup>
  );
}

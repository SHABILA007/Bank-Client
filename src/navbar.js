import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';


export default function Nav_bar(){
   
    return(<>
  <Navbar bg="dark" data-bs-theme="dark" id='navigation' >
    <i class="fa-solid fa-building-columns" ></i>
          <Container id='container'>
            <Navbar.Brand href="#home" id='nav'>Bad Bank</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="sub-nav" href="#home">Home</Nav.Link>
              <Nav.Link className="sub-nav" href="#register">Register</Nav.Link>
              <Nav.Link className="sub-nav" href="#deposit">Deposit</Nav.Link>
              <Nav.Link className="sub-nav" href="#cashback">Cashback</Nav.Link>
              <Nav.Link className="sub-nav" href="#alldata">Alldata</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>)
}
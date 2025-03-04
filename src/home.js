import Carousel from 'react-bootstrap/Carousel';
import Onlinebanking from './images/online banking.jpg';
import Savings from './images/interest.jpeg';
import Transfer from './images/moneytransfer.jpeg';
import './App.css';

function Home() {
  
  return (
    <>
    <div id='heading'>
     <h1>Welcome to Our Bank</h1>
    </div>
    <div className="carousel-container">
        <Carousel data-bs-theme="dark" >
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Onlinebanking}
              alt="First slide"/>
            <Carousel.Caption>
              <h5>ONLINE BANKING</h5>
              <p>Customers can access their accounts through a secure website or app</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Savings}
              alt="Second slide"/>
            <Carousel.Caption>
              <h5>0% INTEREST</h5>
              <p>Zero Interest on principal balance</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Transfer}
              alt="Third slide"/>
            <Carousel.Caption>
              <h5>TRANSFER MONEY</h5>
              <p>Simple & Secure way to transfer money</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    </>
  );
}

export default Home;
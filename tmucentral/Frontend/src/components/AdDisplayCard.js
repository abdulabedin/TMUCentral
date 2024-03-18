import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdCard from './AdCard';

const AdDisplayCard = () => {
    return (
        <Container>
        <Row>
          <Col>
            <AdCard
              price="$100"
              title="Example Title 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
              postDate="March 15, 2024"
              location="New York"
            />
          </Col>
          <Col>
            <AdCard
              price="$200"
              title="Example Title 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
              postDate="March 16, 2024"
              location="Los Angeles"
            />
          </Col>
          <Col>
            <AdCard
              price="$300"
              title="Example Title 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
              postDate="March 17, 2024"
              location="Chicago"
            />
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AdDisplayCard;
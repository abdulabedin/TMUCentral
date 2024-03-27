import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdCard from './AdCard';

const AdDisplayCard = () => {
  const [ads, setAds] = useState([]);

    // Get advertisements from the server API
    useEffect(() => {
        const PORT = process.env.PORT || 3005;
        const url = `http://localhost:${PORT}/api/database/getAds`;
        fetch(url)
            .then((resp) => {
                // Check if any issues occurred
                if (!resp.ok) {
                    throw new Error("Network reponse was not okay");
                }
                return resp.json();
            })
            
            // Update the advertisements
            .then(ads => setAds(ads.Ads))

            // Output error if a problem occurs
            .catch(err => console.error(err));
    });




    return (
        <Container>
        <Row>
        {ads.map((ad) => (
          <Col>
            <AdCard
              price={ad.price}
              title={ad.title}
              description={ad.description}
              image="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
              // image={ad.image}
              postDate={ad.postDate}
              location={ad.location}
            />
          </Col>
        ))}
        </Row>
      </Container>
    );
  };
  
  export default AdDisplayCard;
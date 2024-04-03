import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const LegendCard = ({ legend }) => {
  const [show, setShow] = useState(false);
  //   console.log(legend);
  return (
    <Col>
      <Card
        className="player-card"
        role="button"
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <Card.Img
            // onClick={() => setShow(!show)}
            variant="top"
            src={legend.img}
            title={legend.name}
            alt={legend.name}
          />
        ) : (
          <>
            {/* <Fragment da kullanılabılırdı. farkı fragmentta key ={} yapabılırdık */}
            <Card.Header>
              <Card.Title>{legend.name}</Card.Title>
              <ul className="m-auto">
                {legend.statistics.map((item) => (
                  <li className="list-unstyled h5 text-start">⚽{item}</li>
                ))}
              </ul>
              <span>{legend.official_career}</span>
              <br />
            </Card.Header>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;

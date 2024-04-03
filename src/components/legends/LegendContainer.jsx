import { Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
// import { useState } from "react";
import LegendCard from "./LegendCard";
import { useState } from "react";

const LegendContainer = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  // const [show, setShow] = useState(false);
  // console.log(data);

  let filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);

  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search legends..."
        onChange={handleChange}
      />
      <Container>
        <Row xs={1} sm={1} lg={3} xl={4}>
          {/* xs da 1 adet goster */}
          {filteredData.map((legend) => (
            // <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            // <Col>
            //   <Card onClick={() => setShow(!show)}>
            //     {!show ? (
            //       <Card.Img
            //         // onClick={() => setShow(!show)}
            //         variant="top"
            //         src={legend.img}
            //       />
            //     ) : (
            //       <>
            //         {/* <Fragment da kullanılabılırdı. farkı fragmentta key ={} yapabılırdık */}
            //         <Card.Header>
            //           <Card.Title>{legend.name}</Card.Title>
            //           <ul className="m-auto">
            //             {legend.statistics.map((item) => (
            //               <li className="list-unstyled h5 text-start">
            //                 ⚽{item}
            //               </li>
            //             ))}
            //           </ul>
            //           <span>{legend.official_career}</span>
            //           <br />
            //         </Card.Header>
            //       </>
            //     )}
            //   </Card>
            // </Col>

            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;

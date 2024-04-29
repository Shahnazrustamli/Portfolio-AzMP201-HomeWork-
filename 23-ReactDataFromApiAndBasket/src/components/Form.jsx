// ! Tapshiriqda bu hisse yox imish

// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import "../App.css";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// function Forma({ data, setData }) {
//   const [validated, setValidated] = useState(false);
//   const [imputValue, setImputValue] = useState("");
//   const [price, setPrice] = useState(0);
//   const handleSubmit = (event) => {
//     // console.log(imputValue);




//     let obj = { id: uuidv4(), name: imputValue, unitPrice: price };
//     axios.post("https://northwind.vercel.app/api/products", obj);
//     setData([...data, obj]);


//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//   };

//   return (
//     <div className="form">
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Name"
//               defaultValue={imputValue}
//               onChange={(e) => {
//                 setImputValue(e.target.value);
//               }}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="6" controlId="validationCustom03">
//             <Form.Label>Price</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Price"
//               required
//               onChange={(e) => {
//                 setPrice(e.target.value);
//               }}
//             />
//             <Form.Control.Feedback type="invalid">
//               Please provide a valid Price.
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Button type="submit">Submit form</Button>
//       </Form>
//     </div>
//   );
// }

// export default Forma;

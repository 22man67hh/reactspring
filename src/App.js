import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer,toast } from "react-toastify";
import Home from "./Components/Home";
import Course from "./Components/Course";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import Khalti from "./api/Khalti";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import EsewaPayment from "./api/esewa";
function App() {
  const btnHandle=()=>{
toast.success("This is my first message",{position:"top-center"});
  }
  return (
  <div>
    <Router>
  <ToastContainer/>
<Container>
  <Header/>
  <Row>
<Col md={4}><Menus/></Col>
<Col md={8}>
<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/add-course" element={<AddCourse/>} exact/>
<Route path="/view-course" element={<AllCourses/>} exact/>
<Route path="/khalti" element={<Khalti/>} exact/>
<Route path="/esewa" element={<EsewaPayment/>} exact/>
</Routes>
</Col>



  </Row>
</Container>
</Router>
  </div>
  );
}

export default App;

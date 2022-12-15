import React from 'react'
import MyNavbar from './components/Navbar'
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyBanner from './components/banner'
import OurDifferent from './components/ourDifferent'
import Learning from './components/learning'
import Course from './components/course'
import Footer from './components/footer'
import OnlineClassDoc from './components/onlineClass'
import ClassMode from './components/classMode'
import SignUpSheet from './components/signUpSheet'
import CourseDiscription from './components/CourseDiscription'

/////////////////////////////////////////////////////Main App & Page Router/////////////////////////////////////////////


//Home Page Component
function Home() {
  return(
    <>
    <Row id='video-container' className='pt-5 pb-5'>
      <MyBanner className='col-12 banner' />
    </Row>
    <Row id='ourDiffent-container'>
      <OurDifferent />
    </Row>
    <Row id='learning-container'>
      <Learning />
    </Row>
    <Row id='course-container'>
      <Course />
    </Row>
    </>
  );
}

//Online Class Page Component
function OnlineClass(){
  return(
    <>
      <Row id='onlineClass-container'>
        <OnlineClassDoc />
      </Row>
      <Row id='course-container'>
        <Course />
      </Row>
    </>
  )
}

//Class Mode Discription Page Component
function ClassModePage(){
  return(
    <>
      <Row>
        <ClassMode />
      </Row>
      <Row>
        <Course />
      </Row>
    </>
  )
}

//Basic Level Class Page Component
function BasicClass(){
  return(
    <>
      <Row>
        <Course />
      </Row>
    </>
  )
}

//Advance Level Class Page Component
function AdvanceClass(){
  return(
    <>
      <Row>
        <Course />
      </Row>
    </>
  )
}

//Master Level Class Page Component
function DevClass(){
  return(
    <>
      <Row>
        <Course />
      </Row>
    </>
  )
}

//Magic Coding Class Discription Page Component
function MagicCodingClass(){
  return(
    <>
      <Row className='pt-5'>
        <Col sm={12} id='comingsoon-container' className='pt-5'>
          <h1 className='pt-5'>
            <strong>
              Coming Soon...
            </strong>
          </h1>
        </Col>
      </Row>
    </>
  )
}

//Summer & Winter Camp Page Component
function VacationClass(){
  return(
    <>
      <Row className='pt-5'>
        <Col sm={12} id='comingsoon-container' className='pt-5'>
          <h1 className='pt-5'>
            <strong>
              Coming Soon...
            </strong>
          </h1>
        </Col>
      </Row>
    </>
  )
}

//SignUp Page Component
function Trynow(){
  return(
    <>
      <Row className='pt-5'>
        <SignUpSheet />
      </Row>
    </>
  )
}

//Course Discription Page Component
function CourseDiscriptionPage(props){
  return(
    <>
      <Row>
        
      </Row>
    </>
  )
}

//Main 
function App() {
  return (
    <Router>
      <Container fluid className='px-0 app-container'>
        <Row id='navbar-container'>
          <MyNavbar className='col-12' name="edwardchang"/>
        </Row>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/onlineClass' component={OnlineClass} />
          <Route path='/classMode' component={ClassModePage} />
          <Route path='/basicClass' component={BasicClass} />
          <Route path='/advanceClass' component={AdvanceClass} />
          <Route path='/devClass' component={DevClass} />
          <Route path='/magicCodingClass' component={MagicCodingClass} />
          <Route path='/vacationClass' component={VacationClass} />
          <Route path='/tryNow' component={Trynow} />
          <Route path='/class'>
            <CourseDiscriptionPage />
          </Route>
        </Switch>
        <Row id='footer-container'>
          <Footer />
        </Row>
      </Container>
    </Router>
  );
}

export default App;

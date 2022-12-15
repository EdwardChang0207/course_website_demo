import React, { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import axios from '../axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './CourseDiscription.css'



export default function CourseDiscription(props) {

  const [course, setCourse] = useState([])
  const fetchData = async () => {
    if(course.length === 0){
      const req = await axios.get('/courses')
      let data = req.data
      data = await data.sort((a,b)=>{
        return a.id - b.id
      })
      setCourse(data)
      }
  }
  fetchData()
  console.log(course)

return(
  <>
    <Router>
      <Container className='py-5 px-5'>
        <Switch>
          <Route path='/class/starter'>
            {course.map((item)=>{
              if(item.id===1){
                return(
                  <Row className='pt-5'>
                    <Col sm={12} className='pt-5 classImg'>
                        <img src={item.img} alt='course img'/>
                    </Col>
                  </Row>
                )
              }
            })}
            <Row>
              <Col sm={12}>
                  
              </Col>
            </Row>
          </Route>
        </Switch>
        <Row>
          <Col>
            signUp Btn
          </Col>
        </Row>
      </Container>
    </Router>
  </>
)
  
}

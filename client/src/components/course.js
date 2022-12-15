import React, {useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CourseCard from './courseCard'
import './course.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from '../axios'



export default function Course() {
  
  const [cards, setCards] = useState([])
  const [basicClass, setBasicClass] = useState([])
  const [advanceClass, setAdvanceClass] = useState([])
  const [devClass, setDevClass] = useState([])


  const fetchData = async () => {
    if(cards.length === 0){
      const req = await axios.get('/courses')
      let data = req.data
      data = await data.sort((a,b)=>{  
        return a.id - b.id
      })
      setCards(data)
      }
  }
  fetchData()

  useEffect(()=>{
    let basic = []
    let adv = []
    let dev = []
    cards.forEach(card => {
      if(card.diff === 'basic'){
        basic.push(card)
      }else if(card.diff === 'advance'){
        adv.push(card)
      }else if(card.diff === 'dev'){
        dev.push(card)
      }
    setBasicClass(basic)
    setAdvanceClass(adv)
    setDevClass(dev)
    });
  },[cards])

  

  return (
    <Router>
      <Container fluid className='bg-light course-container py-3 px-0'>
        <Row>
          <Col sm={12} className='title-container py-3'>
            <h2><strong>課程介紹</strong></h2>
          </Col>
        </Row>
        <Row className='px-5'>
          <Switch>
            <Route path='/' exact>
              {cards.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
            <Route path='/classMode'>
              {cards.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
            <Route path='/onlineClass'>
              {cards.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
            <Route path='/basicClass'>
              {basicClass.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
            <Route path='/advanceClass'>
              {advanceClass.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
            <Route path='/devClass'>
              {devClass.map((cards)=>(
                <Col sm={12} md={6} lg={4} className='py-3' key={cards._id}>
                  <CourseCard key={cards._id} img={cards.img} title={cards.title} text={cards.text} link={cards.link} />
                </Col> 
              ))}
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  )
}



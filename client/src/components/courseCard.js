import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './courseCard.css'

export default function CourseCard(props) {
  return (
    <Container className='py-0 px-5 m-0'>
      <div id='card-container'>
        <img src={props.img} className='card-bg' alt='course img'/>
        <div className='card-hover'></div>
        <div className='courseCard-text px-3'>
          <Row>
            <Col className='cardText-container py-2 px-3'>
              <h3 className='m-0'><strong>{props.title}</strong></h3>
            </Col>
          </Row>
          <Row>
            <Col className='cardText-container px-3'>
              <p><strong>{props.text}</strong></p>
            </Col>
          </Row>
          <Row>
            <Col className='pb-md-0 pb-sm-3'>
              <Button variant="danger" href={props.link} className='btn-text px-3'>了解更多</Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Card.css'

export default function MyCard(props) {
  return (
    <Container className='py-0 px-4 w-100 cardContainer'>
        <Row className='cardImg-container m-0 pt-4'>
            <Col><img src={props.img} alt={props.title}/></Col>
        </Row>
        <Row className='cardTitle-container m-0 pt-3'>
            <Col><h3 className='card-title'><strong>{props.title}</strong></h3></Col>
        </Row>
        <Row className='cardText-container m-0 py-lg-2 pt-1 pb-4'>
            <Col>
                {props.text}
            </Col>
        </Row>
    </Container>
  )
}

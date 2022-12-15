import React from 'react'
import './learning.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Learning() {
  return (
    <Container fluid className='px-0'>
      <Row className='py-3'>
        <Col className='title-container px-0'><h1><strong>為什麼要學程式?</strong></h1></Col>
      </Row>
      <Row className='w-100 py-3 m-0 px-0'>
          <Col sm={12} bg='light' className='learningText-container px-0'><h4><strong>培養邏輯思維能力-</strong></h4><h5><strong>理科、工科人必備!</strong></h5></Col>
          <Col sm={12} bg='light' className='learningText-container px-0'><h4><strong>贏在起跑點-</strong></h4><h5><strong>程式能力已納入108課綱中</strong></h5></Col>
          <Col sm={12} bg='light' className='learningText-container px-0'><h4><strong>提高收入-</strong></h4><h5><strong>依據alphacamp調查，軟體工程師年薪中位數超過100萬</strong></h5></Col>
          <Col sm={12} bg='light' className='learningText-container px-0'><h4><strong>眾多工作機會-</strong></h4><h5><strong>依據104調查，軟體工程師平均有三個工作可以選擇</strong></h5></Col>
          <Col sm={12} bg='light' className='learningText-container px-0'><h4><strong></strong></h4></Col>
      </Row>
    </Container>
  )
}

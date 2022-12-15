import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './classMode.css'
import onlineClassTitleBg from '../imgs/onlineClassTitleBg.png'


export default function ClassMode() {
  return (
    <Container id='clssmodeContainer' className='px-3 pt-5 m-0'>
        <Row id='onlineClass-container' className='m-0 w-100 titleText'>
          <Col sm={12}>
            <div id='title-container'>
              <h1><strong>線上課程</strong></h1>
              <img src={onlineClassTitleBg} height='300vmin' width='80%' alt='title img'/>
            </div>
            <h2><strong>隨時隨地的學習</strong></h2>
            <h2><strong>每周一次線上視訊教學</strong></h2>
            <h2><strong>每周一小時的課程夠嗎?每天再多10分鐘效果更加強!</strong></h2>
            <h2><strong>小班制學習，不輸實體課的競爭力!</strong></h2>
          </Col>
          <Col sm={12}>
          <Button variant="danger" size="lg" href='/tryNow'>立刻報名免費試聽</Button>
          </Col>
        </Row>
        <Row id='normalClass-container' className='pt-5 m-0 w-100 titleText'>
          <Col sm={12}>
            <h1><strong>實體課程</strong></h1>
            <h2><strong>小班制課程，精緻化學習</strong></h2>
            <h2><strong>不再只是聽!課堂中分組實作專案</strong></h2>
            <h2><strong>老師上課講的太基本浪費時間?把基本功留給上廁所的時間!</strong></h2>
            <h2><strong>每季舉辦成果競賽，把大獎拿回家!</strong></h2>
          </Col>
          <Col sm={12}>
            <Button variant="danger" size="lg" href='tryNow'>立刻報名免費試聽</Button>
          </Col>
        </Row>      
    </Container>
  )
}

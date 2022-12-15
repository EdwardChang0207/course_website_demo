import React from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import './banner.css'
import studyVid from '../video/studyVid.mp4'

export default function MyBanner() {
  return (
    <Container fluid className='banner p-0'>
      <Row className='w-100 p-0'>
        <div className='text-background p-0' />
        <div className='text-container'>
            <h1 className='pl-1 pr-0 my-0 text col-12'><strong>程式教育已成趨勢<br />讓你贏在起跑點!</strong></h1>
            <h2 className='pl-2 pr-0 pt-3 my-0 text col-8'><strong>傳承第二代的補教家族，我們的優勢就是</strong></h2>
            <h1 className='pl-3 pr-0 pt-md-3 pt-sm-1 my-0 text col-4 importent'><strong>很會教!</strong></h1>
            <Button variant="danger" href='/tryNow' size='lg' className='mt-md-3 mt-sm-1 col-md-4 col-sm-12 mybtn'>現在報名試聽課程</Button>
        </div>
        <video autoPlay loop muted>
            <source src={studyVid} type='video/mp4'></source>
        </video>
      </Row>
    </Container>
  )
}

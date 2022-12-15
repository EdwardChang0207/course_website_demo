import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './footer.css'

export default function Footer() {
  return (
    <Container className='bg-dark p-0 m-0 footerContainer w-100'>
      <Row>
        <Col sm={12} className='footerText-container pt-3 pb-1'>
          <h4>
            <strong>
              聯絡我們
            </strong>
          </h4><br/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className='footerText-container'>
          <p>
            email:
            tele:
          </p>
        </Col>
      </Row>
    </Container>
  )
}

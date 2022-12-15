import React from 'react'
import {Col, Container, Navbar, NavDropdown, Nav} from 'react-bootstrap'

export default function MyNavbar(props) {
  return (
    <Container fluid>
        <Navbar bg="light" expand="lg" fixed='top'>
            <Container className='px-4 py-3'>
                <Navbar.Brand href="/" className='px-xl-3 px-md-2 px-sm-1'>{props.name}</Navbar.Brand>
                <Col className='col-lg-5 col-md-2 col-sm-0'/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='/' className='px-xl-3 px-md-2 px-sm-1'>首頁</Nav.Link>
                    <Nav.Link href='/onlineClass' className='px-xl-3 px-md-2 px-sm-1'>線上課程</Nav.Link>
                    <NavDropdown title="課程介紹" id="basic-nav-dropdown" className='px-xl-3 px-md-2 px-sm-1'>
                    <NavDropdown.Item href='/classMode'>上課模式</NavDropdown.Item>
                    <NavDropdown.Item href='/basicClass'>基礎班課程</NavDropdown.Item>
                    <NavDropdown.Item href='/advanceClass'>進階班課程</NavDropdown.Item>
                    <NavDropdown.Item href='/devClass'>程式開發課程</NavDropdown.Item>
                    <NavDropdown.Item href='/magicCodingClass'>魔法程式學院</NavDropdown.Item>
                    <NavDropdown.Item href='/vacationClass'>寒暑假營隊</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='/tryNow'>點我獲取免費試聽</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="關於我們" id="basic-nav-dropdown" className='px-xl-3 px-md-2 px-sm-1'>
                    <NavDropdown.Item href={props.starterCourseLink}>營業據點</NavDropdown.Item>
                    <NavDropdown.Item href={props.basicCourseLink}>品牌故事</NavDropdown.Item>
                    <NavDropdown.Item href={props.advenceCourseLink}>教材內容</NavDropdown.Item>
                    <NavDropdown.Item href={props.hackerCourseLink}>師資陣容</NavDropdown.Item>
                    <NavDropdown.Item href={props.campLink}>來上課可以學到什麼</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='/tryNow'>點我獲取免費試聽</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='/tryNow' className='px-xl-3 px-md-2 px-sm-1'><strong>免費試聽課程</strong></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  )
}

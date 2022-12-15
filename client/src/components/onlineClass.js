import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './onlineClass.css'
import onlineClassPic from '../imgs/onlineClassPic.jpg'

const DocText = <><p><strong>線上課程早已在世界各國盛行多年，但在台灣依舊是一個較新的概念<br />許多人會好奇:線上課程真的有用嗎?</strong></p><h3><strong>我們可以拍胸跟您保證有用!</strong><br /></h3><p><strong>我們的教師團隊已經擁有多年的線上教學經驗，領導無數學生在網路上學習程式<br/>透過網路不但可以跨越遙遠的距離，更可以使用線上資源同步操作，讓同學更好理解<br/>專案完成後也能透過線上平台進行保存，日後複習、放入履歷都可以方便取用</strong></p></>

function OnlineClassDoc() {
    return(
        <Container className='px-5 m-0 pt-5 bg-light'>
            <Row className='onlineClassDoc-container pt-5 m-0'>
                <Col sm={12} md={6} id='pic-container' className='px-5 pt-5 m-0'>
                    <img src={onlineClassPic} alt='onlineClass' id='onlineClassPic'/>
                </Col>
                <Col sm={12} md={6} className='px-0 pt-5 m-0'>
                    <h1><strong>線上課程真的有用嗎?<br /></strong></h1>
                    {DocText}
                </Col>
            </Row>
        </Container>
    )
}

export default OnlineClassDoc
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './ourDifferent.css'
import MyCard from './Card'

//imgs
import cardImg1 from '../imgs/cardImg1.jpg'
import cardImg2 from '../imgs/cardImg2.jpg'
import cardImg3 from '../imgs/cardImg3.jpg'

const card_text = [
  <p className='card-text'>每個人都是獨立的個體，有不同的喜好，<strong>統一教材的填鴨式教育早已不符合時代!</strong><br />我們為每位學生客製化課程，協助每個人都能用<strong>自己最喜歡的方式往目標邁進!</strong></p>,
  <p className='card-text'>我們大改傳統家教、補習班以時間計費的方式。我們重視學生<strong>是否真的得到自己想要的知識內容</strong>。<br />因此我們將以課程內容的知識量來計費，換言之我們<strong>不限定學生在同一課程中使用的課堂數</strong>。</p>,
  <p className='card-text'>我們認為教育是以學生為本位考量，<strong>不但要學會也要學的有興趣，不有趣的事情誰能拿出熱忱呢</strong>?<br />我們將帶領學生<strong>體會程式的快樂，讓學生和我們一起玩程式</strong>!</p>
]

const cards = [
  {id:1, img:cardImg1, title:'客製化教學', text: card_text[0]},
  {id:2, img:cardImg2, title:'我們賣的是知識不是時間', text:card_text[1]},
  {id:3, img:cardImg3, title:'興趣啟發式教學', text:card_text[2]}
]

export default function OurDifferent() {
  return (
    <Container fluid className='bg-light myContainer py-5 px-0 w-100'>
      <Row className='py-3 w-100 m-0'>
        <Col className='title-container'><h1><strong>為什麼選擇我們?</strong></h1></Col>
      </Row>
      <Row className='g-5 px-5 pt-2 w-100 m-0'>
        {cards.map((cards) => (
          <Col xs={12} md={4} key={cards.id}><MyCard key={cards.id} img={cards.img} title={cards.title} text={cards.text} /></Col>
        ))}
      </Row>
    </Container>
  )
}

import React, {useState } from 'react'
import {Container, Form, Col, Row, Button} from 'react-bootstrap'
import './signUpSheet.css'
import axios from '../axios'

export default function SignUpSheet() {

    
    const [studentName, setStudentName] = useState()
    const [studentAge, setStudentAge] = useState()
    const [studentEmail, setStudentEmail] = useState()
    const [studentPhone, setStudentPhone] = useState()
    const [studentClass, setStudentClass] = useState()

    const checkEmail = ()=>{
        let data = studentEmail
        let index = data.indexOf('@', 0)
        if (index === -1 || index === 0 || index === data.length -1){
            alert('請輸入正確的Email')
            return
        }
    }

    const getStudentData = () =>{
        let student = {
            name: studentName,
            age: studentAge,
            email: studentEmail,
            phone: studentPhone,
            class: studentClass
        }
        console.log(student)

        checkEmail()

        if(student.name === ""){
            alert('請填寫正確學生姓名')
        }else if(student.age <= 0 || student.age >= 99 || isNaN(student.age)){
            alert('請填寫正確學生年齡')
        }else if(isNaN(student.age) || (studentPhone.length !== 8 && studentPhone.length !== 10)){
            alert('請填寫正確電話號碼')
        }else if(student.class === ""){
            alert('請選擇試聽課程')
        }else{
            axios.post('/student', student)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    

  return (
    <Container className='py-5 px-5 jcc w-80'>
        <Form className='px-5 py-5'>

            <Form.Group as={Row} className="mb-3" controlId="studentName">
                <Form.Label column sm="2">學生姓名</Form.Label>
                <Col sm="8" className='px-0'>
                    <Form.Control onChange={e => setStudentName(e.target.value)} placeholder="請輸入完整學生姓名" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="studentAge">
                <Form.Label column sm="2">學生年齡</Form.Label>
                <Col sm="8" className='px-0'>
                    <Form.Control onChange={e => setStudentAge(e.target.value)} placeholder="請輸入數字 例:18" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="studentEmail">
                <Form.Label column sm="2">Email</Form.Label>
                <Col sm="8" className='px-0'>
                    <Form.Control onChange={e => setStudentEmail(e.target.value)} placeholder="請輸入完整信箱 例:example@mail.com" />
                </Col>
            </Form.Group>

             <Form.Group as={Row} className="mb-3" controlId="studentPhone">
                <Form.Label column sm="2">聯絡電話</Form.Label>
                <Col sm="8" className='px-0'>
                    <Form.Control onChange={e => setStudentPhone(e.target.value)} placeholder="請輸入完整電話號碼 例:0987654321" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 pr-5" controlId="classType">
                <Form.Label column sm="2">預約課程</Form.Label>                           
                <Form.Control column sm='8' as='select' onChange={e => setStudentClass(e.target.value)} aria-label="請選擇課程種類">
                        <option>請選擇課程種類</option>
                        <option value="1">One</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" onClick={getStudentData}>送出</Button>

        </Form>
    </Container>
  )
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Status = ({total, completed, pending}) => {
  return (
    <>
        <Container className='mb-5'>
            <Row className='text-center justify-content-center'>
                <Col md={3} className='border rounded-4 py-4 m-2 task-box'>
                    <h1>{total}</h1>
                    <h5>Total Task</h5>
                </Col>
                <Col md={3} className='border rounded-4 py-4 m-2 task-box'>
                    <h1>{completed}</h1>
                    <h5>Completed Task</h5>
                </Col>
                <Col md={3} className='border rounded-4 py-4 m-2 task-box'>
                    <h1>{pending}</h1>
                    <h5>Pending Task</h5>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Status

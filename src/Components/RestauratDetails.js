import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import Rating from './Rating'

function RestauratDetails() {

    const { id } = useParams()

    const [cafe, setCafe] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            await fetch("/restaurants.json")
                .then((response) => response.json())
                .then((data) => setCafe(data.restaurants))
        }
        fetchData()

    }, [])

    console.log(id);

    const details = cafe.find((i) => i.id == id)
    console.log(details);

    return (
        <>
            <Link className='btn btn-outline-dark my-2 rounded btn-sm'
                to="/">Back</Link>
            {details ? (
                <Row className='my-3'>
                    <Col md={3}>
                        <Image className='img' src={details.photograph} alt=
                            {details.name} fluid>
                        </Image>
                    </Col>
                    <Col md={4}>
                        <ListGroup.Item>
                            <h2>{details.name}</h2>
                            <p>{details.neighborhood}</p>
                            <ListGroup.Item>
                                <p>Cusine: {details.cuisine_type}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Address {details.address}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>Operating hours:</h4>
                                <p>Monaday {details.operating_hours.Monday}</p>
                                <p>Tuesday {details.operating_hours.Tuesday}</p>
                                <p>Wednesday {details.operating_hours.Wednesday}</p>
                                <p>Thursday {details.operating_hours.Thursday}</p>
                                <p>Friday {details.operating_hours.Friday}</p>
                                <p>Saturday & Sunday
                                    {details.operating_hours.Saturday}</p>
                            </ListGroup.Item>
                        </ListGroup.Item>
                    </Col>
                    <Row>
                        <Card className='my-3 mx-3 p-3 rounded'>
                            <Rating data={details.reviews}>

                            </Rating>
                        </Card>
                    </Row>

                </Row>
            ) : "null"}
        </>
    )
}

export default RestauratDetails

import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ResturantsCard from './ResturantsCard'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../action/restaurantAction'


function Home() {

    // const dispatch = useDispatch()

    // const hotels = useSelector(state => state.restaurantList)

    // const { restaurant } = hotels

    // useEffect(() => {
    //     dispatch(listRestaurants())
    // }, [])


    // console.log("my data is", restaurant);





    const [hotels, setHotels] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((response) => response.json())
                .then((data) => setHotels(data.restaurants))
        }

        fetchData()
    }, [])

    console.log(hotels);


    return (

        <Row>
            {
                hotels.map(item => (

                    <Col sm={12} md={8} lg={6} xl={3}>

                        <ResturantsCard data={item} />

                    </Col>
                ))
            }
        </Row>


    )
}


export default Home


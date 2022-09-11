import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardsData"
import "./style.css"
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(CardsData)

  const send = (element) => {
    dispatch(ADD(element))
  }

  return (
    <>
      <div className='mt-4 container'>
        <h2 style={{ textAlign: "center" }}>Add To Cart Project</h2>
        <div className='row d-flex justify-content-center align-item-center'>
          {
            data.map((value) => {
              return (
                <Card 
                style={{ width: '18rem',margin:"1rem",border:"none"}}
                key={value.id} className="card_style"
                // onMouseEnter={()=>{console.log("hello")}}
                // onMouseLeave={()=>{console.log("bye")}}
                >
                  <Card.Img variant="top" src={value.imgdata} style={{height:"12rem",marginTop:".7rem"}} />
                  <Card.Body>
                    <Card.Title>{value.rname}</Card.Title>
                    <Card.Text>Price: ₹{value.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button
                    variant="primary" className='col-lg-12'
                    onClick={()=>{send(value) }}
                    >Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default Cards
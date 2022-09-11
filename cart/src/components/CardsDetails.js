import React, { useEffect, useState } from 'react'
import "./style.css"
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD,DLT,REMOVE } from '../redux/actions/action';
import { useNavigate } from 'react-router-dom';


const CardsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams()
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const getdata = useSelector(state => state.cartreducer.carts)

  const compare = () => {
    const comparedata = getdata.filter((e) => {
      return e.id == id
    })
    setData(comparedata)
  }

  //add data
  const send = (element) => {
    dispatch(ADD(element))
  }

  //delete data
  const dlt = (id) => {
    dispatch(DLT(id))
    Navigate("/")
  }

  // remove one
  const removeOne = (item) =>{
    dispatch(REMOVE(item))
  }


  useEffect(() => {
    compare()
  }, [id])

  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Iteams Details Page</h2>

        <section className='container mt-3'>
          <div className='iteamsdetails'>
            {
              data.map((e) => {
                return (
                  <>
                    <div className='items_img'>
                      <img src={e.imgdata} alt="" />
                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant</strong> : {e.rname}</p>
                            <p><strong>Price</strong> : ₹{e.price}</p>
                            <p><strong>Dishes</strong> : {e.address}</p>
                            <p><strong>Total</strong> : ₹{e.price * e.qnty}</p>
                          </td>
                          <td>
                            <p><strong>Rating : </strong> <span style={{ background: "green", color: "white", padding: "3px 6px", borderRadius: "4px" }}>{e.rating} ★</span> </p>
                            <p><strong>Order Review : </strong>  {e.somedata} </p>
                            <p><strong>Remove  :  </strong> <span><i className='fas fa-trash' style={{ color: "red", fontSize: 16, cursor: "pointer" }} onClick={() => { dlt(e.id) }}></i></span> </p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ color: "#111", background: "#ddd", cursor: "pointer", width: 100 }}>
                                <span style={{fontSize:24}} onClick={e.qnty <=1 ? ()=>{dlt(e.id)} : ()=>{removeOne(e)} }>-</span>
                                <span style={{fontSize:24}}>{e.qnty}</span>
                                <span style={{fontSize:24}} onClick={()=>{send(e)}}>+</span>
                            </div>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }


          </div>

        </section>
      </div>

    </>
  )
}

export default CardsDetails
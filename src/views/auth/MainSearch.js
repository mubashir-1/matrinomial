import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link, useHistory } from 'react-router-dom';
import {  useParams } from 'react-router-dom'
import { Card } from './Card';
import IndexNavbar from "components/Navbars/IndexNavbar.js";


export const MainSearch = () => {


  const history = useHistory()

  const [user, setUser] = useState({
    search: "",

  })

  const [filteredData, setFilteredData] = useState([])

 
  
  const [datas, setdatas] = useState()
  const { id } = useParams();
  console.log(id);


  useEffect(async () => {

    
    const result = await axios.get(`http://localhost:3001/data`)
    setFilteredData(result.data)

    setdatas(result.data)
    // console.log(result.data);



  }, [])

  useEffect( () => {

    if(datas ==  null)return

    
    var filteredData = datas.filter((item,index)=>{
      if(item.name.includes(user.search)){
        return true;
        
      }
      return false;
    })
    setFilteredData(filteredData)

  }, [user])

  

  const { search } = user;

  const onInputChange = e => {
    
    setUser({...user,[e.target.name]:e.target.value})
    
  }






  return (

    <div>

<IndexNavbar fixed />
      <section className="header relative pt-16 items-center ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-10">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">


                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                  {/* form ki starting */}

                  <div className="relative w-full mb-3">



                    <input
                      type="text"
                      name="search"
                      value={search}
                      onChange={e => onInputChange(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Search"
                    />

                  </div>

                    {filteredData && filteredData.map((item, index) => {
                      console.log(item);
                      return (
                        <Card item={item} />

                      )


                    })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

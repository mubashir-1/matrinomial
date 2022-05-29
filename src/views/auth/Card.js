import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Footer from "components/Footers/Footer.js";
import { MainSearch } from './MainSearch'


export const Card = ({ item }) => {





    return (
        <div>
           

            {/* <MainSearch/> */}
            <section className=" main-card--cointainer bg-blueGray-200 border-0 ">



                <div>
                    <link rel="stylesheet" to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


                    <div class="wrapper">


                        <div class="profile">
                            <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail" />
                            <h3 class="name">{item.name}</h3>

                            <p class="title">{item.testGender}</p>
                            <Link type="button" to={`/PersonalCard/${item.id}`} class="btn name">View Profile</Link>
                        </div>

                        <div class="social-icons">
                            <div class="icon">
                                <a href={item.fb} target="_blank" ><i class="fab fa-facebook"></i></a>
                            </div>

                            <div class="icon">
                                <a href={item.Instagram} target="_blank" ><i class="fab fa-instagram"></i></a>
                            </div>

                            <div class="icon">
                                <a href={item.twitter} target="_blank" ><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>


                </div>

                )


            </section>
            <Footer />
        </div>
    )
}

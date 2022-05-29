import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export const PersonalCard = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        testGender: "",
        testReligion: "",
        testMarital: "",
        testCast: "",
        height: "",
        CheckLanguage: "",
        bio: "",
        Qualification:"",
        University:"",
        Occupation:"",
        Salary:""
    })

    const {id}= useParams();

    const loadUser= async()=>{
      const res=  await axios.get(`http://localhost:3001/data/${id}`)
      setUser(res.data)
    }

    useEffect(() => {
        loadUser();
    }, )

    return (
        
       <div className='backbody'>

<div class="card-container">
        <span class="pro">PRO</span>
        <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" alt="user" class="round" />
        <div class="skills">
            <ul>
                <li>Name : {user.name}</li> <br/>
                <li>Number : {user.number}</li> <br/>
                <li>University : {user.University}</li> <br/>
                <li>Qualification : {user.Qualification}</li> <br/>
                <li>height : {user.height}</li> <br/>
                <li>Occupation : {user.Occupation}</li> <br/>
                <li>Email : {user.email}</li> <br/>
                <li>Gender : {user.testGender}</li> <br/>
                <li>Religion : {user.testReligion}</li> <br/>
                <li>Marital Status : {user.testMarital}</li> <br/>
                <li>Cast : {user.testCast}</li> <br/>
                <li>height : {user.height}</li> <br/>
                <li>Salary : {user.Salary}</li> <br/>
                <h6 className='h6'> Bio : {user.bio}</h6>
                
            </ul>
        </div>

        <div class="buttons">
            <button class="primary">
                Message
            </button>
        </div>
       
    </div>
       </div>
    
   
    )
}

export default PersonalCard;
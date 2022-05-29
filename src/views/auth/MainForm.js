import React, { useState } from 'react'

import {  useHistory } from 'react-router-dom';

import axios from 'axios'
import { MainFormValidation } from './MainFormValidation';


export const MainForm = () => {

    // const formatter = new Intl.NumberFormat('en')
    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        twitter: "",
        email: "",
        number: "",
        testGender: "",
        testReligion: "",
        testMarital: "",
        testCast: "",
        height: "",
        CheckLanguage: "",
        bio: "",
        Qualification: "",
        University: "",
        Occupation: "",
        Salary: "",
        fb: "",
        Instagram: "",
    })




    const [error, setError] = useState({
        name: "",
        email: "",
        number: "",
        testGender: "",
        testReligion: "",
        testMarital: "",
        testCast: "",
        height: "",
        bio: "",
        CheckLanguage: "",
        Qualification: "",
        University: "",
        Occupation: "",
        Salary: "",
        fb: "",
        twitter: "",
        Instagram: ""
    })

    const { name, twitter, Instagram, fb, email, number, testGender, testReligion, testMarital, testCast, height, bio, CheckLanguage, Qualification, University, Occupation,
        Salary } = user;

    const onInputChange = e => {
        // console.log(e.target);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onNameChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value.replace(/[^A-Za-z ]+$/ig, '') })
    }

    const onMobChange = e => {

        let value = e.target.value
        if (value.length < number.length) {
            setUser({ ...user, [e.target.name]: value })
        }
        else {
            if (number.length <= 11) {
                if (number.length === 3) {
                    value += '-'
                }
                setUser({ ...user, [e.target.name]: value.replace(/[^0-9-]+$/ig, '') })
            }
        }

    }
    const onHeightChange = (e) => {
        let value = e.target.value;
        if (value.length < height.length) {
            setUser({ ...user, [e.target.name]: e.target.value })
        } else if (height.length <= 3) {
            if (height.length === 2) {
                e.target.value += 'cm'
            }
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }


    const onSalaryChange = e => {

        if (e.target.value < Salary.length) {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
        

        setUser({ ...user, [e.target.name]: e.target.value.replace(/[^0-9,]/ig, '') })

    }

    const Submit = async e => {
        e.preventDefault();
        setError(MainFormValidation(user))

        // if (Object.keys(MainFormValidation(user)).length > 0) {
        //     return
        // } else {
            await axios.post(`http://localhost:3001/data/`, user)
            // window.location.reload();
            history.push("/Show")
        // }

    }


    return (
        <div>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-10">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Add Profile
                                    </h6>
                                </div>

                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    Add Your Basic Details
                                </div>
                                {/* form ki starting */}

                                <form onSubmit={e => Submit(e)}>




                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={e => onNameChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Name"
                                        />
                                        <small><p className="po">{error.name}</p></small>
                                    </div>











                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Gender
                                        </label>
                                        <select value={testGender} name='testGender' onChange={e => onInputChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                            <option value="Select">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <small><p className="po">{error.testGender}</p></small>
                                    </div>





                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Marital Status
                                        </label>
                                        <select value={testMarital} name='testMarital' onChange={e => onInputChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                            <option value="Select">Select</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widow">Widow</option>
                                        </select>
                                        <small><p className="po">{error.testMarital}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            name="number"
                                            value={number}
                                            onChange={e => onMobChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Mobile Number"
                                        />
                                        <small><p className="po">{error.number}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Height (in cm)
                                        </label>
                                        <input
                                            type="text"
                                            name="height"
                                            value={height}
                                            onChange={e => onHeightChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Height in cm"
                                        />
                                        <small><p className="po">{error.height}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Cast
                                        </label>
                                        <select value={testCast} name='testCast' onChange={e => onInputChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                            <option value="Select">Select</option>
                                            <option value="Syed">Syed</option>
                                            <option value="Chaudhary">Chaudhary</option>
                                            <option value="Sheikh">Sheikh</option>
                                            <option value="Butt">Butt</option>
                                            <option value="Arain">Arain</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        <small><p className="po">{error.testCast}</p></small>
                                    </div>











                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Religion
                                        </label>
                                        <select value={testReligion} name='testReligion' onChange={e => onInputChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                            <option value="Select">Select</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Jew">Jew</option>
                                        </select>
                                        <small><p className="po">{error.testReligion}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Languages
                                        </label>
                                        <input
                                            type="checkbox"
                                            name="CheckLanguage"
                                            value={CheckLanguage}

                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow "
                                            placeholder="Enter Email Address"
                                        />
                                        <small><p className="po">{error.CheckLanguage}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Qualification
                                        </label>
                                        <input
                                            type="text"
                                            name="Qualification"
                                            value={Qualification}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Your Qualification"
                                        />
                                        <small><p className="po">{error.Qualification}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            University
                                        </label>
                                        <input
                                            type="text"
                                            name="University"
                                            value={University}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter University Name"
                                        />
                                        <small><p className="po">{error.University}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Email Address"
                                        />
                                        <small><p className="po">{error.email}</p></small>
                                    </div>



                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Occupation
                                        </label>
                                        <select value={Occupation} name='Occupation' onChange={e => onInputChange(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                                            <option value="Select">Select</option>
                                            <option value="Business">Business</option>
                                            <option value="Private Job">Private Job</option>
                                            <option value="Govt. Job">Govt. Job</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        <small><p className="po">{error.Occupation}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Facebook Link
                                        </label>
                                        <input
                                            type="text"
                                            name="fb"
                                            value={fb}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Facebook Link"
                                        />
                                        <small><p className="po">{error.fb}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Twitter Link
                                        </label>
                                        <input
                                            type="text"
                                            name="twitter"
                                            value={twitter}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Salary in PKR"
                                        />
                                        <small><p className="po">{error.twitter}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Instagram Link
                                        </label>
                                        <input
                                            type="text"
                                            name="Instagram"
                                            value={Instagram}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Instagram Link"
                                        />
                                        <small><p className="po">{error.Instagram}</p></small>
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Salary
                                        </label>
                                        <input
                                            type="text"
                                            name="Salary"
                                            value={Salary}
                                            onChange={e => onSalaryChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Enter Salary in PKR"
                                        />
                                        <small><p className="po">{error.Salary}</p></small>
                                    </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            About Your Self
                                        </label>
                                        <textarea
                                            rows="4"
                                            cols="80"
                                            name="bio"
                                            value={bio}
                                            onChange={e => onInputChange(e)}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Write Something Interesting About Your Self..."
                                        />
                                        <small><p className="po" >{error.bio}</p></small>
                                    </div>


                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

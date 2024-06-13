import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Signup() {
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async()=>{
    try {
      const response = await axios.post("http://localhost:3000/api/v1/signup",{
        username,
        firstName,
        lastName,
        password
      });
      localStorage.setItem("token",`Bearer ${response.data.token}`);
      navigate("/dashboard")
    } catch (error) {
      console.log("Error at signup");
    }
  }
  
  return (
    <>
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading title={"Sign Up"}/>
          <SubHeading title={"Enter your information to create an account"} />
          <InputBox placeholder={"John"}title={"First Name"} onChange={(e)=>{
            setFirstName(e.target.value);
          }}/>
          <InputBox title={"Last Name"} placeholder={"Doe"} onChange={(e)=>{
            setLastName(e.target.value);
          }}/>
          <InputBox title={"Email"} placeholder={"johndoe@gmail.com"} onChange={(e)=>{
            setUsername(e.target.value);
          }}/>
          <InputBox  title={"Password"} onChange={(e)=>{
            setPassword(e.target.value);
          }} />
          <div className='pt-4'>
            <Button onClick={handleSignUp} title={"SignUp"} />
          </div>
          <BottomWarning title={'Already have an account?'} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
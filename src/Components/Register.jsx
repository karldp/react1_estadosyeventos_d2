import { BsFacebook, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { useState } from "react";
import React from 'react'
import Form from "./Form"
import Alert from "./Alert"
import SocialButtons from './SocialButtons';

const Register = () => {
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
});
  return (
    <>
    <h1>Create an Account</h1>
    <SocialButtons 
        FacebookIcon={BsFacebook} 
        GithubIcon={BsGithub} 
        LinkedinIcon={FaLinkedinIn}
      />
    <h3>or register with your email</h3>
    <Form setAlert={setAlert}/>
    {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  )
}

export default Register
import React, { useState, useEffect } from 'react'
import AuthForm from '../components/AuthForm';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { UserContext } from "../context";
import { useContext } from "react";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // const { state, setState } = useStateContext();
  const { state, setState } = useContext(UserContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(`/register`, {
        name: name,
        email: email,
        password: password,
      });
      if (data.error) {
        console.log(data)

        toast.error(data.error)
        setLoading(false)
      }
      if (data.success) {
        console.log(data)
        setOk(data.on);
        setName('');
        setEmail('');
        setPassword('');
        setLoading(false);
        router.push('/');
      }

    } catch (err) {
      console.log(err)
      // toast.error(err.response.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (state && state?.token) router.push('/');
  }, [state, state?.token])

  return (
    <div className="container">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1>Register page</h1>
        </div>
      </div>
      <div className='row py-5'>
        <div className='col-md-6 offset-md-3'>
          <AuthForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            page="register"
          />
        </div>
      </div>

    </div>
  )
}

export default Register;
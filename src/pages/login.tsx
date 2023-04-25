import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AuthForm from '../components/AuthForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useConnectors, useAccount, useStarknet } from "@starknet-react/core";
import { UserContext } from "../context";
import { useContext } from "react";

interface NodeExistsResponse {
  exists: boolean;
}

interface UserExistResponse {
  exists: boolean;
}

interface User {
  id: string;
  mail: string;
  password: string;
  keys: string[];
}

const baseURL = "http://localhost:8080";

function Login() {
  // const { state, setState } = useStateContext();
  const { state, setState } = useContext(UserContext);

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { library } = useStarknet();
  const { connect, connectors, available } = useConnectors()
  const { account, address, status } = useAccount()
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(`/login`, {
        email: email,
        password: password,
      });
      if (data.error) {
        toast.error(data.error)
        setLoading(false)
      } else {
        setState({
          user: data.user,
          token: data.token
        });
        window.localStorage.setItem('auth', JSON.stringify(data));
        // navigate('/')
        setLoading(false);
      }
    } catch (err) {
      // toast.error(err.response.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (state && state?.token) router.push('/')
  }, [state, state?.token])


  //new db
  // const getUser = async () => {
  //   const getUserResp = await fetch(`${baseURL}/getUser?userID=myUserID`);
  //   const userJson = await getUserResp.json();
  //   const user: User = userJson;
  //   console.log(`User email: ${user.mail}`);
  // }

  // useEffect(() => {
  //   const databaseConnected = async () => {
  //     try {
  //       const { data } = await axios.get(`${baseURL}/health`);
  //       if (!data) {
  //         throw new Error('Network response was not ok');
  //       }
  //       console.log(data);
  //     } catch (error) {
  //       console.error('There was an issue with the network request: ', error);
  //     }
  //   }
  //   databaseConnected()
  // }, [])

  // useEffect(() => {
  //   const createUser = async () => {
  //     const createUserReq = {
  //       mail: "myuser@example.com",
  //       password: "mypassword"
  //     };
  //     const createUserResp = await fetch(`${baseURL}/createUser`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(createUserReq)
  //     });
  //     console.log(`Create user status code: ${createUserResp.status}`);
  //   }


  //   const userExist = async () => {
  //     const userExistResp = await fetch(`${baseURL}/userExist?userID=3`);
  //     const userExistJson = await userExistResp.json();
  //     const userExist: UserExistResponse = userExistJson;
  //     console.log(`User exists: ${userExist.exists}`);
  //   }
  //   const getUser = async () => {
  //     const getUserResp = await fetch(`${baseURL}/getUser?userID=1`);
  //     const userJson = await getUserResp.json();
  //     const user: User = userJson;
  //     console.log(`User email: ${user.mail}`);
  //   }
  //   getUser()
  //   // userExist()
  //   // createUser();
  // }, [])
  useEffect(() => {
    const connectWallet = async () => {

    }
    connectWallet()
  }, [])

  if (status === 'disconnected') {
    console.log('disco')
  } else {
    console.log('Account:', { address })
  }
  console.log(library)
  return (
    <div>
      <AuthForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        page="login"
        name=''
        setName={() => { }}
      />
      <ul>
        {connectors.map((connector) => (
          <li key={connector.id()}>
            <button onClick={() => connect(connector)}>
              Connect {connector.id()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Login
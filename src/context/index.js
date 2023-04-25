import { useState, useEffect, createContext } from "react";
import Nodes from '../data/nodes.json'
import { useCookieState } from "@/hooks/useLocalStorage";

const UserContext = createContext();



const UserProvider = ({ children }) => {
  // const [data, setData] = useState(Nodes[2]);
  const [data, setData] = useCookieState('data', Nodes[0]);
  const [modal, setModal] = useState(0)
  const [showDelete, setShowDelete] = useState(false)
  const [showNavMobile, setShowNavMobile] = useState(false)
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const [client, setClient] = useState()
  const [checkout, setCheckout] = useState()

  return (
    <UserContext.Provider value={{
      modal,
      setModal,
      setShowDelete,
      showDelete,
      setShowNavMobile,
      showNavMobile,
      setData,
      data,
      name,
      setName,
      id,
      setId,
      description,
      setDescription,
      image,
      setImage,
      date,
      setDate,
      price,
      setPrice,
      client,
      setClient,
      checkout,
      setCheckout
    }
    }>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
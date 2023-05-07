import { useState, useEffect, createContext } from "react";
import Nodes from '../data/nodes.json'
import { useCookieState } from "@/hooks/useLocalStorage";

interface UserContextProps {
  modal: number;
  setModal: React.Dispatch<React.SetStateAction<number>>;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  showDelete: boolean;
  setShowNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
  showNavMobile: boolean;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  id256: string;
  setId256: React.Dispatch<React.SetStateAction<string>>;
  id512: string;
  setId512: React.Dispatch<React.SetStateAction<string>>;
  price512: string;
  setPrice512: React.Dispatch<React.SetStateAction<any>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<any>>;
  client?: any;
  setClient: React.Dispatch<React.SetStateAction<any>>;
  checkout?: any;
  setCheckout: React.Dispatch<React.SetStateAction<any>>
}


interface Props {
  children: React.ReactNode;
}


const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useCookieState('data', Nodes[0]);
  const [modal, setModal] = useState(0)
  const [showDelete, setShowDelete] = useState(false)
  const [showNavMobile, setShowNavMobile] = useState(false)
  const [name, setName] = useState('')
  const [id256, setId256] = useState('')
  const [id512, setId512] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const [price512, setPrice512] = useState('')
  const [client, setClient] = useState<any>()
  const [checkout, setCheckout] = useState<any>()

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
      id256,
      setId256,
      id512,
      setId512,
      price512,
      setPrice512,
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
    }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };

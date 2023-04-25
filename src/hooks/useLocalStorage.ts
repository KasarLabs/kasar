// import { useState, useEffect } from "react";

// function getSavedValue(key: any, initialValue: any) {
//   const savedValue = JSON.parse(localStorage.getItem(key) as string)
//   if (savedValue) return savedValue

//   if (initialValue instanceof Function) return initialValue()
//   return initialValue
// }

// export default function useLocalStorage(key: any, initialValue: any) {
//   const [value, setValue] = useState(() => {
//     return getSavedValue(key, initialValue);
//   })
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value))
//   }, [value, key])
//   return [value, setValue]
// }
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

type UseCookieStateReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useCookieState = <T>(
  key: string,
  initialValue: T
): UseCookieStateReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    const cookieValue = Cookies.get(key);
    if (cookieValue !== undefined) {
      return JSON.parse(cookieValue);
    }
    Cookies.set(key, JSON.stringify(initialValue));
    return initialValue;
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
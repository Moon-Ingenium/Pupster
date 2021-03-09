import { useEffect, useState } from "react";

const useDebounce = (value, delay) =>{
const [useDebounce, setuseDebounce] = useState(value);
useEffect(() => {
    const handler = setTimeout(() =>{
        setDebounce(value);
    }, delay );

    return () => {
        clearTimeout(handler);
    }
}, [value, delay]);

}

export default useDebounce;
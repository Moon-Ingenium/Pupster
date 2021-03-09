import { useEffect, useState } from "react";

const useDebounce = (value, delay) =>{
const [useDebounce, setuseDebounce] = useState(value);
useEffect(() => {
    const handler = setTimeout(() =>{
        setuseDebounce(value);
    }, delay );

    return () => {
        clearTimeout(handler);
    }
}, [value, delay])

return useDebounce;
}

export default useDebounce;
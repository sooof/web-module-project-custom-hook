import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(()=>{
        if(localStorage.getItem(key)){
            setValue(JSON.parse(localStorage.getItem(key)))
        }
        localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue;
    })
    const setStoredValue = (v) => {
        localStorage.setItem(key, JSON.stringify(v));
        setValue(v)
    }
    return [value, setStoredValue]
}
export default useLocalStorage;
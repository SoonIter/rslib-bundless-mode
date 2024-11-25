import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
const useCounter = (initialValue = 0)=>{
    const [count, setCount] = (0, __WEBPACK_EXTERNAL_MODULE_react__.useState)(initialValue);
    const increment = ()=>setCount((prev)=>prev + 1);
    const decrement = ()=>setCount((prev)=>prev - 1);
    return {
        count,
        increment,
        decrement
    };
};
export { useCounter };

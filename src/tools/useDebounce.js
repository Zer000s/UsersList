import React from "react";

export function useDebounce(pay){
    const [value, setValue] = React.useState();

    React.useEffect(()=>{
        const timer = setTimeout(
            ()=>{setValue(pay)},
            750
        );

        return () =>{
            clearTimeout(timer);
        };
    },[pay])
    return value;
}
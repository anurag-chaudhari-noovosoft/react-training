import {useEffect, useMemo, useState} from "react";


function slowFunction(number) {
    for(let i=0;i<1000000000;i++) {}
    return number*2;
}
export default function UseMemoBasicApp() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(()=> {
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(()=> {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark])

    useEffect(() => {
        console.log("Theme changed")
    }, [themeStyles]);

    return (
        <>
            <input type={"number"} value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={()=> setDark(prevDark=>!prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
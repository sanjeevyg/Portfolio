import React from 'react';
import { useRef, useEffect} from 'react';
import './index.css';

export default function Cursor() {

    const cursorRef = useRef(null)
    useEffect( () => {
        document.addEventListener("mousemove", e => {
            cursorRef.current.style.top  = `${e.pageY - 12}px`
            cursorRef.current.style.left = `${e.pageX - 12}px`
        })
    
    }, [])

    const addClassName = () => {
        cursorRef.current.className = "cursor upScale"
        setTimeout( () => {
            cursorRef.current.className = "cursor"
        }, 500)
    }
  
    return (
        <div className="" ref={cursorRef} onClick={addClassName}>
        </div>
            
    )
}


import { useState, useEffect, useMemo } from 'react';

export default function useElementOnScreen(targetRef, options) {

    const [isVisible, setVisibleState] = useState(false)

    const callBack = entries => {
        const [entry] = entries
        setVisibleState(entry.isIntersecting)
    }
    
    const optionMemo = useMemo(() => {
        return options 
    }, [options]);
    
    
    useEffect(() => {
    const observer = new IntersectionObserver(callBack, optionMemo)
    const currentTarget = targetRef.current
    
    if(currentTarget) observer.observe(currentTarget)
    
    return (() => {if(currentTarget) observer.unobserve(currentTarget)})

    }, [targetRef, optionMemo])

    return isVisible
}




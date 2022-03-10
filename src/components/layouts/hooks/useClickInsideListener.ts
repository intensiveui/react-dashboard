import { useEffect, useRef, useState } from 'react';

const useClickInsideListener = (ref: any, defaultValue: boolean) => {
    const [isInside, setIsInside] = useState(defaultValue);
    const insideRef = useRef(false);

    useEffect(() => {
      function handleClickInside(event: any) {
        if (ref.current) {
            if(ref.current.contains(event.target) && !insideRef.current) {
                setIsInside(true)
                insideRef.current = true;
            } else if(!ref.current.contains(event.target) && insideRef.current) {
                setIsInside(false)
                insideRef.current = false;
            }
        }
      }
      document.addEventListener("click", handleClickInside);
      return () => {
        document.removeEventListener("click", handleClickInside);
      };
    }, [ref]);

    return [isInside]
}
 
export default useClickInsideListener;

import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, deps: any) => {
  const cnt = useRef(0);
  useEffect(
    () => {cnt.current += 1;}
    , [deps]);
  useEffect(() => {
    if (cnt.current > 1) {
      fn();
    }
  }, [cnt, fn]);
};
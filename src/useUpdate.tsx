import {useEffect, useState} from 'react';

export const useUpdate = (fn: () => void, deps: any) => {
  const [cnt, setCnt] = useState(0);
  useEffect(
    () => setCnt(cnt => cnt + 1)
    , [deps]);
  useEffect(() => {
    console.log(cnt);
    if (cnt > 1) {
      console.log("fn");
      fn();
    }
  }, [cnt, fn]);
};
import Nav from './Nav';
import React, {FC, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useUpdate} from '../hooks/useUpdate';

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;

const Main = styled.div`
flex-grow: 1;
//自己的区域加滚动条
overflow: auto;
`;

type Props = {
  className?: string,
  scrollTop?: number
}


const Layout: FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTop = props.scrollTop || 0;
      }
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;
import {Link} from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';
import Icon from "./Icon"

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgb(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      text-align: center;
      width: 33.3%;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > svg{
      height: 36px;
      width: 36px;
      }
    }
}
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" fill="red"/>
          <Link to="/tags"> 标签页</Link>
        </li>
        <li>
          <Icon name="money" fill="blue"/>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="statistics" fill="green"/>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
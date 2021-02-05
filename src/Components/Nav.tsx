import {NavLink} from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.nav`
background: white;
  box-shadow: 0 0 3px rgb(0,0,0,0.25);
  > ul{
    display: flex;
    > li{
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
          &.selected{
            color:red;
            fill:red;
          }
        }
      text-align: center;
      width: 33.3%;
      svg{
      height: 24px;
      width: 24px;
      }
    }
}
`;
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签页
          </NavLink>

        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
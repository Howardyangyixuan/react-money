import {Link} from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';
import money from '../icons/money.svg';
import tag from '../icons/tag.svg';
import statistics from '../icons/statistics.svg';

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
      > img{
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
          <img src={tag} alt=""/>
          <Link to="/tags"> 标签页</Link>
        </li>
        <li>
          <img src={money} alt=""/>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <img src={statistics} alt=""/>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
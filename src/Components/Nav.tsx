import {Link} from 'react-router-dom';

import React from 'react';
import styled from 'styled-components';
require('../icons/money.svg')
require('../icons/tag.svg')
require('../icons/statistics.svg')

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
          <svg fill="red">
            <use xlinkHref="#tag">hi</use>
          </svg>
          <Link to="/tags"> 标签页</Link>
        </li>
        <li>
            <svg fill="red">
            <use xlinkHref="#money">hi</use>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg>
            <use xlinkHref="#statistics">hi</use>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
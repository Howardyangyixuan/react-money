import styled from 'styled-components';
import React, {FC} from 'react';


const CategorySection:FC = (props: any) => {
  return (
    <_CategorySection>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </_CategorySection>
  );
};
const _CategorySection = styled.section`
font-size: 24px;
> ul{
  display: flex;
  background: #c4c4c4;
  > li{
  width: 50%;
  text-align: center;
  padding: 16px 0; 
  position: relative;
  &.selected::after{
  content: '';
  width: 100%;
  display: block;
  height: 3px;
  background: #333;
  bottom: 0;
  position: absolute;
  left:0
  }
  }
  
}
`;

export {CategorySection};
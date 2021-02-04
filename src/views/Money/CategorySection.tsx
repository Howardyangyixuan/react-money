import styled from 'styled-components';
import React, {FC, useState} from 'react';


const CategorySection:FC = (props: any) => {
  const categoryList = useState<string[]>(["收入","支出"])[0]
  const [category,setCategory] = useState<string>("支出")
  const getClass=(cate:string)=>{
    return cate===category?"selected":""
  }
  return (
    <_CategorySection>
      <ul>
        {categoryList.map((item)=>{
          return <li className={getClass(item)} onClick={()=>setCategory(item)}>{item}</li>
        })}
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
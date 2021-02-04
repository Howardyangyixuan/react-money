import styled from 'styled-components';
import React, {FC, useState} from 'react';


const CategorySection:FC = (props: any) => {
  const categoryMap = {
    "+":"收入",
    "-":"支出",
  }
  type T = keyof typeof categoryMap;
  const categoryList = useState<T[]>(["+","-"])[0]
  const [category,setCategory] = useState<T>("-")
  const getClass=(cate:string)=>{
    return cate===category?"selected":""
  }
  return (
    <CategorySectionWrapper>
      <ul>
        {categoryList.map((item)=>{
          return <li key={item} className={getClass(item)} onClick={()=>setCategory(item)}>{categoryMap[item]}</li>
        })}
      </ul>
    </CategorySectionWrapper>
  );
};
const CategorySectionWrapper = styled.section`
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
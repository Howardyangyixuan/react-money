import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
background: #FFFFFF;
padding: 12px 16px;
> ol{
  margin: 0 -12px;
  > li{
  display: inline-block;
  background: #D9D9D9;
  border-radius: 18px;
  padding: 3px 18px;
  font-size: 14px;
  margin: 0 12px;
  }
}
  > button{
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  color: #666;
  margin-top: 8px;
  }
`;
const NotesSection = styled.section`
background: #f5f5f5;
padding: 10px 16px;
font-size: 14px;
  > label{
  display: flex;
  align-items: center;
    > span{
    margin-right: 16px;
    white-space: nowrap;
    }
    > input{
    display: block;
    width: 100%;
    height: 72px;
    border: none;
    background: none;
    }
  }
`;
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
`;

function Tags() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
      <h2>Tags</h2>
    </Layout>
  );
}

export default Tags;
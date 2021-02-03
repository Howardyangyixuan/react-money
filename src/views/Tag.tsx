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
`;
const CategorySection = styled.section`
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
        <button>支出</button>
        <button>收入</button>
      </NotesSection>
      <CategorySection>
        <label>
          <span>备注</span>
          <input type="text" value="在这里添加备注"/>
        </label>
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
import Layout from '../Components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../Components/Icon';

const TagList = styled.ol`
font-size: 16px;
background: white;
> li {
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  padding: 12px 16px 12px 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon{
  min-height: 1em;
  min-width:  1em;
  }
}
`
function Tags() {
  const {tags,setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map((tag)=>{return <li key={tag}><span className="oneLine">{tag}</span><Icon name="right"/></li>})}
      </TagList>
      <h2>Tags</h2>
    </Layout>
  );
}


export default Tags

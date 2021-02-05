import Layout from '../Components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../Components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
font-size: 16px;
background: white;
> li {
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  margin-left: 16px;
  > a{
  padding: 12px 16px 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon{
  min-height: 1em;
  min-width:  1em;
  }
  } 
}
`;

const Center = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
font-size: 18px;
background: #333;
border: none;
padding: 8px 12px;
color: white;
border-radius: 4px;
`
function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={'/tags/' + tag.id}>
                <span className="oneLine">{tag.id}{tag.name}</span>
                <Icon name="right"/>
              </Link>
            </li>
          );
        })}
      </TagList>
      <Center>
        <Button>
          新增标签
        </Button>
      </Center>
    </Layout>
  );
}


export default Tags;

import React, {FC} from 'react';
import {Link, useParams, Redirect} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../Components/Layout';
import Icon from '../Components/Icon';
import {Button} from '../Components/Button';
import styled from 'styled-components';
import {Input} from '../Components/Input';
import {Center} from '../Components/Center';


const TagWrapper = styled.div`
display: flex;
flex-direction: column;
`;
const InputWrapper = styled.div`
padding: 0 16px;
margin-top: 8px;
background: white;
input{
height: 44px;
}
`;
const TopBar = styled.header`
display: flex;
justify-content: space-between;
line-height: 20px;
padding: 14px;
background: white;
align-items: center;
`;
const Tag: FC = () => {
  const {tagId} = useParams();
  const {tags, findTag, updateTag, deleteTag} = useTags();
  const tag = findTag(parseInt(tagId));
  return (
    !tag ? <Redirect to="/tags"/> :
      (<Layout>
        <TagWrapper>
          <TopBar>
            <Link to="/tags">
              <Icon name="left"/>
            </Link>
            <span>编辑标签</span>
            <Icon name=""/>
          </TopBar>
          <InputWrapper>
            <Input label="标签名" placeholder="请修改标签名" defaultValue={tag.name}
                   onBlur={(e) => updateTag(tag.id, e.target.value)}/>
          </InputWrapper>
          <Center>
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </Center>
          <div>{tag.id}:{tag.name}</div>
          {tags.map((tag) => <li key={tag.id}>{tag.name}</li>)}
        </TagWrapper>
      </Layout>)
  );
};
export {Tag};
import React, {FC} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../Components/Layout';
import Icon from '../Components/Icon';
import {Button} from '../Components/Button';
import styled from 'styled-components';
import {Input} from '../Components/Input';
import {Center} from '../Components/Center';
import {createId} from '../lib/createId';


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
  const {tags, findTag, setTags} = useTags();
  const tag = findTag(parseInt(tagId));
  return (
    <Layout>
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
                 onBlur={(e) => setTags([...tags, {id: createId(), name: e.target.value}])}/>
        </InputWrapper>
        <Center>
          <Button>删除标签</Button>
        </Center>
        <div>{tag.id}:{tag.name}</div>
      </TagWrapper>
    </Layout>
  );
};
export {Tag};
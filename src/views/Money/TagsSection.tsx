import styled from 'styled-components';
import React, {FC} from 'react';
import {Tag} from '../helper';
import {createId} from '../../lib/createId';

type Props= {
  value:{tags:Tag[],selectedTagsMarker:number[]},
  onChange:(tags:Tag[],selectedTagsMarker:number[])=>void
}
const TagsSection: FC<Props> = (props) => {
  const tags = props.value.tags;
  const selectedTags = props.value.selectedTagsMarker;
  const addTag = () => {
    const tag = window.prompt('请输入新标签');
    if (tag) {
      props.onChange(
        [...tags, {id:createId(),name:tag.toString()}],
        [...selectedTags, 0]
      );

    }

  };
  const toggleTag = (index: number) => {
    const sTags = [...selectedTags];
    sTags[index] = 1 - sTags[index];
    props.onChange(
      [...tags],
      [...sTags]);
  };

  const getClass = (index: number) => {
    return selectedTags[index] === 1 ? 'selected' : '';
  };

  return (
    <TagsSectionWrapper>
      <ol>
        {tags.map((item, index) => {
          return <li className={getClass(index)} onClick={() => toggleTag(index)}
                     key={index}>{item.name}</li>;
        })}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </TagsSectionWrapper>
  );
};
const TagsSectionWrapper = styled.section`
background: #FFFFFF;
padding: 12px 16px;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
> ol{
  margin: 0 -12px;
  > li{
  display: inline-block;
  background: #D9D9D9;
  border-radius: 18px;
  padding: 3px 18px;
  font-size: 14px;
  margin: 3px 12px;
  &.selected{
    background: red;
  }
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
export {TagsSection};
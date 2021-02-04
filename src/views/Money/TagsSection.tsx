import styled from 'styled-components';
import React, {FC, useState} from 'react';

const TagsSection: FC = (props: any) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<number[]>([0, 0, 0, 0]);
  const addTag = () => {
    const tag = window.prompt('请输入新标签');
    if (tag) {
      setTags([...tags, tag.toString()]);
      const sTags = [...selectedTags, 0];
      setSelectedTags(sTags);
    }

  };
  const toggleTag = (index: number) => {
    const tags = [...selectedTags];
    tags[index] = 1 - tags[index];
    setSelectedTags(tags);
  };

  const getClass = (index: number) => {
    return selectedTags[index] === 1 ? 'selected' : '';
  };

  return (
    <TagsSectionWrapper>
      <ol>
        {tags.map((item, index) => {
          return <li className={getClass(index)} onClick={() => toggleTag(index)}
                     key={index}>{item}</li>;
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
import Layout from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {useTags} from '../hooks/useTags';
import {Tag} from './helper';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;

type MoneyData = {
  tags: Tag[],
  selectedTagsMarker: number[],
  note: string,
  category: ('+' | '-'),
  output: number
}

function Money() {
  const {tags, setTags} = useTags();
  const [moneyData, setMoneyData] = useState<MoneyData>({
    tags,
    selectedTagsMarker: tags.map(()=>0),
    note: '',
    category: '-',
    output: 0
  });
  const onChange = (data: Partial<MoneyData>) => {
    if (data.tags) {
      //以防万一，即使传入的是原对象也可以统一处理，深拷贝生成新对象
      const newTags = JSON.parse(JSON.stringify(data.tags));
      setTags(newTags);
    }
    setMoneyData({
      ...moneyData,
      ...data
    });
  };

  return (
    <MyLayout>
      {JSON.stringify(moneyData)}
      <TagsSection value={{tags: moneyData.tags, selectedTagsMarker: moneyData.selectedTagsMarker}}
                   onChange={(tags, selectedTagsMarker) => onChange({tags, selectedTagsMarker: selectedTagsMarker})}/>
      <NotesSection value={moneyData.note} onChange={note => onChange({note})}/>
      <CategorySection value={moneyData.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={moneyData.output} onChange={output => onChange({output})}/>
    </MyLayout>
  );
}

export default Money;
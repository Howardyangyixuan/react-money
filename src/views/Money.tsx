import Layout from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {useTags} from '../useTags';
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
  const {tags, setTags} = useTags()
  const [moneyData, setMoneyData] = useState<MoneyData>({
    tags ,
    selectedTagsMarker: [0, 0, 0, 0],
    note: '',
    category: '-',
    output: 0
  });

  const onChange = (data: Partial<MoneyData>) => {
    if(data.tags) {
     setTags(data.tags)
    }
    setMoneyData({
      ...moneyData,
      ...data
    });
  };

  return (
    <MyLayout>
      <TagsSection value={{tags: moneyData.tags, selectedTagsMarker: moneyData.selectedTagsMarker}}
                   onChange={(tags, selectedTagsMarker) => onChange({tags, selectedTagsMarker: selectedTagsMarker})}/>
      <NotesSection value={moneyData.note} onChange={note => onChange({note})}/>
      <CategorySection value={moneyData.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={moneyData.output} onChange={output => onChange({output})}/>
    </MyLayout>
  );
}

export default Money;
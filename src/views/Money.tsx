import Layout from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;

type MoneyData = {
  tags: string[],
  selectedTags: number[],
  note: string,
  category: ('+' | '-'),
  output: number
}

function Money() {
  const [moneyData, setMoneyData] = useState<MoneyData>({
    tags: ['衣', '食', '住', '行'],
    selectedTags: [0, 0, 0, 0],
    note: '',
    category: '-',
    output: 0
  });

  const onChange = (data: Partial<MoneyData>) => {
    setMoneyData({
      ...moneyData,
      ...data
    });
  };

  return (
    <MyLayout>
      {moneyData.selectedTags}
      <hr/>
      {moneyData.note}
      <hr/>
      {moneyData.category}
      <hr/>
      {moneyData.output}
      <TagsSection value={{tags: moneyData.tags, selectedTags: moneyData.selectedTags}}
                   onChange={(tags, selectedTags) => onChange({tags, selectedTags})}/>
      <NotesSection value={moneyData.note} onChange={note => onChange({note})}/>
      <CategorySection value={moneyData.category} onChange={category => onChange({category})}/>
      <NumberPadSection value={moneyData.output} onChange={output => onChange({output})}/>
    </MyLayout>
  );
}

export default Money;
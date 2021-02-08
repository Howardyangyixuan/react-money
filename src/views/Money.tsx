import Layout from '../Components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {useTags} from '../hooks/useTags';
import {useRecords} from '../hooks/useRecords';
import {Category, Tag} from './helper';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
overflow: hidden;
`;

const CategorySectionWrapper = styled.div`
background: #c4c4c4;
`;

type MoneyData = {
  tags: Tag[],
  selectedTagsMarker: number[],
  note: string,
  category: Category,
  output: number
}

function Money() {
  const {tags, setTags} = useTags();
  const {addRecords} = useRecords();
  const initMoneyData = {
    tags,
    selectedTagsMarker: tags.map(() => 0),
    note: '',
    category: '-' as Category,
    output: 0
  };
  const [moneyData, setMoneyData] = useState<MoneyData>(initMoneyData);
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

  const onOK = () => {
    let tagsName = [];
    const len = moneyData.selectedTagsMarker.length;
    for (let i = 0; i < len; i++) {
      if (moneyData.selectedTagsMarker[i]) {
        tagsName.push(moneyData.tags[i].name);
      }
    }
    const {tags, selectedTagsMarker, ...rest} = moneyData;
    const record = {
      tagsName,
      ...rest,
      createdAt: new Date().toISOString()
    };
    addRecords(record);
    setMoneyData(initMoneyData);
    window.alert('添加成功');
  };

  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={{tags: moneyData.tags, selectedTagsMarker: moneyData.selectedTagsMarker}}
                   onChange={(tags, selectedTagsMarker) => onChange({tags, selectedTagsMarker: selectedTagsMarker})}/>
      <NotesSection value={moneyData.note} onChange={note => onChange({note})}/>
      <CategorySectionWrapper>
        <CategorySection value={moneyData.category} onChange={category => onChange({category})}/>
      </CategorySectionWrapper>
      <NumberPadSection value={moneyData.output} onChange={output => onChange({output})} onOk={() => onOK()}/>
    </MyLayout>
  );
}

export default Money;
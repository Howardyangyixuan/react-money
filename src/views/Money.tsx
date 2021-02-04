import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;

function Tags() {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Tags;
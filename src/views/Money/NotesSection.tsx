import styled from 'styled-components';
import React, {FC} from 'react';
import {Input} from '../../Components/Input';

type Props = {
  value: string,
  onChange: (note: string) => void
}
const NotesSection: FC<Props> = (props) => {
  const note = props.value;
  return (
    <NotesSectionWrapper>
      <Input label="备注" value={note}
             onChange={(e) => {props.onChange(e.target.value);}}
             type="text"
             placeholder="请在这里添加备注"/>
    </NotesSectionWrapper>
  );
};
const NotesSectionWrapper = styled.section`
background: #f5f5f5;
padding: 10px 16px;
font-size: 14px;
`;

export {NotesSection};
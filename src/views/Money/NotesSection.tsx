import styled from 'styled-components';
import React, {FC} from 'react';

type Props = {
  value:string,
  onChange:(note:string)=>void
}
const NotesSection:FC<Props> = (props) => {
  const note = props.value
  return (
    <NotesSectionWrapper>
      <label>
        <span>备注</span>
        <input defaultValue={note} onBlur={(e)=>{props.onChange(e.target.value)}} type="text" placeholder="请在这里添加备注"/>
      </label>
    </NotesSectionWrapper>
  );
};
const NotesSectionWrapper = styled.section`
background: #f5f5f5;
padding: 10px 16px;
font-size: 14px;
  > label{
  display: flex;
  align-items: center;
    > span{
    margin-right: 16px;
    white-space: nowrap;
    }
    > input{
    display: block;
    width: 100%;
    height: 72px;
    border: none;
    background: none;
    }
  }
`;

export {NotesSection};
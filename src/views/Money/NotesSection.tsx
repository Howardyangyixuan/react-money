import styled from 'styled-components';
import React, {FC, useState} from 'react';

const NotesSection:FC = (props:any) => {
  const [note,setNote] =useState<string>("")
  console.log(note);
  return (
    <NotesSectionWrapper>
      <label>
        <span>备注</span>
        <input defaultValue={note} onBlur={(e)=>{setNote(e.target.value)}} type="text" placeholder="请在这里添加备注"/>
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
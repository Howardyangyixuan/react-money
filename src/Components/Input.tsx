import React, {FC} from 'react';
import styled from 'styled-components';

const Label = styled.label`
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

`;
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: FC<Props> = (props) => {
  const {label,...inputProps} = props
  return (
    <Label>
      <span>{label}</span>
      <input className="oneLine" {...inputProps}/>
    </Label>
  );
};

export {Input};

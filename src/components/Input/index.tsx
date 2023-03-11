import React from 'react';
import { TextInputProps, TextProps } from 'react-native';
import * as S from './Input.styles';

interface Props {
  label: string,
  textProps: TextProps,
  textInputProps: TextInputProps,
}

export const Input = ({ label, textProps, textInputProps }: Props) => {

  return (
    <S.Container>
      <S.LabelText {...textProps} >
        {label}
      </S.LabelText>
      <S.Input {...textInputProps} />
    </S.Container>
  )
}
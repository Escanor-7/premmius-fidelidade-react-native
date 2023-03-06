import React from 'react';
import { TextInputProps, TextProps } from 'react-native';
import * as S from './SignInput.styles';

interface Props extends TextInputProps, TextProps {
  label: string,
}

export const SignInput = ({ label, ...rest }: Props) => {

  return (
    <S.Container>
      <S.LabelText {...rest} >
        {label}
      </S.LabelText>
      <S.Input {...rest} />
    </S.Container>
  )
}
import React from 'react';
import { TextInputProps, TextProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Input } from '@components/Input';
import * as S from './InputForm.styles';

interface Props {
  control: Control
  name: string,
  label: string,
  error?: string,
  textProps: TextProps,
  textInputProps: TextInputProps,
}

export function InputForm({ control, name, label, error, textProps, textInputProps }: Props) {

  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label={label}
            textProps={textProps}
            textInputProps={{
              onChangeText: onChange,
              value: value,
              ...textInputProps
            }}
          />
        )}
        name={name}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}
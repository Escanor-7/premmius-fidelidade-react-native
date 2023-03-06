import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, KeyboardAvoidingView } from 'react-native';
import { SignInput } from '@components/SignInput';

import * as S from './Login.styles';

type RouteParams = {
  profile_type: string;
}

export const Login = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { profile_type } = route.params as RouteParams;

  const handleRegister = () => {
    navigation.navigate('register');
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.RowBetween>
          <Image
            source={require('../../assets/premmius-logo.jpg')}
            style={{ width: 250, height: 100 }}
          />
        </S.RowBetween>

        <S.SubTitle style={{ marginTop: 20, marginBottom: 20, opacity: 0.8 }} >
          Acesse sua conta
        </S.SubTitle>
        <KeyboardAvoidingView>
          <S.InputArea>
            <SignInput
              label='E-mail'
              placeholder='exemplo@exemplo.com'
              placeholderTextColor='#e8e2e221'
              keyboardType='email-address'
            />
            < SignInput
              label='Senha'
              placeholder='digite sua senha'
              secureTextEntry={true}
              placeholderTextColor='#e8e2e221'
            />

            <S.SignMessageButton>
              < S.SignMessageButtonText > Esqueci minha senha</S.SignMessageButtonText>
            </S.SignMessageButton>
            <S.Column style={{
              width: '100%',
              alignItems: 'center'
            }}>
              <S.CustomButton style={{ marginTop: 20 }}>
                <S.CustomButtonText>Entrar</S.CustomButtonText>
              </S.CustomButton>
              <S.SubTitle style={{ marginTop: 10, marginBottom: 10, opacity: 0.8 }} >
                ou
              </S.SubTitle>
              <S.CustomButton >
                <S.CustomButtonText onPress={handleRegister} >Cadastre-se</S.CustomButtonText>
              </S.CustomButton>
              <S.Title>{profile_type}</S.Title>
            </S.Column>
          </S.InputArea>
        </KeyboardAvoidingView>
      </S.LoginContainer >
    </S.Container >
  )
};

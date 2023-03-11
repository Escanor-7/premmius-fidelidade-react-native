import React from 'react';
import { Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from './Login.styles';
import { InputForm } from '@components/Form/InputForm';
import { Button } from '@components/Form/Button';

type RouteParams = {
  profile_type: string;
}
interface FormData {
  email?: string;
  password?: string
}

const schema = Yup.object().shape({
  email: Yup.string().required('Email é obrigatório'),
  password: Yup
    .string()
    .min(6, 'A senha deve ter 6 ou mais caracteres.')
    .required('Senha é obrigatório')
})

export const Login = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { profile_type } = route.params as RouteParams;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleLogin = (data: FormData) => {

    const formData = {
      email: data.email,
      password: data.password,
    }
    console.log('Dados =>', formData)
    // navigation.navigate('register');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
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
              <InputForm
                textProps={{

                }}
                textInputProps={{
                  placeholder: 'exemplo@exemplo.com',
                  placeholderTextColor: '#e8e2e221',
                  keyboardType: 'email-address'
                }}
                name='email'
                control={control}
                label='E-mail'
                error={errors.email && errors.email.message}
              />

              <InputForm
                textProps={{
                  style: { marginTop: 20 }
                }}
                textInputProps={{
                  placeholder: 'digite sua senha',
                  placeholderTextColor: '#e8e2e221',
                  secureTextEntry: true
                }}
                name='password'
                control={control}
                label='Senha'
                error={errors.password && errors.password.message}
              />

              <S.SignMessageButton>
                < S.SignMessageButtonText >Esqueci minha senha</S.SignMessageButtonText>
              </S.SignMessageButton>

              <Button
                title='Entrar'
                style={{ marginTop: 50 }}
                onPress={handleSubmit(handleLogin)}
              />
              <S.SubTitle style={{ marginTop: 10, marginBottom: 10, opacity: 0.8 }} >
                ou
              </S.SubTitle>
              <Button
                title='Cadastre-se'
              />

              {/* <S.Title>{profile_type}</S.Title> */}
            </S.InputArea>
          </KeyboardAvoidingView>
        </S.LoginContainer >
      </S.Container >
    </TouchableWithoutFeedback>
  )
};

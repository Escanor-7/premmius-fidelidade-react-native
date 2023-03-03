import { useNavigation } from "@react-navigation/native";

import { profileTypeCreate } from "@storage/profileType/ProfileTypeCreate";

import * as S from "./Welcome.styles";

import { useTheme } from 'styled-components/native'
import { Button } from "@components/Button";


export function Welcome() {
  const { COLORS } = useTheme();

  const profileInfo = {
    physicalPerson: 'Pessoa física',
    shopkeeper: 'Lojista'
  }

  const navigate = useNavigation();

  async function handleLogin(profile: string) {
    try {
      await profileTypeCreate(profile);
      navigate.navigate('login', { profile_type: profile });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <S.Modal>
        <S.Title>Qual o seu perfil ?</S.Title>
        <Button text={profileInfo.physicalPerson}
          buttonStyle={{
            backgroundColor: COLORS.VIOLET_100,
            width: "80%",
            borderRadius: 5
          }}
          onPress={() => handleLogin(profileInfo.physicalPerson)}
        />
        <S.AltText>ou</S.AltText>
        <Button text={profileInfo.shopkeeper}
          buttonStyle={{
            backgroundColor: COLORS.VIOLET_100,
            width: "80%",
            borderRadius: 5
          }}
          onPress={() => handleLogin(profileInfo.shopkeeper)}
        />
      </S.Modal>
    </S.Container>
  )
}
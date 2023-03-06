import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  padding: 0px 30px;
`;
export const LoginContainer = styled.View`
  margin-top: 20px;
`;

export const RowBetween = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

export const Column = styled.View`
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 50px;
  color: #FFF;
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #FFF;
`;

export const ErrorMessage = styled.Text`
  font-size: 14px;
  color: #FF0000;
  margin-bottom: 10px;
`;

export const InputArea = styled.View`
  /* justify-content: center;
  align-items: center; */
  /* padding: 40px; */
`;

export const CustomButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #F58634;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

export const SignMessageButton = styled.TouchableOpacity`
  width: 45%;
`;

export const SignMessageButtonText = styled.Text`
  color: #fff;
`;

export const SignMessageButtonTextBold = styled.Text``;

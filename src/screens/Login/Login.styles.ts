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

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 50px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 600;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.WHITE};
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

export const SignMessageButton = styled.TouchableOpacity`
  width: 45%;
`;

export const SignMessageButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SignMessageButtonTextBold = styled.Text``;

import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const Input = styled.TextInput`
  color: ${({ theme }) => theme.COLORS.WHITE};;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.WHITE};;
  font-size: 16px;
`;
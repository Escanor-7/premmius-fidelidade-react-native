import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
  font-weight: 600;
`;
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.VIOLET};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.View`
  background-color: white;
  width: 80%;
  height: 50%;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.VIOLET};
  margin: 0px 0px 50px 0px;
`;

export const AltText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.VIOLET};
  font-weight: 500;
  margin: 15px 0px;
`;
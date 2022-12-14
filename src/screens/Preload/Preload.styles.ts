import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.VIOLET};
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 20px;
`;
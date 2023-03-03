import styled from 'styled-components/native';

type Props = {
  backgroundColor: string
}

export const Button = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 60px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#F58634'};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
`;
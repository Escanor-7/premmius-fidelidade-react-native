import React, { useEffect } from 'react';
import { Image } from 'react-native';

import * as S from './Preload.styles';

export const Preload = () => {
  return <S.Container>
    <Image
      source={require('../../assets/premmius-logo.jpg')}
      style={{ width: 300, height: 100 }}
    />
    <S.LoadingIcon size={40}
      // color='#614B9D'
      color='#FFF'
    />
  </S.Container>;
};

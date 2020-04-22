
/**
  * Do not change! File was auto generate.
  *
  */
import React from 'react';
import styled, {keyframes} from 'styled-components';

import {ReactComponent as SassVector} from './SassVector.svg';

import Icon from '../Icon';

export const SassVectorFile = (props) => (
  <Icon class="rotate" {...props}>
    <SassVectorComponent/>
  </Icon>
);

const rotate = keyframes`
  0%{
  transform: rotateZ(0deg);
  }100%{
  transform: rotateZ(-360deg);
}

`

const SassVectorComponent = styled(SassVector)`
 .rotate {
    animation: 2s linear;
    }


`;

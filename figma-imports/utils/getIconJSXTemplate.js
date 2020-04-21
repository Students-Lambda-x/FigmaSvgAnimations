const getGenFileCaption = require( "./getGenFileCaption" );

/**
 * get icon component template
 *
 * @param {string} name
 */
module.exports = ( name ) => `
${ getGenFileCaption() }
import React from 'react';
import styled, {keyframes} from 'styled-component';

import {ReactComponent as ${ name }Component} from './${ name }.svg';

import Icon from '../Icon';

export const ${ name } = (props) => (
  <Icon {...props}>
    <${ name }Svg/>
  </Icon>
);

const rotate = keyframes\`
  0%{
  rotate(0);
  }100%{
  rotate(360deg);
}

\`

const ${ name }Svg = styled(${ name })\`
 #rotate {
    animation: 2s linear;
    }


\`;
`;

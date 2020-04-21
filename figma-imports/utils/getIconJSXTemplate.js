const getGenFileCaption = require( "./getGenFileCaption" );

/**
 * get icon component template
 *
 * @param {string} name
 */
module.exports = ( name ) => `
${ getGenFileCaption() }
import React from 'react';
import styled, {keyframes} from 'styled-components';

import {ReactComponent as ${ name }} from './${ name }.svg';

import Icon from '../Icon';

export const ${ name }File = (props) => (
  <Icon class=\"rotate\" {...props}>
    <${ name }Component/>
  </Icon>
);

const rotate = keyframes\`
  0%{
  transform: rotateZ(0deg);
  }100%{
  transform: rotateZ(-360deg);
}

\`

const ${ name }Component = styled(${ name })\`
 .rotate {
    animation: 2s linear;
    }


\`;
`;

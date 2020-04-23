const getGenFileCaption = require( "./getGenFileCaption" );
const getComponentFunctions = require( "./getComponentFunctions" );
const getStyledContent = require( "./getStyledContent.js" );

/**
 * get icon component template
 *
 * @param {string} name
 */
module.exports = ( name, svgString ) => `
${ getGenFileCaption() }
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import {ReactComponent as ${ name }Svg} from './${ name }.svg'

export const ${ name } = (props) => {
    
    ${ getComponentFunctions() }
  
  return (
    <${ name }Component length={length}>
      ${ svgString.join( "\n" ) }
    </${ name }Component>
    )
};


const ${ name }Component = styled(${ name }Svg)\`
${ getStyledContent() }
\`;
`;
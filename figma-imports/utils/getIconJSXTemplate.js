const getGenFileCaption = require( "./getGenFileCaption" );
const getComponentFunctions = require( "./getComponentFunctions" );
const getStyledContent = require( "./getStyledContent.js" );
const { camelCase } = require( "change-case" );

/**
 * get icon component template
 *
 * @param {string} name
 * @param svgString
 * @return {function(): string}
 */
module.exports = ( name, svgString ) => `
${ getGenFileCaption() }
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import {ReactComponent as ${ name }Svg} from './${ name }.svg'

export const ${ name } = (props) => {
    
    ${ getComponentFunctions( camelCase( name ) ) }
  
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
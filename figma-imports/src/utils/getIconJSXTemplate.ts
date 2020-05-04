import { getGenFileCaptions } from "./getGenFileCaption.js";
import { getComponentFunctions } from "./getComponentFunctions";
import { getStyledContent } from "./getStyledContent.js";

import { camelCase } from "change-case";


/**
 * get icon component template
 *
 * @param {string} name
 * @param svgString
 * @return {function(): string}
 */
export const getIconJSXTemplate = ( name: string, svgString: string[] ) => `
${ getGenFileCaptions() }
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
${ getStyledContent(name) }
\`;
`;
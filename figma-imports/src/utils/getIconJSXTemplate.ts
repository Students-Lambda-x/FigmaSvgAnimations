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
export const getIconJSXTemplate = ( name: string, svgString: string, animations: NodeAnimations  ) => `
${ getGenFileCaptions() }
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const ${ name } = (props) => {
    
    ${ getComponentFunctions( camelCase( name ), animations ) }
  
  return (
    <${ name }Component length={length}>
      ${ svgString }
    </${ name }Component>
    )
};



const ${ name }Component = styled.svg\`
${ getStyledContent( name ) }
\`;
`;
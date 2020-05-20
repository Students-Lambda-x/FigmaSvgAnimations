import { getGenFileCaptions } from "./getGenFileCaption.js";
import ComponentContents from "./getComponentContents";

import { camelCase } from "change-case";


/**
 * get icon component template
 *
 * @param {string} name
 * @param svgString
 * @return {function(): string}
 */
export const getIconJSXTemplate = ( name: string, svgString: string,
                                    animations: AnimationList ) => {
  
  const componentContentsCollector = new ComponentContents( name, animations );
  const props = componentContentsCollector.getComponentProps();
  let newProps = "";
  
  if ( props ) {
    Object.keys( props ).forEach( ( prop: string ) => newProps +=
      prop.toString() + "={" + props[ prop ].toString() + "}" );
  }
  
  return `

${ getGenFileCaptions() }
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const ${ name } = (props) => {
    
    ${ componentContentsCollector.getFunctions() ?
    componentContentsCollector.getFunctions() : "" }
  
  return (
    <${ name }Component ${ newProps.toString() }>
      ${ svgString }
    </${ name }Component>
    )
};



const ${ name }Component = styled.div\`
${ componentContentsCollector.getStyledContent() ?
    componentContentsCollector.getStyledContent() : "" }
\`;
`;
};
const getGenFileCaption = require( "./getGenFileCaption" );

/**
 * get icon component template
 *
 * @param {string} name
 */
module.exports = ( name, svgString ) => `
${ getGenFileCaption() }
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {ReactComponent as ${ name }Svg} from './${ name }.svg'

export const ${ name } = (props) => {
    
    const [ length, setLength ] = useState( 0 );
    
    useEffect( () => {
    
      let el = document.querySelector( "#${ name }-dash-array" );
      
      if( el !== null ){
        if( el.tagName === "group" ){
          el = el.lastElementChild;
        }
        
        const elLength = el.getTotalLength();
        setLength( elLength );
    }
  }, [] );
  
  return (
    <${ name }Component length={length}/>
    )
};


const ${ name }Component = styled(${ name }Svg)\`
&& {
  height: $\{ props => props.height ? props.height : "300px" };
  width: $\{ props => props.width ? props.width : "300px" };

  .dash-array {
    fill: transparent;
    animation: dash 5s linear reverse;
    stroke-dasharray: $\{ props => props.length + ", " + props.length };
    }
    
    @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -$\{ props => props.length };
    }
  }
}
\`;
`;

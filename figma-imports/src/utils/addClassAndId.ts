import { camelCase, pascalCase } from "change-case";
import { animations } from "../animations";

export const addAnimationToSvg = ( animationList: AnimationList,
                                   svgElement: any,
                                   svgName: string ) => {
  
  if ( Array.isArray( svgElement ) ) {
    svgElement.forEach( el => {
      addAnimationToSvg( animationList, el, svgName );
    } );
  } else {
    let { $, svg, ...rest } = svgElement;
    if ( svg ) {
      $ = svg;
    }
    
    if ( $ ) {
      if ( $.id ) {
        const ids = $.id.split( " " );
        ids.forEach( ( id: string ) => {
          const idNoUnderscore = id.split( "_" )[ 0 ];
          if ( id && ( animations[ id ] ) ) {
            animations[ id ].addAttributesToSvg( svgElement,
              camelCase( svgName ), ids );
            
          } else if ( idNoUnderscore && animations[ idNoUnderscore ] ) {
            animations[ idNoUnderscore ].addAttributesToSvg( svgElement,
              camelCase( svgName ), ids );
          }
        } );
      }
      
      
      callAnimationOnKeys( $, animationList, svgName );
    }
    if ( rest ) {
      callAnimationOnKeys( rest, animationList, svgName );
    }
  }
  
  return svgElement;
  
};

const callAnimationOnKeys = ( el: any, classes: AnimationList,
                              svgName: string ) => {
  const keys = Object.keys( el );
  keys.forEach( key => {
    const next = el[ key ];
    if ( typeof next !== "string" ) {
      addAnimationToSvg( classes, el[ key ], svgName );
    } else {
      const newAttributeName = camelCase( key );
      const value = el[ key ];
      delete el[ key ];
      el[ newAttributeName ] = value;
    }
  } );
};



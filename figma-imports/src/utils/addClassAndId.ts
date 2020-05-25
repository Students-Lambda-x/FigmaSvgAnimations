import { camelCase } from "change-case";
import { animations } from "../animations";

export const addAnimationToSvg = ( animationList: AnimationList,
                                   svgElement: any,
                                   svgName: string,
                                   svgRootElement: any = null ) => {
  if ( svgRootElement === null ) {
    svgRootElement = svgElement;
  }
  
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
          if ( id && animations[ id ] ) {
            animations[ id ].addAttributesToSvg( svgElement, svgName,
              svgRootElement );
            
          } else {
            id = svgName + id;
          }
        } );
      }
      
      
      callAnimationOnKeys( $, animationList, svgName, svgRootElement );
    }
    if ( rest ) {
      callAnimationOnKeys( rest, animationList, svgName, svgRootElement );
    }
  }
  
  return svgElement;
  
};

const callAnimationOnKeys = ( el: any, classes: AnimationList,
                              svgName: string, svgRootEl: any ) => {
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



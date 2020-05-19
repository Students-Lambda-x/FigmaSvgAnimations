import { camelCase } from "change-case";


const dashArrayAttachAttributes = ( element: any, svgName: string ): any => {
  
  element.$.id = camelCase( svgName ) + "-dash-array";
  element.$.className = "dash-array";
  return element;
};

const animationObjects: Animations = { "dash-array": dashArrayAttachAttributes };

export const addAnimationToSvg = ( classes: NodeAnimations, svgElement: any,
                                   svgName: string ) => {
  
  if ( Array.isArray( svgElement ) ) {
    svgElement.forEach( el => {
      addAnimationToSvg( classes, el, svgName );
    } );
  } else {
    let { $, svg, ...rest } = svgElement;
    if ( svg ) {
      $ = svg;
    }
    
    if ( $ ) {
      if ( $.id && animationObjects[ $.id ] ) {
        animationObjects[ $.id ]( svgElement, svgName );
        
      }
      callAnimationOnKeys( $, classes, svgName );
    }
    if ( rest ) {
      callAnimationOnKeys( rest, classes, svgName );
    }
  }
  
  return svgElement;
  
};

const callAnimationOnKeys = ( el: any, classes: NodeAnimations,
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



const { camelCase } = require( "change-case" );

const dashArrayAttachAttributes = ( element, svgName ) => {
  element.id = camelCase( svgName );
  element.className = "dash-array";
};

const animationObjects = { "dash-array": dashArrayAttachAttributes };

const addAnimationToSvg = ( classes, svgElement, svgName ) => {
  let { $,svg, ...rest } = svgElement;
  if (svg){
    $ = svg;
  }
  if( $.id && animationObjects[ $.id ] ){
    animationObjects[ $.is ]( svgElement, svgName );
  }
  const keys = Object.keys( $ );
  keys.forEach( key => {
    addAnimationToSvg( classes, rest[ key ] );
  } );
};

const renameAttributes = ( attributes ) => {

};

module.exports = {
  addAnimationToSvg,
};
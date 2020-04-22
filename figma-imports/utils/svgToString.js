const svgToString = ( svgElement ) => {
  const svgName = svgElement.name;
  if( svgElement.type === "root" ){
    svgElement = svgElement.children[ 0 ];
  }
  let str = toString( svgElement, svgName );
  return str;
};

const toString = ( element, svgName ) => {
  let str = `<${ element.tagName }`;
  Object.keys( element.properties ).forEach( key => {
    if( key === "height" || key === "width" ){
      str += ` ${ key }="100%"`;
    }else if( key === "id" ){
      
      if( element.properties[ key ] === "dash-array" ){
        str += ` ${ key }="${ svgName + "-" + element.properties[ key ] }"`;
        str += ` class="dash-array"`;
      }else{
        str += ` ${ key }="${ element.properties[ key ] }"`;
      }
      
    }else if( key === "d" ){
      let propArray = element.properties[ "d" ].split( " " );
      let number = 1;
      str += ` d="`;
      while( propArray.length > 0 ){
        let word = propArray.shift();
        if( number % 20 === 0 ){
          str += `${ word } \n`;
        }else{
          str += `${ word } `;
        }
        number += 1;
      }
      str += `"`;
    }else{
      str += ` ${ key }="${ element.properties[ key ] }"`;
    }
  } );
  str += "> \n";
  if( element.children.length > 0 ){
    element.children.forEach( child => {
      str += toString( child, svgName );
    } );
  }
  str += `</${ element.tagName }> \n`;
  return str;
};

module.exports = {
  svgToString,
};
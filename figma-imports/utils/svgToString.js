const { camelCase } = require( "change-case" );

const svgToString = ( svgElement ) => {
  const svgName = svgElement.name;
  if( svgElement.type === "root" ){
    svgElement = svgElement.children[ 0 ];
  }
  let svgArray = [];
  toString( svgElement, svgName, svgArray );
  return svgArray;
};

const toString = ( element, svgName, svgArray, index = 3 ) => {
  let str = getElementStartTag( element, index );
  str += getElementProperties( element.properties, svgName, index );
  str += "> ";
  svgArray.push( str );
  
  if( element.children.length > 0 ){
    element.children.forEach( child => {
      str += toString( child, svgName, svgArray, index + 1 );
    } );
  }
  str = "" + getTabIndents( index );
  str += `</${ element.tagName }> `;
  svgArray.push( str );
  str = "";
};

const getElementProperties = ( properties, svgName, index ) => {
  let strArr = [];
  let multipleLines = false;
  Object.keys( properties ).forEach( key => {
    if( key === "height" || key === "width" ){
      strArr.push( joinKeyValue( key, "100%" ) );
    }else if( key === "id" ){
      
      if( properties[ key ] === "dash-array" ){
        strArr.push( joinKeyValue( key,
          svgName.toLowerCase() + "-" + properties[ key ],
        ) );
        strArr.push( joinKeyValue( "className", "dash-array" ) );
      }else{
        strArr.push( joinKeyValue( key, properties[ key ] ) );
      }
      
    }else if( key === "d" ){
      multipleLines = true;
      let propArray = properties[ "d" ].split( " " );
      
      let number = 1;
      let str = `"`;
      const dataArray = [];
      while( propArray.length > 0 ){
        let word = propArray.pop();
        
        if( number % 20 === 0 ){
          str = `${ getTabIndents( index ) } ${ word } ${ str } \ \n`;
          dataArray.unshift( str );
          str = "";
        }else{
          str = `${ word }  ${ str }`;
        }
        number += 1;
      }
      
      str = ` d="` + str + " \ \n";
      dataArray.unshift( str );
      str = getTabIndents( index );
      strArr.push( dataArray.join( "" ) );
    }else{
      strArr.push( ( multipleLines ? getTabIndents( index ) : "" ) +
        joinKeyValue( key, properties[ key ] ) );
      multipleLines = false;
    }
  } );
  
  return strArr.join( " " );
};

const joinKeyValue = ( key, value ) => {
  return ` ${ camelCase( key ) }="${ value }"`;
};

const stripHyphens = ( propertyName ) => {
  return camelCase( propertyName );
};

const getElementStartTag = ( element, index ) => {
  let str = "";
  if( element.tagName !== "svg" ){
    str += getTabIndents( index );
  }
  str += `<${ element.tagName }`;
  return str;
};

const getTabIndents = ( number ) => {
  let str = "";
  for( let i = 0; i < number; i++ ){
    str += "\t";
  }
  return str;
};

module.exports = {
  svgToString,
};
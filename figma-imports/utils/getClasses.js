const events = [ "load" ];
const animations = [ "load-dash" ];
const getClasses = ( node, nodeAnimations = {} ) => {
  const name = node.name.split( " " );
  let events = [];
  let animationsArr = [];
  
  name.forEach( item => {
    if( events.includes( item ) ){
      events.push( item );
      node[ "className" ] = node.className ? node.className + item : item;
    }else if( animations.includes( item ) ){
        animations.push( item );
        node[ "className" ] = node.className ? node.className + item : item;
      }
  } );
  
  nodeAnimations[ node.name ] = {
    animationsArr: animationsArr, events: events,
  };
  
  if( node.children ){
    node.children.map( child => {
      getClasses( child, nodeAnimations );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

module.exports = {
  getClasses,
};
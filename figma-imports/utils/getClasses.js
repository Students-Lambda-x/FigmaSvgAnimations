const events = [ "load" ];
const animations = [ "dash-array" ];
const getClasses = ( node, nodeAnimations = {} ) => {
  const name = node.name.split( " " );
  
  let eventsArr = [];
  let animationsArr = [];
  
  name.forEach( item => {
    if( events.includes( item ) ){
      eventsArr.push( item );
    }else if( animations.includes( item ) ){
      animationsArr.push( item );
    }
  } );
  
  nodeAnimations[node.name] = {events: eventsArr, animation: animationsArr}
  
  if( node.children ){
    node.children.map( child => {
      nodeAnimations = getClasses( child, nodeAnimations );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

module.exports = {
  getClasses,
};
const events = [ "load" ];
const animations = [ "dash-array" ];
const getClasses = ( node, element, nodeAnimations = {} ) => {
  const name = node.name.split( " " );
  
  let eventsArr = [];
  let animationsArr = [];
  
  name.forEach( item => {
    if( events.includes( item ) ){
      eventsArr.push( item );
      element.properties[ "class" ] = element.properties.class ?
        element.properties.class + " " + item : item;
    }else if( animations.includes( item ) ){
      animations.push( item );
      element.properties[ "class" ] = element.properties.class ?
        element.properties.class + " " + item : item;
    }
  } );
  
  nodeAnimations[ node.id ] = {
    animationsArr: animationsArr, events: events,
  };
  
  if( node.children ){
    node.children.map( ( child, index ) => {
      nodeAnimations = getClasses( child,
        element.children[ index ],
        nodeAnimations,
      );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

module.exports = {
  getClasses,
};
const events = [ "load" ];
const animations = [ "dash-array" ];

export const getClasses = ( node, nodeAnimations = {} ) => {
  const name: string[] = node.name.split( " " );
  
  let eventsArr: string[] = [];
  let animationsArr: string[] = [];
  
  name.forEach( item => {
    if( events.includes( item ) ){
      eventsArr.push( item );
    }else if( animations.includes( item ) ){
      animationsArr.push( item );
    }
  } );
  
  nodeAnimations[node.name] = {events: eventsArr, animation: animationsArr}
  
  if( node.children ){
    node.children.map( (child: node) => {
      nodeAnimations = getClasses( child, nodeAnimations );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

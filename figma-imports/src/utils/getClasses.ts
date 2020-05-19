const events = [ "load" ];
const animations = [ "dash-array" ];

export const getClasses = ( node: SceneNode,
                            nodeAnimations: NodeAnimations = {} ) => {
  const name: string[] = node.name.split( " " );
  
  let eventsArr: string[] = [];
  let animationsArr: string[] = [];
  
  name.forEach( item => {
    if ( events.includes( item ) ) {
      eventsArr.push( item );
    } else if ( animations.includes( item ) ) {
      animationsArr.push( item );
    }
  } );
  
  nodeAnimations[ node.name ] = { events: eventsArr, animation: animationsArr };
  
  if ( "children" in node ) {
    node.children.map( ( child: SceneNode ) => {
      nodeAnimations = getClasses( child, nodeAnimations );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

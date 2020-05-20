import { getAllAnimationsTypes, getAllEvents } from "../animations";

const events: string[] = getAllEvents();
const animations: string[] = getAllAnimationsTypes();

export const getClasses = ( node: SceneNode,
                            nodeAnimations: AnimationList = {} ) => {
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
  if ( eventsArr.length > 0 ) {
    eventsArr.forEach( event => {
      if ( nodeAnimations[ event ] ) {
        nodeAnimations[ event ] =
          [ ...nodeAnimations[ event ], ...animationsArr ];
      } else {
        nodeAnimations[ event ] = [ ...animationsArr ];
      }
      
    } );
    
  }
  
  if ( "children" in node ) {
    node.children.map( ( child: SceneNode ) => {
      nodeAnimations = getClasses( child, nodeAnimations );
      return child;
    } );
  }
  
  return nodeAnimations;
  
};

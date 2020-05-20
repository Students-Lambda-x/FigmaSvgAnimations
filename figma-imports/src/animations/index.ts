import DashArray from "./dashArray";
import FadeIn from "./fadeIn";

export const animations: Animations = {
  "dash-array": new DashArray(),
  "fade-in": new FadeIn(),
};

export const getAllAnimationTypesByEvent = () => {
  
  const events: { [ event: string ]: string[] } = {};
  
  Object.keys( animations ).forEach( ( key: string ) => {
    const animation = animations[ key ];
    const animationTypes = animation.getAnimations();
    Object.keys( animationTypes ).forEach( ( event => {
      events[ event ] = animationTypes[ event ];
    } ) );
  } );
  
  return events;
};

export const getAllEvents = () => {
  const events: string[] = [];
  
  Object.keys( animations ).forEach( ( key: string ) => {
    const animation = animations[ key ];
    Object.keys( animation.getAnimations() ).forEach( ( key: string ) => {
      events.push( key );
    } );
  } );
  
  return events;
};

export const getAllAnimationsTypes = () => {
  const animationTypes: string[] = [];
  
  Object.keys( animations ).forEach( ( key: string ) => {
    const animation = animations[ key ];
    const animationEvents = animation.getAnimations();
    Object.keys( animationEvents ).forEach( ( key: string ) => {
      const animationToAdd: string[] = animationEvents[ key ];
      animationToAdd.forEach( type => {
        animationTypes.push( type );
      } );
    } );
  } );
  
  return animationTypes;
};
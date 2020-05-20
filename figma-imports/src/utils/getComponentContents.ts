import {
  animations, getAllAnimationTypesByEvent,
} from "../animations";

export default class ComponentContents {
  private readonly name: string;
  private readonly nodeAnimations: AnimationList;
  private contents: { styledContent: string, functions: string, componentProps: {} } | null;
  
  
  constructor( name: string,
               nodeAnimations: AnimationList ) {
    this.name = name;
    this.nodeAnimations = nodeAnimations;
    this.contents = null;
  }
  
  checkContents() {
    if ( !this.contents ) {
      this.contents = getComponentContents( this.name, this.nodeAnimations );
    }
  }
  
  getFunctions() {
    this.checkContents();
    if ( this.contents ) {
      return this.contents.functions;
    }
    
  }
  
  getStyledContent() {
    this.checkContents();
    if ( this.contents ) {
      return this.contents.styledContent;
    }
  };
  
  getComponentProps() {
    this.checkContents();
    if ( this.contents ) {
      return this.contents.componentProps;
    }
  }
}

const getComponentContents = ( name: string,
                               nodeAnimations: AnimationList ): { styledContent: string, functions: string, componentProps: {} } | null => {
  
  let content = null;
  
  
  const events: AnimationList = getAllAnimationTypesByEvent();
  Object.keys( nodeAnimations ).forEach( ( key: string ) => {
    if ( key in events ) {
      const animationTypes = events[ key ];
      
      animationTypes.forEach( ( type: string ) => {
        if ( animations[ type ] ) {
          const value = animations[ type ];
          content = value.getComponentContents( key, type, name );
          
          if ( content === null ) {
            throw new Error(
              `${ type } did not return a value for getComponentFunctions.` );
          }
          
        }
      } );
      
    }
    
  } );
  return content;
};
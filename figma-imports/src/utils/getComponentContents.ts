import {
  animations, getAllAnimationTypesByEvent,
} from "../animations";
import { camelCase } from "change-case";


export default class ComponentContents implements ComponentContents {
  private readonly name: string;
  private readonly nodeAnimations: AnimationList;
  private contents: { styledContent: string[], functions: string[], componentProps: {}[], svgProps: {}[] } | null;
  
  
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
    
    if ( this.hasFunctions() ) {
      let functionStr = "";
      let first = true;
      this.contents.functions.forEach( ( animtionFuncions ) => {
        functionStr += animtionFuncions.toString();
        if ( !first ) {
          first = false;
        } else {
          functionStr += "\n\n";
        }
      } );
      
      return functionStr;
    } else {
      throw new Error( "Called getFunctions and the component contents" +
        " doesn't have any to return. " );
    }
    
  }
  
  hasFunctions() {
    this.checkContents();
    if ( this.contents ) {
      if ( this.contents.functions.length > 0 ) {
        return true;
      }
    }
    return false;
  }
  
  getStyledContent() {
    
    this.checkContents();
    if ( this.contents ) {
      if ( this.contents.styledContent.length > 0 ) {
        let styledContentString = "";
        let first = true;
        this.contents.styledContent.forEach( animationContent => {
          if ( first ) {
            styledContentString += animationContent;
            first = false;
          } else {
            styledContentString += "\n " + animationContent;
          }
          
        } );
        return styledContentString;
      }
      return false;
    }
  };
  
  getComponentProps(): string | false {
    
    this.checkContents();
    if ( this.contents ) {
      
      if ( this.contents.componentProps.length > 0 ) {
        let propString = "";
        this.contents.componentProps.forEach( ( animationContent ) => {
          Object.keys( animationContent )
            .forEach( ( prop: string ) => {
              propString +=
                `${ prop.toString() }={${ animationContent[ prop ].toString() }} `;
            } );
        } );
        
        
        return propString;
      }
    }
    return false;
  }
  
  getSvgProps(): string | false {
    this.checkContents();
    if ( this.contents ) {
      if ( this.contents.svgProps.length > 0 ) {
        let propSting = "";
        this.contents.svgProps.forEach(
          ( animationSvgProps: { [ name: string ]: string } ) => {
            Object.keys( animationSvgProps ).forEach( key => {
              propSting += key + "={" + animationSvgProps[ key ] + "} ";
            } );
          } );
        
        return propSting;
      }
    }
    return false;
  }
  
}

const getComponentContents = ( name: string,
                               nodeAnimations: AnimationList ): { styledContent: string[], functions: string[], componentProps: {}[], svgProps: {}[] } | null => {
  
  let content = null;
  
  
  const events: AnimationList = getAllAnimationTypesByEvent();
  const componentContent = {
    styledContent: [], functions: [], componentProps: [], svgProps: [],
  };
  Object.keys( nodeAnimations ).forEach( ( key: string ) => {
    if ( key in events ) {
      const animationTypes = events[ key ];
      
      animationTypes.forEach( ( type: string ) => {
        if ( animations[ type ] ) {
          const value = animations[ type ];
          content = value.getComponentContents( key, type, camelCase( name ) );
          
          if ( content === null ) {
            throw new Error(
              `${ type } did not return a value for getComponentFunctions.` );
          } else {
            Object.keys( content ).forEach( key => {
              componentContent[ key ] =
                [ ...componentContent[ key ], content[ key ] ];
            } );
            
          }
          
        }
      } );
      
    }
    
  } );
  return componentContent;
};
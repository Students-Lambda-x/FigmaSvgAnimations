export const getStyledContent = ( name: string, event: string ) => `
  .${ name }-fade-in{
    opacity: \${ props => props.hovered ? 1 : 0 };
    transition: opacity 1s ease;

  }
`;

const getFadeInFunctions = ( svgName: string, event: string ) => {
  if ( event === "hover" ) {
    return `
    const [ hovered, setHovered ] = useState( false );
    
    const mouseEnter = () => {
    if( !hovered ){
      setHovered( true );
      }
    };
  
    const mouseLeave = () => {
      if( hovered ){
        setHovered( false );
      }
    };
    `;
  }
  return "";
};


const componentFunctions: ComponentFunctions = {
  [ "load" ]: {
    [ "fade-in" ]: getFadeInFunctions,
  },
  [ "hover" ]: {
    [ "fade-in" ]: getFadeInFunctions,
  },
};

export default class FadeIn implements SvgAnimation {
  private readonly name: string = "fade-in";
  
  getName() {
    return self.name;
  }
  
  getAnimations() {
    return { hover: [ "fade-in" ] };
  }
  
  getComponentContents( event: string, animation: string, svgName: string ) {
    const functions = componentFunctions[ event ][ animation ]( svgName,
      event );
    const styledContent = getStyledContent( svgName, event );
    const componentProps = {
      "hovered": "hovered", "onMouseLeave": "mouseLeave",
    };
    const svgProps = { "onMouseEnter": "mouseEnter" };
    return { styledContent, functions, componentProps, svgProps };
  }
  
  addAttributesToSvg( element: any, svgName: string, svgRootEl: any ): any {
    if ( !svgRootEl.hasAttribute( "onMouseEnter" ) ) {
      console.log( svgRootEl );
    }
    element.$.className = `${ svgName }-fade-in`;
    return element;
  }

}




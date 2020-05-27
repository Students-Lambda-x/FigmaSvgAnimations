export const getStyledContent = ( name: string, event: string ) => `
  .${ name }-hover-fade-in{
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
  
  addAttributesToSvg( element: any, svgName: string,
                      otherPartsOfId: string[] ): any {
    if ( otherPartsOfId.includes( "hover" ) ) {
      element.$.className = `${ svgName }-hover-fade-in`;
      return element;
    }
    
  }
  
}




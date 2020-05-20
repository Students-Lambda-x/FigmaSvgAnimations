export const getStyledContent = ( name: string, event: string ) => `
  .${ name }-fade-in{
    opacity: 0;
    :hover {
      opacity: 1;
    }
  }
`;

const getFadeInFunctions = ( svgName: string, event: string ) => {
  if ( event === "hover" ) {
    return ``;
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
    const componentProps = { "hovered": "hovered" };
    return { styledContent, functions, componentProps };
  }
  
  addAttributesToSvg( element: any, svgName: string ): any {
    element.$.className = `${ svgName }-fade-in`;
    return element;
  }
}




import { pascalCase } from "change-case";

export const getStyledContent = ( name: string ) => `
&& {
  height: $\{ props => props.height ? props.height : "100%" };
  width: $\{ props => props.width ? props.width : "100%" };

  .${ name }-dash-array {
    fill: transparent;
    animation: dash 5s linear reverse;
    stroke-dasharray: $\{ props => props.length + ", " + props.length };
    }
    
    @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -$\{ props => props.length };
    }
  }
}

`;

const getLoadDashArray = ( svgName: string ) => {
  return `
    const [ ${ svgName }Length, setLength ] = useState( 0 );
    
    useEffect( () => {
    
      let el = document.querySelector( "#${ svgName }-dash-array" );
      
      if( el !== null ){
        if( el.tagName === "group" ){
          el = el.lastElementChild;
        }
        
        const elLength = el.getTotalLength();
        setLength( elLength );
    }
  }, [] );
`;
};

type ComponentFunctions = {
  [ event: string ]: {
    [ animation: string ]: ( svgName: string ) => string
  }
}

const componentFunctions: ComponentFunctions = {
  [ "load" ]: {
    [ "dash-array" ]: getLoadDashArray,
  },
};

export default class DashArray implements SvgAnimation {
  private readonly name: string = "dash-array";
  
  getName() {
    return self.name;
  }
  
  getAnimations() {
    return { load: [ "dash-array" ] };
  }
  
  getComponentContents( event: string, animation: string, svgName: string ) {
    const functions = componentFunctions[ event ][ animation ](
      pascalCase( svgName ) );
    const styledContent = getStyledContent( svgName );
    const componentProps = { [ "length" ]: `${ svgName }Length` };
    return { styledContent, functions, componentProps };
  }
  
  addAttributesToSvg( element: any, svgName: string ): any {
    element.$.id = pascalCase( svgName ) + "-dash-array";
    element.$.className = `${ svgName }-dash-array`;
    return element;
  }
}




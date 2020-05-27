import { pascalCase } from "change-case";

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
  private numberOfDashArrays: { [ svgName: string ]: number } = {};
  
  getName() {
    return self.name;
  }
  
  getAnimations() {
    return { load: [ "dash-array" ] };
  }
  
  getComponentContents( event: string, animation: string, svgName: string ) {
    const functions = this.getComponentFunctions( event, animation, svgName );
    const styledContent = this.getStyledContent( event, animation, svgName );
    const componentProps = { [ "length" ]: `${ svgName }Length` };
    return { styledContent, functions, componentProps };
  }
  
  addAttributesToSvg( element: any, svgName: string ): any {
    let first = false;
    if ( this.numberOfDashArrays[ svgName ] ) {
      this.numberOfDashArrays[ svgName ] += 1;
    } else {
      first = true;
      this.numberOfDashArrays[ svgName ] = 1;
    }
    
    element.$.id = `${ pascalCase(
      svgName ) }-dash-array-${ this.numberOfDashArrays[ svgName ] }`;
    element.$.className =
      `${ svgName }-dash-array-${ this.numberOfDashArrays[ svgName ] }`;
    
    
    return element;
  }
  
  getComponentFunctions( event: string, animation: string,
                         svgName: string ): string {
    return `
    const [${ svgName }Length, setLengths ] = useState(0);
    
    useEffect(() => {
      const lengths = [];
      for(let i = 0; i < ${ this.numberOfDashArrays[ svgName ] }; i++){
        let el = document.querySelector(\`#${ pascalCase( svgName ) }-dash-array-\${i + 1}\`);
        
        if(el){
          if(el.tagName === "g"){
            el = el.lastElementChild;
          }
          
          const elLength = el.getTotalLength();
          lengths.push(elLength);
        }
      }
      setLengths(lengths);
    }, []);
`;
    
  }
  
  getStyledContent( event: string, animation: string,
                    svgName: string ): string {
    let str = `
&& {
  height: $\{ props => props.height ? props.height : "100%" };
  width: $\{ props => props.width ? props.width : "100%" };
`;
    for ( let i = 0; i < this.numberOfDashArrays[ svgName ]; i++ ) {
      str += this.getStyledClassContent( i + 1, svgName );
    }
    str += `
  };
  `;
    return str;
  }
  
  getStyledClassContent( num: number, name: string ): string {
    return `
  .${ name }-dash-array-${ num } {
    fill: transparent;
    animation: ${ name }-dash-${ num } 5s linear reverse;
    stroke-dasharray: $\{ props => \`\${ props.length[${ num -
    1 }] }px \${ props.length[${ num - 1 }] }px\`};
  }
  
  @keyframes ${ name }-dash-${ num } {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -$\{ props => \`\${ props.length[${ num - 1 }] }px\` };
    }
  }
  `;
  }
  
}




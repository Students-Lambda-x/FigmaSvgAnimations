const getLoadDashArray = ( svgName: string ) => {
  return `
    const [ length, setLength ] = useState( 0 );
    
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
  getAnimationEvents(){
    return ['load']
  }
  
  getAnimationNames(){
    return ['dash-array']
  }

  getComponentFunctions( event: string, animation: string, svgName: string ) {
    return componentFunctions[ event ][ animation ]( svgName );
  }
}



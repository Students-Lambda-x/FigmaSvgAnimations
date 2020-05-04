export const getComponentFunctions = ( name: string ) => `
    const [ length, setLength ] = useState( 0 );
    
    useEffect( () => {
    
      let el = document.querySelector( "#${ name }-dash-array" );
      
      if( el !== null ){
        if( el.tagName === "group" ){
          el = el.lastElementChild;
        }
        
        const elLength = el.getTotalLength();
        setLength( elLength );
    }
  }, [] );
`;
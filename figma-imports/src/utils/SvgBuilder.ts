import xml2js, { Builder } from "xml2js";

export default class SvgBuilder implements SvgBuilder {
  private static svgBuilder: Builder;
  
  private static attributeNameProcessors: [] = [];
  private static attributeValueProcessors: [] = [];
  
  constructor() {
    SvgBuilder.createBuilder();
  }
  
  private static createBuilder() {
    SvgBuilder.svgBuilder = new xml2js.Builder( {
      attrNameProcessors: [ SvgBuilder.attrNameProcessors,
        ...SvgBuilder.attributeNameProcessors ],
      attrValueProcessors: [ SvgBuilder.attrValueProcessors,
        ...SvgBuilder.attributeValueProcessors ],
    } );
  }
  
  static addNameOrValueProcessors( typeOfProcessors: TypesOfProcesses,
                                   processors: [] ) {
    
    let addedProcessors = false;
    if ( typeOfProcessors === "attributeName" ) {
      SvgBuilder.attributeNameProcessors =
        [ ...SvgBuilder.attributeNameProcessors, ...processors ];
      addedProcessors = true;
    } else if ( typeOfProcessors === "attributeValue" ) {
      SvgBuilder.attributeValueProcessors =
        [ ...SvgBuilder.attributeValueProcessors, ...processors ];
      addedProcessors = true;
    }
    
    if ( addedProcessors ) {
      SvgBuilder.createBuilder();
    }
  }
  
  
  static buildSvg( svg: any ): string {
    return SvgBuilder.buildSvg( svg );
  }
  
  static attrNameProcessors( name: string ) {
    console.log( name );
    return name;
  }
  
  static attrValueProcessors( value: string, name: string ) {
    console.log( `${ name }: ${ value }` );
  }
  
  
}

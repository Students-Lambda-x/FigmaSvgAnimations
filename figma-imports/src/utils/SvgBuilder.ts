import xml2js, { Builder } from "xml2js";

export default class SvgBuilder implements SvgBuilder {
  private static svgBuilder: Builder;
  
  private static attributeNameProcessors: [] = [];
  private static attributeValueProcessors: [] = [];
  
  static checkBuilder() {
    if ( !SvgBuilder.svgBuilder ) {
      SvgBuilder.svgBuilder = new xml2js.Builder( {
        headless: true,
        renderOpts: { pretty: true, indent: "  " },
      } );
    }
  }
  
  static buildSvg( svg: any,
                   props: { [ propName: string ]: string } | false ): string {
    SvgBuilder.checkBuilder();
    let svgString = SvgBuilder.svgBuilder.buildObject( svg );
    if ( props ) {
      const indexOf = svgString.indexOf( "<svg " );
      const firstHalf = svgString.slice( indexOf, indexOf + 5 );
      const secondHalf = svgString.slice( indexOf + 5 );
      svgString = firstHalf + props + secondHalf;
    }
    return svgString;
  }
  
}


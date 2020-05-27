import xml2js, { Builder } from "xml2js";

interface SvgBuilder {
  buildSvg( svg: any ): string
  
  svgBuilder: Builder;
  
  attributeNameProcessor: [];
  
  addNameOrValueProcessors( typeOfProcessors: string, processors: [] ): void
  
  buildSvg( svg: any, svgProps: {[propName: string]: string} ): string;
  
  attrNameProcessors( name: string ): string;
  
  attrValueProcessors( value: string, name: string ): string;
  
}
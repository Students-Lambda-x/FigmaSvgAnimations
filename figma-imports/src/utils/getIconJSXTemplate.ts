import { getGenFileCaptions } from "./getGenFileCaption.js";
import ComponentContents from "./getComponentContents";
import SvgBuilder from "./SvgBuilder";
import { camelCase } from "change-case";

export class IconJsxTemplateGenerator implements IconJsxTemplateGenerator {
  private readonly name: string;
  private readonly svg: any;
  private parsedSvgString: string;
  private readonly animations: AnimationList;
  private componentContentCollector: ComponentContents;
  private template: string;
  
  constructor( name: string, svg: any, animations: AnimationList ) {
    this.name = name;
    this.svg = svg;
    this.animations = animations;
    this.componentContentCollector =
      new ComponentContents( this.name, animations );
  }
  
  generateTemplate() {
    this.generateImports();
    this.generateComponentNameAndExport();
    this.generateFunctions();
    this.generateReturn();
    this.generateStyledContent();
    
    return this.template;
  }
  
  private generateImports() {
    this.template = `import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

`;
  }
  
  private generateComponentNameAndExport() {
    this.template += `export const ${ this.name } = (props) => {`;
  }
  
  private generateFunctions(): void {
    if ( this.componentContentCollector.hasFunctions() ) {
      this.template += this.componentContentCollector.getFunctions();
    }
  }
  
  private generateReturn(): void {
    const props = this.componentContentCollector.getComponentProps();
    
    if ( props ) {
      this.template += `
    return (
    <${ this.name }Component ${ props.toString() }>
      `;
    } else {
      this.template += `
      return (
    <${ this.name }Component>
      `;
    }
    
    this.generateSvgString();
    
    this.template += `
    </${ this.name }Component>
        );
    };
    `;
    
  }
  
  private generateSvgString(): void {
    const svgProps = this.componentContentCollector.getSvgProps();
    this.parsedSvgString = SvgBuilder.buildSvg( this.svg, svgProps );
    this.template += this.parsedSvgString;
  }
  
  private generateStyledContent(): void {
    const styledContent = this.componentContentCollector.getStyledContent();
    if ( styledContent ) {
      this.template += `
const ${ this.name }Component = styled.div\`
    ${ this.componentContentCollector.getStyledContent() }
\`
`;
    }
    
  }
}

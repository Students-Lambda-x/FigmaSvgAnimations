import { getGenFileCaptions } from "./getGenFileCaption.js";
import ComponentContents from "./getComponentContents";
import SvgBuilder from "./SvgBuilder";
import { camelCase } from "change-case";

class IconJsxTemplateGenerator implements IconJsxTemplateGenerator {
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
      new ComponentContents( self.name, animations );
  }
  
  generateTemplate() {
    this.generateImports();
    this.generateComponentNameAndExport();
    this.generateFunctions();
    this.generateReturn();
  }
  
  generateImports() {
    this.template += `
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

    `;
  }
  
  generateComponentNameAndExport() {
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
    <${ this.name }Component ${ props.toString() }>`;
    } else {
      this.template += `
      return (
    <${ this.name }Component>`;
    }
    
    this.generateSvgString();
    
    this.template += `
    </${ name }Component>
  );
};
    `;
    
  }
  
  private generateSvgString(): void {
    this.parsedSvgString = SvgBuilder.buildSvg( this.svg );
    this.template += this.parsedSvgString;
  }
}

/**
 * get icon component template
 *
 * @param {string} name
 * @param svgString
 * @return {function(): string}
 */
export const getIconJSXTemplate = ( name: string, svgString: string,
                                    animations: AnimationList ) => {
    
    const componentContentsCollector = new ComponentContents( name, animations );
    const props = componentContentsCollector.getComponentProps();
    
    
    return `
  import;
  React;
, {
  useState;
,
  useEffect;
}

from;
"react";
import styled from "styled-components";

export const ${ name } =;
( props ) => {
  
  ${ componentContentsCollector.hasFunctions() ?
      componentContentsCollector.getFunctions() : "" }
  
  return (
    <${ name }Component ${ props.toString() }>
      ${ svgString }
      </${ name }Component>
  );
};


const ${ name }Component = styled.div\`
${ componentContentsCollector.getStyledContent() ?
      componentContentsCollector.getStyledContent() : "" }
\`;
`;
  }
;
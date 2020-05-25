import ComponentContents from "../utils/getComponentContents";

interface IconJsxTemplateGenerator {
  readonly name: string;
  readonly svg: any;
  parsedSvgString: string;
  readonly animations: AnimationList;
  componentContentCollector: ComponentContents;
  
  constructor( name: string, svg: any, animations: AnimationList ): void;
  
  generateTemplate(): string;
}
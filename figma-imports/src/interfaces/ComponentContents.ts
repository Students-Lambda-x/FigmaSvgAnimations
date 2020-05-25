import fadeIn from "../animations/fadeIn";

interface ComponentContents {
  readonly name: string;
  readonly nodeAnimations: AnimationList;
  contents: { styledContent: string[], functions: string[], componentProps: {}[], svgProps: {}[] } | null;
  
  constructor( name: string, nodeAnimations: AnimationList ): void;
  
  checkContents(): void;
  
  getFunctions(): string;
  
  hasFunctions(): boolean;
  
  getStyledContent(): string;
  
  getComponentProps(): string | false;
  
  getSvgProps(): string
}
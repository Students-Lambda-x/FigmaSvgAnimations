interface SvgAnimation {
  
  getName: () => string
  
  getAnimations: () => AnimationList
  
  getComponentContents: ( event: string, animation: string,
                          svgName: string ) => null |
    { styledContent?: string, functions?: string, componentProps?: {}, svgProps?: {} }
  
  addAttributesToSvg: ( element: any, svgName: string,
                        otherPartsOfId: string[] ) => any
  
}

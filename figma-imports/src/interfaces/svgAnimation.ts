interface SvgAnimation {
  getAnimationEvents: () => AnimationEvents
  getAnimationNames: () => AnimationNames
  getComponentFunctions: ( event: string, animation: string,
                           svgName: string ) => null | string
}


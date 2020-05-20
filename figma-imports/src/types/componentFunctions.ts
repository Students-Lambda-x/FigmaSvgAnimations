type ComponentFunctions = {
  [ event: string ]: {
    [ animation: string ]: ( svgName: string, event: string ) => string
  }
}
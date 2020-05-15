const envRequiredAttributes = ["FIGMA_TOKEN", "FILE_KEY", "FRAME_WITH_SVGS_ID"]


export const checkEnvFile = (): void => {
  const missingEnvAttributes: string[] = []
  
  envRequiredAttributes.forEach(att => {
    if (!process.env[att]){
      missingEnvAttributes.push(att)
    }
  })
  
  if (missingEnvAttributes.length > 0){
    console.log("You are missing the following required variables in your" +
      " .env file. Please check out the example .env file for reference.")
    
    missingEnvAttributes.forEach(att => {
      console.log(att);
    })
    throw new Error("missing required env variables")
  }
  
}
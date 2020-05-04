import fs from "fs";
import path from "path";

export function writeFile( fileContents: string | string[], fileName: string,
                           folderPath: null | string = null ) {
  if ( folderPath ) {
    fileName = path.resolve( folderPath, fileName );
  }
  return new Promise( ( resolve, reject ) => {
    fs.writeFile( fileName, fileContents, { encoding: "utf8" } , ( err ) => {
      if ( err ) {
        reject( err );
      }
      resolve();
    } );
  } );
}
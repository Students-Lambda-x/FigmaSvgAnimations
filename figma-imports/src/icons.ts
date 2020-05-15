import path from "path";
import fs from "fs";
import xml2js from "xml2js";
import { addAnimationToSvg } from "./utils/addClassAndId";
import { getClasses } from "./utils/getClasses";
import { writeFile } from "./utils/fileHelper";
import { api } from "./utils/api";
import { pascalCase } from "change-case";
import { exec } from "child_process";
import { getIconJSXTemplate } from "./utils/getIconJSXTemplate";
const { svgo } = require( "./utils" );

const svgParser = new xml2js.Parser();
const svgBuilder = new xml2js.Builder();

const IconsDir = path.resolve( __dirname, "../src/components/Icons" );

const getIconFolderPath = ( name: string ): string => path.resolve( IconsDir,
  pascalCase( name ),
);

/**
 * clear icons dir except Icon.jsx and Icon.css files
 *
 */
const clearIconsDir = (): void => {
  exec( `rm -rf ${ IconsDir } -v !(Icon.jsx) !(Icon.css)` );
};

/**
 * generate icon component
 * [iconName].jsx and [iconName].svg  files
 *
 * @param iconNode
 * @return {Promise<void>}
 */
const generateIcon = async( iconNode ) => {
  const iconUrl = await api.getSvgImageUrl( iconNode.id );
  
  const iconName = pascalCase( iconNode.name );
  const iconFolderPath = getIconFolderPath( iconName );
  
  if( !fs.existsSync( iconFolderPath ) ){
    fs.mkdirSync( iconFolderPath );
  }
  
  const { data: iconContent } = await api.getImageContent( iconUrl );
  let svg = await svgParser.parseStringPromise( iconContent );
  //svg.name = iconName;
  let animations = getClasses( iconNode );
  svg = addAnimationToSvg( animations, svg, iconName );
  const builtSvg = svgBuilder.buildObject( svg );
  let writeSvg;
  
  if( process.env.SVGO_OPTIMIZATION === "true" ){
    const { data: optimizedIconContent } = await svgo.optimize( iconContent );
    writeSvg = writeFile( optimizedIconContent,
      `${ iconName }.svg`,
      iconFolderPath,
    );
  }else{
    writeSvg = writeFile( builtSvg, `${ iconName }.svg`, iconFolderPath );
  }
  const nodeStuff = writeFile( JSON.stringify( iconNode, {}, 2 ),
    `${ iconName }.json`,
    iconFolderPath,
  );
  const iconJSXTemplate = getIconJSXTemplate( iconName, builtSvg );
  
  const iconJsx = writeFile( iconJSXTemplate,
    `${ iconName }.jsx`,
    iconFolderPath,
  );
  
  await Promise.all( [
    writeSvg, iconJsx, nodeStuff,
  ] );
  
  console.log( `${ iconName } was written success!` );
};

/**
 * generate icons components
 *
 * @param {[Object]} iconNodesArr - array of icon nodes from frame
 * @return {Promise<void>}
 */
const generateIcons = async( iconNodesArr ) => {
  iconNodesArr.forEach( node => {
    generateIcon( node );
  } );
};

/**
 * generate index.js with imports
 *
 * @param iconNodesArr - array of icon nodes from frame
 */
const generateImports = ( iconNodesArr ) => {
  const fileWithImportsPath = path.resolve( IconsDir, "index.js" );
  
  const importsContent = iconNodesArr
    .map( iconNode => {
      const iconName = pascalCase( iconNode.name );
      
      return `export * from './${ iconName }/${ iconName }';`;
    } )
    .join( "\n" );
  
  fs.writeFileSync( fileWithImportsPath, importsContent, { encoding: "utf8" } );
  
  console.log( `imports was written success!` );
};

/**
 *
 * @return {Promise<void>}
 */
const main = async() => {
  clearIconsDir();
  
  if (!process.env.FRAME_WITH_SVGS_ID){
    console.log("You must add the frame id of the svgs you want to add to" +
      " the .env file.");
    return;
  }
  
  const iconNodesArr = await api.getNodeChildren( process.env.FRAME_WITH_SVGS_ID );
  
  await Promise.all( [
    generateIcons( iconNodesArr ), generateImports( iconNodesArr ),
  ] );
};

module.exports = main;

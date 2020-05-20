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
import { svgo } from "./utils/svgo";

const svgParser = new xml2js.Parser();
const svgBuilder = new xml2js.Builder( { headless: true } );

const IconsDir = path.resolve( __dirname, "../../src/components/Icons" );

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
const generateIcon = async ( iconNode: SceneNode ) => {
  const iconUrl = await api.getSvgImageUrl( iconNode.id );
  
  const iconName = pascalCase( iconNode.name );
  const iconFolderPath = getIconFolderPath( iconName );
  
  if ( !fs.existsSync( iconFolderPath ) ) {
    fs.mkdirSync( iconFolderPath );
  }
  
  const { data: iconContent }: { data: string } = await api.getImageContent(
    iconUrl );
  let svg: any = await svgParser.parseStringPromise( iconContent );
  //svg.name = iconName;
  let animations: AnimationList = getClasses( iconNode );
  svg = addAnimationToSvg( animations, svg, iconName );
  const builtSvg: string = svgBuilder.buildObject( svg );
  let writeSvg: Promise<any>;
  
  if ( process.env.SVGO_OPTIMIZATION === "true" ) {
    const { data: optimizedIconContent } = await svgo.optimize( iconContent );
    writeSvg = writeFile( optimizedIconContent,
      `${ iconName }.svg`,
      iconFolderPath,
    );
  } else {
    writeSvg = writeFile( builtSvg, `${ iconName }.svg`, iconFolderPath );
  }
  
  const iconJSXTemplate = getIconJSXTemplate( iconName, builtSvg, animations );
  
  const iconJsx = writeFile( iconJSXTemplate,
    `${ iconName }.jsx`,
    iconFolderPath,
  );
  
  await Promise.all( [
    writeSvg, iconJsx,
  ] );
  
  console.log( `${ iconName } was written success!` );
};


/**
 * generate icons components
 *
 * @param {[Object]} iconNodesArr - array of icon nodes from frame
 * @return {Promise<void>}
 */
const generateIcons = async ( iconNodesArr: ReadonlyArray<SceneNode> ) => {
  iconNodesArr.forEach( node => {
    generateIcon( node );
  } );
};

/**
 * generate index.js with imports
 *
 * @param iconNodesArr - array of icon nodes from frame
 */
const generateImports = ( iconNodesArr: ReadonlyArray<SceneNode> ) => {
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
export const importSvgs = async () => {
  clearIconsDir();
  
  const iconNodesArr = await api.getNodeChildren(
    <string> process.env.FRAME_WITH_SVGS_ID );
  
  await Promise.all( [
    generateIcons( iconNodesArr ), generateImports( iconNodesArr ),
  ] );
};



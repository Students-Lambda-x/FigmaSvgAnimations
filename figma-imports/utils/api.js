const api = require( "axios" );

const headers = {
  "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN,
};

/**
 * api endpoint for files
 *
 */
const instanceFiles = api.create( {
  baseURL: `https://api.figma.com/v1/files/${ process.env.FILE_KEY }`, headers,
} );

/**
 * api endpoint for images
 *
 */
const instanceImages = api.create( {
  baseURL: `https://api.figma.com/v1/images/${ process.env.FILE_KEY }`, headers,
} );

/**
 * get Figma document info
 *
 * @return {Promise<Object>}
 */
const getDocument = async() => instanceFiles.get( "/" );

/**
 * get Figma node info
 *
 * @param {string} svgId
 * @return {Promise<Object>}
 */
const getNode = async( svgId ) => {
  return instanceFiles.get( `/nodes?ids=${ decodeURIComponent( svgId ) }` );
};

/**
 * get Figma node children
 *
 * @param {string} svgId
 * @return {Promise<[Object]>}
 */
const getNodeChildren = async( svgId ) => {
  const { data: { nodes } } = await instanceFiles.get( `/nodes?ids=${ decodeURIComponent(
    svgId ) }` );
  return nodes[ svgId ].document.children;
};

/**
 * get Svg image resource url
 *
 * @param {string} svgId
 * @return {Promise<string>}
 */
const getSvgImageUrl = async( svgId ) => {
  const { data: { images } } = await instanceImages.get( `/?ids=${ decodeURIComponent(
    svgId ) }&format=svg&svg_include_id=true&svg_simplify_stroke=false` );
  return images[ svgId ];
};

/**
 * get image content
 *
 * @param {string} url - image url
 * @return {Promise<Object>}
 */
const getImageContent = async( url ) => api.get( url );

module.exports = {
  getDocument, getNode, getNodeChildren, getSvgImageUrl, getImageContent,
};

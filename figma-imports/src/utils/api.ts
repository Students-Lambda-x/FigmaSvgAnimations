import axios, { AxiosInstance, AxiosResponse } from "axios";

const headers = {
  "X-FIGMA-TOKEN": process.env.FIGMA_TOKEN,
};

/**
 * api endpoint for files
 *
 */
const instanceFiles: AxiosInstance = axios.create( {
  baseURL: `https://api.figma.com/v1/files/${ process.env.FILE_KEY }`, headers,
} );

/**
 * api endpoint for images
 *
 */
const instanceImages: AxiosInstance = axios.create( {
  baseURL: `https://api.figma.com/v1/images/${ process.env.FILE_KEY }`, headers,
} );

/**
 * get Figma document info
 *
 * @return {Promise<Object>}
 */
const getDocument = async () => instanceFiles.get( "/" );

/**
 * get Figma node info
 *
 * @param {string} svgId
 * @return {Promise<Object>}
 */
const getNode = async ( svgId: string ) => {
  return instanceFiles.get( `/nodes?ids=${ decodeURIComponent( svgId ) }` );
};

/**
 * get Figma node children
 *
 * @param {string} svgId
 * @return {Promise<[Object]>}
 */
const getNodeChildren = async ( svgId: string ): Promise<ReadonlyArray<SceneNode>> => {
  const result: AxiosResponse<any> = await instanceFiles.get(
    `/nodes?ids=${ decodeURIComponent(
      svgId ) }` );
  const nodeList: NodeList = result.data.nodes;
  return nodeList[ svgId ].document.children;
};

/**
 * get Svg image resource url
 *
 * @param {string} svgId
 * @return {Promise<string>}
 */
const getSvgImageUrl = async ( svgId: string ) => {
  const { data: { images } } = await instanceImages.get(
    `/?ids=${ decodeURIComponent(
      svgId ) }&format=svg&svg_include_id=true&svg_simplify_stroke=false` );
  return images[ svgId ];
};

/**
 * get image content
 *
 * @param {string} url - image url
 * @return {Promise<Object>}
 */
const getImageContent = async ( url: string ) => axios.get( url );

export const api = {
  getDocument, getNode, getNodeChildren, getSvgImageUrl, getImageContent,
};

type NodeList = {
  [ id: string ]: {
    document: FrameNode
    components: {
      [ id: string ]: {
        key: string,
        name: string,
        description: string
      }
    }
    schemaVersion: number,
    styles: {
      [ id: string ]: {
        key: string,
        name: string,
        styleType: string,
        description: string
      }
    }
  }
}


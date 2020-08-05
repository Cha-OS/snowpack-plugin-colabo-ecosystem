import type { SnowpackPluginFactory } from "snowpack";

const plugin: SnowpackPluginFactory = () => {
  console.log("[@colabo/snowpack-plugin-colabo-ecosystem::transform] bootstrapping ...");
  return {
    name: "@colabo/snowpack-plugin-colabo-ecosystem",
    async transform({ fileExt, contents }) {
    // async transform({ fileExt, filePath, contents, isDev }) {
      // console.log("[@colabo/snowpack-plugin-colabo-ecosystem::transform] isDev: %s, fileExt: '%s', filePath: '%s'", isDev, fileExt, filePath);
      // we do not transform
      if([ '.html', '.css', '.png' ].indexOf(fileExt) >= 0) return null;

      if(['.js' ].indexOf(fileExt) >= 0){
        let contentsNew:string = `/* Welcome to Colabo Transformation: https://github.com/Cha-OS/snowpack-plugin-colabo-ecosystem ! */ \r\n ${contents}`;
         
        const searchColaboPuzzleRegExp = /[\"\'](\@colabo\-[^\"\']+)[\"\']/g;
        // const replaceWithColaboPrefix = '/COLABO_PUZZLES/@colabo-';
        const replaceWithColaboPrefix = '"/COLABO_PUZZLES/$1/index.js"';
        contentsNew = contentsNew.replace(searchColaboPuzzleRegExp, replaceWithColaboPrefix);
        // console.log("[@colabo/snowpack-plugin-colabo-ecosystem::transform] transformed: contentsNew: %s", contentsNew);
        return contentsNew;
      }
      
      // console.log("[@colabo/snowpack-plugin-colabo-ecosystem::transform] contents: %s", contents);
      return null;

    }
  };
};

export default plugin;

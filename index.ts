/**
 * Replaces all local imports to use the '.js' extension.
 * 
 * @example
 *  import Default from "no-change";
 *  import { func } from "./local/function";
 * 
 *  Turns into:
 *  import Default from "no-change";
 *  import { func } from './local/function.js';
 * @param jsContents JavaScript program
 */
// TODO: Use grammar instead, i.e. https://gist.github.com/rbuckton/0d8c1f1c607f52f5ae37#ImportDeclaration
export default (jsContents: Buffer | string) => 
    jsContents.toString().replace(
        /(\s*import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|))["'](\..*?)['"]([\s]*?;?)/g,
         (_, beforeImport, moduleStr, afterImport) =>
            beforeImport
            + `'${moduleStr}.js'`
            + afterImport)

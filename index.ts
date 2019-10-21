/**
 * Replaces all local imports to use the '.js' extension.
 * 
 * @example
 *  import Default from "no-change";
 *  import { func } from "./local/function";
 * 
 *  Turns into:
 *  import Default from "no-change";
 *  import { func } from "./local/function.js";
 * @param jsContents JavaScript program
 */
export default function (jsContents: Buffer) {
    let fixedContents = jsContents.toString('utf-8')
    return fixedContents
}

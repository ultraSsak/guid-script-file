import { v4 as uuidv4 } from 'uuid';
import * as fs from "fs";
const guid = uuidv4();
console.log("generated guid:",guid);

// grab actual date
var rightNow = new Date();
// extract year/month/day
var res = rightNow.toISOString().slice(0,10).replace(/-/g,"");
// generate file name as required
const fileName = "v" + res + "-0-" + guid.split('-')[0] +".sql"
console.log("generated file:", fileName);

// file header
const userName = "<user>";
const issue = "<jira-issue>";
let header = `/*${issue};${userName};${guid}*/`
// create file on disk, with header and "no script" body
fs.writeFile(fileName, header + "\r\n--no-script", (err) => { if(err) console.error(err)} );

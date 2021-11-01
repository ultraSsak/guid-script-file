"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var fs = require("fs");
var guid = (0, uuid_1.v4)();
console.log("generated guid:", guid);
// grab actual date
var rightNow = new Date();
// extract year/month/day
var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
// generate file name as required
var fileName = "v" + res + "-0-" + guid.split('-')[0] + ".sql";
console.log("generated file:", fileName);
// file header
var userName = "<user>";
var issue = "<jira-issue>";
var header = "/*" + issue + ";" + userName + ";" + guid + "*/";
// create file on disk, with header and "no script" body
fs.writeFile(fileName, header + "\r\n--no-script", function (err) { if (err)
    console.error(err); });

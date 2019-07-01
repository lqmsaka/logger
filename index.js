'use strict';

const colors = require("colors");

var level = 3;

function getProgramPosition(){
	var temp = Error().stack.split("\n");
	var index, index2, time;
	/*for(var i in temp){
		if(temp[i].indexOf("Module._compile")>0){
			temp = temp[i-1];
			index = temp.indexOf("(");
			return `[${temp.substring(index+1,temp.length-1)}]`;
		}
		else if(temp[i].indexOf("Object.log")>0){
			temp = temp[++i];	//直接i+1是拼字符串= =b
			index = temp.lastIndexOf("\\");
			index2 = temp.indexOf("(");
			time = new Date().toLocaleString();
			if(index>0)
				return [`[${time}]`.red, `[${temp.substring(index+1,temp.length-1)}]`.blue, `[${temp.substring(7, index2-1)}]`.green];
			else
				return [`[${time}]`.red, `[${temp.substring(7)}]`.green];
		}
	}*/
	if(temp[3]){
		temp = temp[3];
		index = temp.lastIndexOf("\\");
		index2 = temp.indexOf("(");
		time = new Date().toLocaleString();
		if(index>0)
			return [`[${time}]`.red, `[${temp.substring(index+1,temp.length-1)}]`.blue, `[${temp.substring(7, index2-1)}]`.green];
		else
			return [`[${time}]`.red, `[${temp.substring(7)}]`.green];
	}
	//return Error();
	//return `[${temp.substring(temp.lastIndexOf("\\") + 1, temp.lastIndexOf(':'))}]`;
}
//console.log(getProgramPosition());


function err(){
	if(level>0)
		console.log(...getProgramPosition(), ...arguments);
}
//err("err");

function log(){
	if(level>2)
		console.log(...getProgramPosition(), ...arguments);
}
//log("log");



module.exports = {
  err,
  log,
  level,
};
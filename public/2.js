"use strict"

// Асинхронные функции
function readConfig (name, callback) {
	setTimeout(() => {
		console.log('(1) config from ' + name + ' loaded')
		callback()
	}, Math.floor(Math.random() * 1000))
}


function doQuery (statement, callback) {
	setTimeout(() => {
		console.log('(2) SQL query executed: ' + statement)
		callback()
	}, Math.floor(Math.random() * 1000))
}


function httpGet (url, callback) {
	setTimeout(() => {
		console.log('(3) Page retrieved: ' + url)
		callback()
	}, Math.floor(Math.random() * 1000))
}


function readFile (path, callback) {
	setTimeout(() => {
		console.log('(4) Readme file from ' + path + ' loaded')
		callback()
	}, Math.floor(Math.random() * 1000))
}


function callback () {
	console.log('It is done!')
}


// Вызов функций
console.log('start')
/*
readConfig('myConfig', callback)
doQuery('select * from cities', callback)
httpGet('http://google.com', callback)
readFile('README.md', callback)
*/
// 									CALLBAKCS
/*
readConfig('myConfig', ()=>
	doQuery('select * from cities', ()=>
		httpGet('http://google.com', ()=>
			readFile('README.md', callback))))
*/
//									NOTIFIERS

function callback_1(){
	readConfig('myConfig', callback_2)
}
function callback_2(){
	doQuery('select * from cities', callback_3)
}
function callback_3(){
	httpGet('http://google.com', callback_4)
}
function callback_4(){
	readFile('README.md', callback)
}
callback_1()

console.log('end')
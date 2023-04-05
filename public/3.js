"use strict"

function f (init, func, x, callback) {
	setTimeout(() => {
		const res = init + func(x)
		console.log(res)
		callback(res)
	}, 0)
}

// n=3

function f1(res, x){
	let func = (x)=> x*x
	f(res, func, x, (res)=> f2(res, x))
}
function f2(res, x){
	let func = (x)=> 2*x
	f(res, func, x, (res)=>f3(res, x))
}
function f3(res, x){
	let func = (x)=> -2
	f(res, func, x, (res) => console.log("The result is: " + res))
}

function F(x){
	f1(0,x)
}

// n = 2

function f4(res, x){
	let func = (x)=> x
	f(res, func, x, (res)=> f5(res, x))
}

function f5(res, x){
	let func = (x)=> x*Math.sqrt(x)
	f(res, func, x, (res)=> console.log("The result is: " + res))
}

// n = 4

function f6(res, x){
	let func = (x)=> x
	f(res, func, x, (res)=> f7(res, x))
}

function f7(res, x){
	let func = (x)=> x*Math.sqrt(x)
	f(res, func, x, (res)=> f8(res, x))
}

function f8(res, x){
	let func = (x)=> x*x
	f(res, func, x, (res)=> f9(res, x))
}

function f9(res, x){
	let func = (x)=> x*x*Math.sqrt(x)
	f(res, func, x, (res)=> console.log("The result is: " + res))
}

// n = 6
function f10(res, x){
	let func = (x)=> x
	f(res, func, x, (res)=> f11(res, x))
}

function f11(res, x){
	let func = (x)=> x*Math.sqrt(x)
	f(res, func, x, (res)=> f12(res, x))
}

function f12(res, x){
	let func = (x)=> x*x
	f(res, func, x, (res)=> f13(res, x))
}

function f13(res, x){
	let func = (x)=> x*x*Math.sqrt(x)
	f(res, func, x, (res)=> f14(res, x))
}

function f14(res, x){
	let func = (x)=> x*x*x
	f(res, func, x, (res)=> f15(res, x))
}

function f15(res, x){
	let func = (x)=> x*x*x*Math.sqrt(x)
	f(res, func, x, (res)=> console.log("The result is: " + res))
}

/*
console.log("n = 3")
F(3)
*/
/*
console.log("n = 2")
f4(0, 2)
*/
/*
console.log("n = 4")
f6(0, 4)
*/

console.log("n = 6")
f10(0, 6)

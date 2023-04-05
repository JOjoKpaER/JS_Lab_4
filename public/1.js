"use strict"

function succsess(login){
	console.log("Привет, "+ login +"!")
	
}

function failure(login, err){
	console.log("Кто-то пытался притвориться пользователем " + login + 
	", но в пароле допустил ошибку: " + err.toUpperCase())
}

function ask_password(login, password, succsess_callback, failure_callback){
	//let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
	let vowel_count = 0
	let same_consanats = true
	for (let i in password){
		if ((/^[aeiou]$/i).test(password[i])){
			vowel_count++
		}
		else{
			if (!String(login).includes(password[i]))
			same_consanats = false
		}
	}
	for (let i in login){
		if (!(/^[aeiou]$/i).test(login[i])){
			if (!String(password).includes(login[i]))
			same_consanats = false
		}
	}
	if (vowel_count > 3 && same_consanats == false){
		failure_callback(login, "Everything is wrong")
		return
	}
	if (vowel_count > 3){
		failure_callback(login, "Wrong number of vowels")
		return
	}
	if (same_consanats == false){
		failure_callback(login, "Wrong consonants")
		return
	}
	succsess_callback(login)
	return
}

function main(login, password){
	ask_password(login, password, succsess, failure)
}

main("login", "password")
main("login", "aaalgn")

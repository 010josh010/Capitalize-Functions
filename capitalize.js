var names = ["foo", "bar", "egg", 'salad']; 
var test = "this is a test to capitalize every word in this string!"; 


//capitalize first character in an array of strings 
function capFirst(array){
	if(Array.isArray(array)){
		var modified = []; 
		for(var i = 0 ; i < array.length; i++){
			var cap = array[i].charAt(0).toUpperCase();
			var newStr = array[i].split(''); 
			newStr.shift(); 
			newStr.unshift(cap); 
			modified.push(newStr.join('')); 
		}
		console.log(modified);  
	}
	else{
		console.log("Type was not an array"); 
	}
}

//another solution 
function newCap(array){
	if(Array.isArray(array)){
		var modified = []; 
		for(var i = 0 ; i < array.length; i++){
			var data = array[i]; 
		 	modified.push(data.charAt(0).toUpperCase() + data.slice(1)); 
		
		}
		console.log(modified); 
	}
	else{
		console.log("Type was not an array"); 
	}
}

//capitalize every word in a string 
function capEvery(string){
	if(typeof string === "string"){
		var newArr = string.split(' '); 
		var modified = []; 
		for(var i = 0 ; i < newArr.length; i++){
			var data = newArr[i];
			modified.push(data.charAt(0).toUpperCase() + data.slice(1)); 
	}
		console.log(modified.join(' ')); 
	}
	else{
		console.log("Type was not a string")
	}
}	

capFirst(names); 
newCap(names); 
capEvery(test); 

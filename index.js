// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
	function destructivelyAppendCat(){
	    cats.push("Ralph")
	}
	destructivelyAppendCat()
	function destructivelyPrependCat(){
	    cats.unshift("Bob")
	}
	destructivelyPrependCat()
	function destructivelyRemoveLastCat(){
	    cats.pop("cat")
	}
	destructivelyRemoveLastCat()
	function destructivelyRemoveFirstCat(){
	    cats.shift("Ralph")
	}
	destructivelyRemoveFirstCat()
	function appendCat(){
	    let newCats = [...cats, "Broom"]
	    return newCats
	}
	function prependCat(){
	    let newCats = ["Arnold",...cats ]
	    return newCats
	}
	function removeLastCat(){
	    let newCats = cats.slice(0,-1)
	    return newCats
	}
	function removeFirstCat(){
	    let newCats = cats.slice(1)
	    return newCats
	}
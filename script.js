//your JS code here. If required.
function removecolor(e){
	e.preventDefault()
const drop = document.querySelector("#colorSelect")
const index = drop.selectedIndex

if(index!= -1){
drop.remove(index)}
}

const input = document.querySelector("input")
input.addEventListener("click", removecolor)


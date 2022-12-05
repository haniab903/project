var wishlistItems=[]

function addItem(item){
    console.log("addItem")
    wishlistItems.push(item)
    console.log(wishlistItems)
    Update(item)
}

function Update(item){
const $wishList=document.getElementById("wishList")
var img= document.createElement("img")
var div=document.createElement("div")
var button=document.createElement("button")
if (item===1) {
    img.src= "https://bouldercolorado.gov/sites/default/files/2021-04/osmp-only-sawhill-fall-ann-duncan.jpg"
   

}
else if (item===2) {
    img.src= "https://www.skimag.com/wp-content/uploads/2020/12/ski1220-ec5-resortlodging.jpg" 
}else if (item===3) {
    img.src= "https://www.denverpost.com/wp-content/uploads/2016/05/Yoga_red_rocks.jpg?w=620"
}else if (item===4) {
    img.src= "https://www.traveloffpath.com/wp-content/uploads/2022/06/Bali-Top-10-Things-Travelers-Need-To-Know-Before-Visiting.jpg"
}
button.setAttribute("onclick", `remove(${item})`)
button.innerHTML="remove"
img.style.width= "200px"
img.style.height="100px"
div.id=item
div.appendChild(img)
div.appendChild(button)
$wishList.appendChild(div)
console.log ("Update")
}
function remove(item){
    const $wishList=document.getElementById("wishList")
    var children= $wishList.children
    console.log (children)
    console.log("remove item ",item)
    delete wishlistItems[item]

    for (var i = 0; i < children.length; i++ ) {
        // Do stuff
        if (children[i].id ==item) {
            console.log(children[i])
            $wishList.removeChild(children[i])
        }
        }
    
 
}

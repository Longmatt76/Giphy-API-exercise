const form = document.querySelector("form");
const canvas = $("#canvas");
const $searchInput = $("#search");
form.addEventListener("submit", async function(e){
    e.preventDefault();
    let searchTerm = $searchInput.val();
    const myKey = "7oQxapLImampPO3WW080IMHnBMTLAHZ2";
    const res = await axios.get("http://api.giphy.com/v1/gifs/random",{params: {tag: searchTerm, api_key: myKey}} ); 
    const newImg = document.createElement("img");
    newImg.src = res.data.data.images.downsized.url;  
    canvas.append(newImg);
    $searchInput.val("");
   
});

$("#remove").on("click", function(){
 $("img").remove();
});



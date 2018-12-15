let root = document.querySelector("#root");
let itemTitle = document.querySelectorAll(".item");

itemTitle.forEach((item)=>{
    item.addEventListener("click", function(e){
        console.log("123");
        if (this.classList.contains("item__show")) {
            this.classList.remove("item__show");
        } else {
            this.classList.add("item__show");
        }
    })
})

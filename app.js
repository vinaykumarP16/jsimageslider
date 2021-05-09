
const img=document.querySelector('.imgmain');

let images=[
        { 
         "src":"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"another" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"sea" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"forest" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"trees" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"hills" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"tree" 
        },
        { 
         "src":"https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "alt":"sunflower" 
        }

];

function loadImage(){
    let src=img.getAttribute("src");
    let imageInfo=images[Math.floor(Math.random()*images.length)];
    while(src==imageInfo.src){
        imageInfo=images[Math.floor(Math.random()*images.length)];
    }

    img.setAttribute("src",imageInfo.src);
    img.setAttribute("alt",imageInfo.alt)
}

img.addEventListener('click',()=>{
    loadImage();
})

document.body.addEventListener("keydown", e=>{
    if(e.key=== " "){
        loadImage();
    }
});

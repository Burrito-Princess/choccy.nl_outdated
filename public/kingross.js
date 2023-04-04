let socials = 4;

function social_media(){
    let social_media = document.getElementById("social_media");
    for (let p = 0; p < 2; p++){
        let br = document.createElement("br");
        social_media.appendChild(br);
        br.className = "br";
        let white_space = document.getElementsByClassName("br");
        for (let o = 0; o < white_space.length; o++){
            white_space[o].innerHTML = "<br>"; 
        }
    }
    
    for (let i = 0; i < socials; i++){
        let div = document.createElement("div");
        div.id = i;
        social_media.appendChild(div);
        
    };

    document.getElementById("0").innerHTML = "<a href='https://www.instagram.com/choccy_dude_king_/'>Instagram</a>" //Insta
    // document.getElementById("1").innerHTML = "boobs" //Snapchat
    // document.getElementById("2").innerHTML = "boobs" //Tiktok
    // document.getElementById("3").innerHTML = "boobs" //Letterbox
};
    
let toastbox = document.getElementById('toastbox');

let maill = document.getElementById('a');
let namee = document.getElementById('b')
let phone = document.getElementById('c')
let textbox = document.getElementById('msg')


function sendform() {
    Email.send({
    
SecureToken: "fbcbbc0d-8f5a-43f2-abe7-e374526ca1ff",
To : "moeezrajput10@gmail.com",
From : "moeezrajput124@gmail.com",
Subject : "New Contact",
Body : "Name : " ,
}).then(
message => alert(message)
);




}

function toast() {

        let toast = document.createElement("div");
        toast.innerHTML =' <i class="fa-solid fa-circle-check"></i> Successfully Submitted ';
        toast.classList.add('toast');
        toastbox.appendChild(toast);
    
        setTimeout(()=>{
            toast.remove();
        },5000);
    
}
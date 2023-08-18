let toastbox = document.getElementById('toastbox');

let mail = document.getElementById('a');
let namee = document.getElementById('b')
let phone = document.getElementById('c')
let textbox = document.getElementById('msg')


function send() {



    Email.send({
        Host : "smtp.gmail.com",
        Username : process.env.User,
        Password : process.env.Pass,
        To : process.env.mailto,
        From : mail.value,
        Subject : "New Contact",
        Body : "Name : " + namee.value  
                + "<br> Email : " + mail.value
                + "<br> Phone : " + phone.value
                + "<br> Message : " + textbox.value
    }).then(
      message => toast()
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
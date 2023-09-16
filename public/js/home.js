// PROGRESS BAR //
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


// CONTACT FORM //
function sendEmail(){
    Email.send({
        SecureToken: "Your security token",
        Host : "smtp.yourisp.com", //Host has to be smtp.gmail.com
        Username : "username", //username will be the gmail id (email address)
        Password : "password", // password for the gmail id
        To : 'them@website.com', //This is the email address where you want to recieve the enquiry
        From : document.getElementById("email").value, //"you@isp.com"This will be the email id entered by the user
        Subject : "This is the subject", //subject of the email being sent 
        Body : "Name" + document.getElementById("name").value //"And this is the body"
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}


// SHARE SECTION //
const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})
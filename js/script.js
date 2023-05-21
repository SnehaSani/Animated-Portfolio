// document.getElementById("emailForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission

//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var mobile = document.getElementById("mobile").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     var requestBody = {
//         to: "snehasanip@gmail.com",
//         subject: subject,
//         body: "Name: " + name + "\nEmail: " + email + "\nMobile: " + mobile + "\nSubject: " + subject + "\nMessage: " + message
//     };

//     fetch("https://api.brevo.com/v3/smtp/email", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "accept": "application/json",
//             "api-key":"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",
//         },
//         body: JSON.stringify(requestBody)
//     })
//         .then(function (response) {
//             if (response.ok) {
//                 alert("Thank you! Your message has been sent.");
//                 document.getElementById("name").value = "";
//                 document.getElementById("email").value = "";
//                 document.getElementById("mobile").value = "";
//                 document.getElementById("subject").value = "";
//                 document.getElementById("message").value = "";
//             } else {
//                 alert("Oops! Something went wrong.");
//             }
//         })
//         .catch(function (error) {
//             alert("Oops! Something went wrong.");
//             console.error(error);
//         });
// });

  


//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY>=document.scrollingElement.scrollHeight);
}

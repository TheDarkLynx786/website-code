(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({publicKey: "Xw75qd5ide9C3mChA",});
})();


const msg = document.querySelector(".sendoff-msg");

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector(".loader").classList.add("show");
        // these IDs from the previous steps
        emailjs.sendForm('service_my_website', 'template_website_email', this).then(
            () => {
                document.getElementById('form').reset();
                document.querySelector(".loader").classList.remove("show");
                msg.innerHTML = ""
                msg.innerHTML += "<span class='msg-sent'>Email Sent! Thanks for contacting!</span>";
                msg.classList.add("show")
                setTimeout(() => msg.classList.remove("show"), 5000);
            }, 
            (error) => {
                document.querySelector(".loader").classList.toggle("show");
                msg.innerHTML += "<span class='msg-not-sent'>Uh Oh! Email Not Sent, Please Try Again.</span>";
                msg.classList.add("show")
            }
        );
    });
}
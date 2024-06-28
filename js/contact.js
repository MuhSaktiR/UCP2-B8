document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    Swal.fire({
        title: 'Contact Form Submitted',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        icon: 'success',
        preConfirm: () => {
            // Return the form to its initial state (optional)
            document.getElementById("contact-form").reset();
        }
    });
});

// Handle form submission and store contact info
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the input data
    var contactInfo = document.getElementById('contactInfo').value;

    // Save the contact info to local storage
    localStorage.setItem('contactInfo', contactInfo);

    // Redirect to the weather app page
    window.location.href = 'index.html'; // Replace with your weather app page URL
});

// Handle notification permission and display
const button = document.querySelector("button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            // Retrieve the contact info from local storage
            const contactInfo = localStorage.getItem('contactInfo'); 

            // Use the contact info in the notification
            const notification = new Notification("Hello " + contactInfo, {
                body: "Good Luck!",
                data: { hello: "world" },
            });

            notification.addEventListener("error", e => {
                alert("error");
            });
        }
    });
});

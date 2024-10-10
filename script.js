// Function to validate the contact form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled out
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Function to open image in a new tab
function openImage(element) {
    var imgSrc = element.src;
    var newWindow = window.open();
    newWindow.document.write('<img src="' + imgSrc + '" style="width:100%">');
}

// Add hover effects to all elements with the 'glow-hover' class
document.querySelectorAll('.glow-hover').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff';
    });
    element.addEventListener('mouseout', function() {
        this.style.textShadow = '';
    });
});

// Add hover effects to footer fire-glow element
document.querySelectorAll('.fire-glow').forEach(function(element) {
    element.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 20px #ffcc00, 0 0 30px #ff9900, 0 0 40px #ff6600, 0 0 50px #ff3300';
    });
    element.addEventListener('mouseout', function() {
        this.style.textShadow = '0 0 10px #ffcc00, 0 0 20px #ff9900, 0 0 30px #ff6600, 0 0 40px #ff3300';
    });
});

// Function to handle making a call
function makeCall(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

// Function to handle sending an email
function sendEmail(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}

// Function to handle opening Facebook
function openFacebook(url) {
    window.open(url, '_blank');
}

// Function to handle opening address in Google Maps
function openAddress(url) {
    window.open(url, '_blank');
}

// Event listeners for call links
document.querySelectorAll('.call-link').forEach(function(element) {
    element.addEventListener('click', function() {
        var phoneNumber = this.getAttribute('href');
        makeCall(phoneNumber);
    });
});

// Event listeners for email links
document.querySelectorAll('.email-link').forEach(function(element) {
    element.addEventListener('click', function() {
        var emailAddress = this.getAttribute('href');
        sendEmail(emailAddress);
    });
});

// Event listeners for Facebook links
document.querySelectorAll('.facebook-button').forEach(function(element) {
    element.addEventListener('click', function() {
        var url = this.getAttribute('href');
        openFacebook(url);
    });
});

// Event listeners for address links
document.querySelectorAll('.address-link').forEach(function(element) {
    element.addEventListener('click', function() {
        var url = this.getAttribute('href');
        openAddress(url);
    });
});

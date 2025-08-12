
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;
    let errorMessage = "";

    
    if (fullName === "") {
        valid = false;
        errorMessage += "Full Name is required.\n";
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        valid = false;
        errorMessage += "Enter a valid email address.\n";
    }

    
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
        valid = false;
        errorMessage += "Phone must be exactly 10 digits.\n";
    } else if (/^(\d)\1{9}$/.test(phone)) {
        valid = false;
        errorMessage += "Phone digits cannot all be the same.\n";
    }

    
    if (message === "") {
        valid = false;
        errorMessage += "Message is required.\n";
    }

    
    if (valid) {
        alert("Form submitted successfully!");
        this.reset();
    } else {
        alert(errorMessage);
    }
});


const backgrounds = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80"
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.background = `url('${backgrounds[currentIndex]}') no-repeat center center/cover`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

changeBackground(); 
setInterval(changeBackground, 5000); 

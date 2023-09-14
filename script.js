const form = document.getElementById("form");

// Function to generate the QR code
function generateQRCode() {
    // Get input values
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //check fields are filled or not
    if (!name && !profession && !experience && !skills) {
        alert("Please enter at least one field value.");
        return;
    }

    // Create a JSON object to store the information
    const userInfo = {
        name,
        profession,
        experience,
        skills,
    };

    // Convert the JSON object to a string
    const userInfoString = JSON.stringify(userInfo);

    // Generate the QR code
    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: userInfoString,
        width: 200,
        height: 200,
    });

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("skills").value = "";
    
}

// Event listener for the button click
document.getElementById("generateBtn").addEventListener("click", function(){
    
    setTimeout(generateQRCode(),5000)
});

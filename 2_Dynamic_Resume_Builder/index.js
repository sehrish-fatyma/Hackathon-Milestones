var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education")
            .value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills")
            .value;
        var description = document.getElementById("description").value;
        var resumeHTML = "\n        <h2>Generate Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.log("Form or Output div not found in the DOM");
}

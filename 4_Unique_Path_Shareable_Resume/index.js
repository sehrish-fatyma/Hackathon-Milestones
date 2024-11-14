var form = document.getElementById("resumeForm");
var resumeDisplayElement = document.getElementById("resumeDisplay");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPDFButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    var description = document.getElementById("description").value;
    var resumeData = {
        name: name,
        email: email,
        education: education,
        experience: experience,
        skills: skills,
        description: description,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n  \n  <h2>Personal Information</h2>\n  <p><strong>Name:</strong> ".concat(name, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>Education:</strong> ").concat(education, "</p>\n  <p><strong>Experience:</strong> ").concat(experience, "</p>\n  <p><strong>Skills:</strong> ").concat(skills, "</p>\n  <p><strong>Description:</strong> ").concat(description, "</p> \n  ");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareableLinkContainer.style.display = "block";
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
downloadPDFButton.addEventListener("click", function () {
    window.print();
});
window.addEventListener("DOMContentLoaded", function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value =
                username;
            document.getElementById("name").value =
                resumeData.name;
            document.getElementById("email").value =
                resumeData.email;
            document.getElementById("education").value =
                resumeData.education;
            document.getElementById("experience").value =
                resumeData.experience;
            document.getElementById("skills").value =
                resumeData.skills;
            document.getElementById("description").value =
                resumeData.description;
        }
    }
});

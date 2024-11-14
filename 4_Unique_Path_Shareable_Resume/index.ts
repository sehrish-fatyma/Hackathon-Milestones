const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resumeDisplay"
) as HTMLDivElement;
const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;
const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPDFButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const description = (
    document.getElementById("description") as HTMLInputElement
  ).value;

  const resumeData = {
    name,
    email,
    education,
    experience,
    skills,
    description,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));
  const resumeHTML = `
  
  <h2>Personal Information</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Education:</strong> ${education}</p>
  <p><strong>Experience:</strong> ${experience}</p>
  <p><strong>Skills:</strong> ${skills}</p>
  <p><strong>Description:</strong> ${description}</p> 
  `;
  resumeDisplayElement.innerHTML = resumeHTML;
  const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
    username
  )}`;
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
});
downloadPDFButton.addEventListener("click", () => {
  window.print();
});
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("education") as HTMLInputElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLInputElement).value =
        resumeData.experience;
      (document.getElementById("skills") as HTMLInputElement).value =
        resumeData.skills;
      (document.getElementById("description") as HTMLInputElement).value =
        resumeData.description;
    }
  }
});

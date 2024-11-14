const toggleButton = document.getElementById(
  "togglebutton"
) as HTMLButtonElement | null;
const skillsDiv = document.getElementById("Skills") as HTMLDivElement | null;
if (toggleButton && skillsDiv) {
  toggleButton.addEventListener("click", () => {
    if (skillsDiv.style.display === "none") {
      skillsDiv.style.display = "block";
      toggleButton.value = "Hide Skills";
    } else {
      skillsDiv.style.display = "none";
      toggleButton.value = "Show Skills";
    }
  });
} else {
  console.log("required elelment not found in the DOM");
}


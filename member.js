function skillsMember() {
  let skills = document.getElementById("skills");
  let member = document.getElementById("member");
  if (skills.style.display === "none") {
    skills.style.display = "block";
    member.style.display = "none";
  } else {
    skills.style.display = "none";
    member.style.display = "block";
  }
}

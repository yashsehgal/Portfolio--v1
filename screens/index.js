/// SETTING UP BODY ELEMENTS

document.body.style.backgroundColor = "#333";
document.body.style.margin = "auto";
document.body.style.maxWidth = "1450px";
document.body.style.marginTop = "3em";

/// ENTIRE HOMEPAGE


// SECTION - 01 ---- HEADER

let homepage = document.createElement("div");
homepage.className = "page homepage";

let header_options = [
  {
    "title": "experience",
    "url": "#experience"
  },
  {
    "title": "skills",
    "url": "#skills"
  },
  {
    "title": "about",
    "url": "#about"
  },
  {
    "title": "education",
    "url": "#education"
  },
  {
    "title": "contact",
    "url": ""
  }
];

let header = document.createElement("div");
header.className = "header";
header.style.float = "right";


for (let _options in header_options) {
  let _option_writer__ = document.createElement("a");
  _option_writer__.className = "header_option";
  _option_writer__.href = header_options[_options].url;
  _option_writer__.innerHTML = header_options[_options].title;

  header.append(_option_writer__);
}


// SECTION - 02 ---- LANDING/INTRODUCTION SECTION

let introduction_section = document.createElement("div");
introduction_section.clashsName = "section introduction";
introduction_section.id = "introduction-section";
introduction_section.style.marginLeft = "3em";
introduction_section.style.float = "left";


let introduction_headline = document.createElement("p");
introduction_headline.className = "headline";
introduction_headline.id = "introduction-headline";
// introduction_headline.style.float = "left";
introduction_headline.style.marginTop = "3.6em";
introduction_headline.innerHTML = "Hey, I am Atharva Gadkari.";
introduction_headline.style.fontFamily = "Poppins";
introduction_headline.style.width = "70%";
introduction_headline.style.color = "white";
introduction_headline.style.fontSize = "42px";


let introduction_description = document.createElement("p");
introduction_description.className = "description";
introduction_description.id = "introduction_description";
introduction_description.innerHTML = "A Competitive Programmer, Web Developer and graphic Designer from Indore, India.";
introduction_description.style.color = "white";
introduction_description.style.fontFamily = "Poppins";
introduction_description.style.width = "70%";
introduction_description.style.marginBottom = "3em";

let projects_button = document.createElement("a");
projects_button.className = "button";
projects_button.id = "projects_button";
projects_button.href = "#projects";
projects_button.innerText = "My Projects";


introduction_section.append(introduction_headline);
introduction_section.append(introduction_description);
introduction_section.append(projects_button);

homepage.append(header);
homepage.append(introduction_section);

document.getElementById("root").appendChild(homepage);
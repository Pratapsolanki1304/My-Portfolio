// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active sections for animation on scroll
      sec.classList.add("show-animate");
    }
    // if want to animation that repeats on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};
var fullName = document.querySelector("input[placeholder='Full Name']").value;
var email = document.querySelector("input[placeholder='Email']").value;
var mobileNumber = document.querySelector(
  "input[placeholder='Mobile Number']"
).value;
var emailSubject = document.querySelector(
  "input[placeholder='Email Subject']"
).value;
var message = document.querySelector(
  "textarea[placeholder='Your Message']"
).value;

var whatsappNumber = "918000740555"; // Your WhatsApp number
var whatsappLink =
  "https://wa.me/" +
  whatsappNumber +
  "?text=" +
  "Full Name: " +
  encodeURIComponent(fullName) +
  "%0A" +
  "Email: " +
  encodeURIComponent(email) +
  "%0A" +
  "Mobile Number: " +
  encodeURIComponent(mobileNumber) +
  "%0A" +
  "Subject: " +
  encodeURIComponent(emailSubject) +
  "%0A" +
  "Message: " +
  encodeURIComponent(message);

window.open(whatsappLink, "_blank"); // Opens WhatsApp in a new tab

function sendWhatsAppMessage(event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  var fullName = document.querySelector("input[placeholder='Full Name']").value;
  var email = document.querySelector("input[placeholder='Email']").value;
  var mobileNumber = document.querySelector(
    "input[placeholder='Mobile Number']"
  ).value;
  var emailSubject = document.querySelector(
    "input[placeholder='Email Subject']"
  ).value;
  var message = document.querySelector(
    "textarea[placeholder='Your Message']"
  ).value;

  // Your WhatsApp number
  var whatsappNumber = "918000740555";

  // Create the WhatsApp message link
  var whatsappLink =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    "Full Name: " +
    encodeURIComponent(fullName) +
    "%0A" +
    "Email: " +
    encodeURIComponent(email) +
    "%0A" +
    "Mobile Number: " +
    encodeURIComponent(mobileNumber) +
    "%0A" +
    "Subject: " +
    encodeURIComponent(emailSubject) +
    "%0A" +
    "Message: " +
    encodeURIComponent(message);

  // Open WhatsApp in a new tab
  window.open(whatsappLink, "_blank");
}

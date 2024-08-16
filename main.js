var typed = new Typed(".text", {
  strings: ["Full Stack Developer", "Backend Developer", "Frontend Developer"],
  typeSpeed: 10,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function sendEmail() {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Construct the mailto URL
  //const subject = encodeURIComponent('Form Submission from ' + name);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=pavanbm17@gmail.com&su=${subject}&body=${body}`;

  // Open the mail client
  window.open(mailtoLink, "_blank");
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    // URL of the PDF file you want to download
    const pdfUrl = "./Pavan_Resume.pdf";

    // Create an invisible anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Set the download attribute with a filename
    link.download = "/Pavan_Resume.pdf";

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Programmatically click the anchor element to trigger the download
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
  });

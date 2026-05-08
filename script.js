const message = 'I guess there’s no point in waiting for your answer anymore,\nbut thank you. I still appreciate the short time and effort you gave me.\nStay strong, bye-bye, Miss Avoidant.\n\nI honestly wished things turned out differently, but maybe some people are only meant to pass through our lives for a short while.\nStill, I’m grateful I got to know you, even for a little bit. Take care of yourself always.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

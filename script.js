const message = 'I guess there’s no point of waiting for your answer anymore,\nbut thank you. I still appreciate the short time and effort you gave me.\nStay strong to you both, bye-bye, Miss Avoidant.\n\nI honestly wished things turned out differently,We don’t always meet people who stay in our lives, but sometimes they come just to teach us something important for a short time.\nStill, I’m grateful I got to know you, even for a short time it was fun. Take care of yourself always if you need some help im always here.';

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

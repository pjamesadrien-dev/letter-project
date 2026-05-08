const message = `I guess there’s no point in waiting for your answer anymore, but thank you. I still appreciate the short time na nakausap kita.\n\nYou know, I wish things had turned out differently. Maybe I expected too much while nagwawait for your reply, but it’s okay. I’m still grateful I got to know you, even though super limited lang ng time it was fun.\n\nBut ganon talaga, maybe you’re the right person but at the wrong time. Also, stay strong to you both. Bye-bye, Miss Ariola.\n\nTake care of yourself always. If you ever need my help, I’m always here one call away palagi makikinig ako.`;

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

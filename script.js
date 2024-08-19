function increaseScore(teamName) {
  const scoreId = `score${teamName}`;
  const scoreElement = document.getElementById(scoreId);
  let score = Number(scoreElement.textContent);
  scoreElement.textContent = ++score;
}

function decreaseScore(teamName) {
  const scoreId = `score${teamName}`;
  const scoreElement = document.getElementById(scoreId);
  let score = Number(scoreElement.textContent);
  if (score > 0) {
    scoreElement.textContent = --score;
  } else {
    alert("score 0 dan küçük olamaz!");
  }
}

function setNamePrompt(teamName) {
  const name = prompt("takımın yeni adını giriniz: ");
  document
    .getElementById(`team${teamName}`)
    .getElementsByTagName("h2")[0].textContent = name;
}

function setScorePrompt(teamName) {
  const score = prompt("gol sayısını giriniz: ");
  if (!isNaN(score) && score !== null) {
    const scoreNum = parseInt(score);
    if (Number.isInteger(scoreNum) && scoreNum >= 0) {
      document.getElementById(`score${teamName}`).textContent = scoreNum;
    } else {
      alert("lütfen geçerli bir sayı giriniz.");
    }
  } else {
    alert("Giriş iptal edildi veya geçersiz bir sayı girildi");
  }
}

document.getElementById("resetButtonA").addEventListener("click", function () {
  document.getElementById("scoreA").innerText = "0";
});

document.getElementById("resetButtonB").addEventListener("click", function () {
  document.getElementById("scoreB").innerText = "0";
});
// addeventlistener seçtiğimiz elemana yani reset butonına tıklandığında
// innertexti 0 yaptı clicklendiğinde yazdığımız fonksiyon çalışsınf

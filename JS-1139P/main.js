function selectTeam() {
  let newTeam = prompt("A Takımı Seçiniz");

  if (newTeam && /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/.test(newTeam)) {
    // newTeam boş değilse ve yalnızca harf içeriyorsa
    document.getElementById("teamA").innerText = newTeam;
  } else {
    alert("Lütfen yalnızca metin giriniz."); // Girdi geçerli değilse kullanıcıya uyarı ver
  }
}
let sayi = 0;
let numara = document.getElementById("result");
function increase() {
  sayi += 1;
  numara.innerHTML = sayi;
}
function decrease() {
  if (sayi > 0) {
    sayi -= 1;
    numara.innerHTML = sayi;
  }
}
function enterScore() {
  let newScore = prompt("Skor giriniz");
  if (newScore && /^[0-9]+$/.test(newScore)) {
    document.getElementById("result").innerText = newScore;
  } else {
    alert("Lütfen yalnızca rakam giriniz.");
  }
}
//TeamB
function selectTeamB() {
  let newTeam = prompt("B Takımı Seçiniz");

  if (newTeam && /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/.test(newTeam)) {
    // newTeam boş değilse ve yalnızca harf içeriyorsa
    document.getElementById("teamB").innerText = newTeam;
  } else {
    alert("Lütfen yalnızca metin giriniz."); // Girdi geçerli değilse kullanıcıya uyarı ver
  }
}
let sayiB = 0;
let numaraB = document.getElementById("resultB");
function increaseB() {
  sayiB += 1;
  numaraB.innerHTML = sayiB;
}
function decreaseB() {
  if (sayiB > 0) {
    sayiB -= 1;
    numaraB.innerHTML = sayiB;
  }
}
function enterScoreB() {
  let newScoreB = prompt("Skor giriniz");
  if (newScoreB && /^[0-9]+$/.test(newScoreB)) {
    document.getElementById("resultB").innerText = newScoreB;
  } else {
    alert("Lütfen yalnızca rakam giriniz.");
  }
}

//ハンバーガーメニュー

document.getElementById('menuButton').addEventListener('click', function () {
  this.classList.toggle('open');
  document.getElementById('nav').classList.toggle('open');
  //document.getElementById('header').classList.toggle('open');
  //document.getElementById('mask').classList.toggle('active2');
})
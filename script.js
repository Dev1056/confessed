
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const intro = document.querySelector('.intro');
const proposal = document.querySelector('.proposal');
const finalScene = document.querySelector('.final-scene');
const acceptBtn = document.getElementById('accept');
const rejectBtn = document.getElementById('reject');

let noHoverCount = 0;

yesBtn.addEventListener('click', () => {
  intro.classList.add('hidden');
  proposal.classList.remove('hidden');
});

noBtn.addEventListener('mouseover', () => {
  noHoverCount++;
  if (noHoverCount < 6) {
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${Math.random() * window.innerHeight}px`;
    noBtn.style.left = `${Math.random() * window.innerWidth}px`;
  } else {
    alert("Ab to dekhna padegaaaa! 😝");
  }
});

acceptBtn.addEventListener('click', () => {
  proposal.classList.add('hidden');
  finalScene.classList.remove('hidden');
});

rejectBtn.addEventListener('click', () => {
  rejectBtn.innerText = "Try Again Later 😅";
});

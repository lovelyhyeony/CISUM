const openButton = document.getElementById("login_a");
const modal = document.querySelector("article#modal-body");
const overlay = modal.querySelector("section");
const closeButton = modal.querySelector("span");

// 동작 함수
const opneMdodal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

// 클릭이벤트
openButton.addEventListener("click", opneMdodal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

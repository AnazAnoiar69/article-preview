let shareBtn = document.getElementById("share-btn");
let shareModal = document.querySelector(".share-modal");

shareBtn.addEventListener("click", () => {
  shareModal.classList.toggle("modal-active");
  shareBtn.classList.toggle("btn-active");
});

function showModal(event) {
  var title = event.target.parentElement.querySelector(
    ".title-service-card"
  ).innerText;

  var subTitle = event.target.parentElement.querySelector(
    ".subtitle-service-card"
  ).innerText;

  document.querySelector(".modal-title-service-card").innerText = title;
  document.querySelector(".modal-subtitle-service-card").innerText = subTitle;
}

document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();

    document.querySelectorAll(".meal").forEach(function (element) {
      var itemLine = element.querySelector(".item-line"); // Sélectionne la div .item-line

      new ScrollMagic.Scene({
        triggerElement: element,
        duration: element.offsetHeight,
      })
        .setClassToggle(element, "active") // Ajoute la classe "active" à .meal
        .addTo(controller);
    });
  });
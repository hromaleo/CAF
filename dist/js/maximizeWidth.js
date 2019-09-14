function maximizeWidth() {
   const container = document.querySelector(".container");
   const containerStyle = getComputedStyle(container);
   const containerWidth = containerStyle.width;
   console.log(container, containerWidth);
   const targetElms = document.getElementsByClassName("targetOfMaximizeWidth");
   console.log(targetElms);
   for (let i = 0; i < targetElms.length; i++) {
      targetElms[i].style.width = containerWidth
   }
}

document.addEventListener("DOMContentLoaded", maximizeWidth);
window.addEventListener("resize", maximizeWidth);
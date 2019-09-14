function maximizeWidth() {
   const source = document.querySelector(".width-lim-82");
   const style = getComputedStyle(source);
   const width = style.width;
   console.log(source, width);
   const target = document.getElementsByClassName("targetOfMaximizeWidth");
   console.log(target);
   const n = target.length;
   for (var i = 0; i < n; i++) {
      var e = target[i];
      e.style.width = width
   }
}
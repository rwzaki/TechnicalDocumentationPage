alert("An optimized version of this webpage will be in my Github page (@rwzaki). This one has some limitation and is developed to pass the conditions.")
      // first, find all the div.code blocks
      document.querySelectorAll('code.code-text').forEach(el => {
        // then highlight each
        hljs.highlightElement(el);
      });

      if((window.fullScreen) ||
   (window.innerWidth == screen.width && window.innerHeight == screen.height)) {

} else {

}


document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
        switchCancelFS();
    } else {
        document.getElementById("main-container").style.padding='3.5em';
        
        let contentElements = document.getElementsByClassName("section-content");
         for (let i = 0; i < contentElements.length; i++) {
            let element = contentElements[i];
            element.style.fontSize = "1rem";
            }

        let HeadingElements = document.getElementsByClassName("section-title");
         for (let i = 0; i < HeadingElements.length; i++) {
            let element = HeadingElements[i];
            element.style.fontSize = "1.65rem";
            }

        let syntaxElements = document.getElementsByClassName("code-text");
         for (let i = 0; i < syntaxElements.length; i++) {
            let element = syntaxElements[i];
            element.style.fontSize = "1rem";
            }
    }
});


      function toggleFullScreen(id) {
         if (document.getElementById(id).requestFullscreen) {
          console.log("1");
           document.getElementById(id).requestFullscreen();
         } else if (document.getElementById(id).mozRequestFullScreen) {
           document.getElementById(id).mozRequestFullScreen();
           console.log("1");
         } else if (document.getElementById(id).webkitRequestFullscreen) {
           document.getElementById(id).webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
           console.log("1");
         }
         console.log("outside");
         document.getElementById("full-screen").style.display="none";
         document.getElementById("revert-full-screen").style.display="inline-block";
         
       }  
       

     function cancelFullScreenAction() {
      if (document.cancelFullScreen) {
             document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
             document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }

          switchCancelFS();
         

     }

     function switchCancelFS(){
      document.getElementById("revert-full-screen").style.display="none";
         document.getElementById("full-screen").style.display="inline-block";
         document.getElementById("main-container").style.padding='0em';

         let contentElements = document.getElementsByClassName("section-content");
         for (let i = 0; i < contentElements.length; i++) {
            let element = contentElements[i];
            element.style.fontSize = "0.8rem";
            }

        let HeadingElements = document.getElementsByClassName("section-title");
         for (let i = 0; i < HeadingElements.length; i++) {
            let element = HeadingElements[i];
            element.style.fontSize = "1.4rem";
            }

        let syntaxElements = document.getElementsByClassName("code-text");
         for (let i = 0; i < syntaxElements.length; i++) {
            let element = syntaxElements[i];
            element.style.fontSize = "0.75rem";
            }
     }

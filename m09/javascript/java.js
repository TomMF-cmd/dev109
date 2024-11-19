var mybutton = document.querySelector("#clearButton");
mybutton.addEventListener("click", function (event) {
  
  
    var elements = document.getElementsByClassName("dot");
    for (index = elements.length - 1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
    }

    // Let us stop the propagation of events

event.stopPropagation();
  });

 addEventListener("click", function(event) {
   if (event.target.tagName === "INPUT") {
        return;
    }
    var size = document.querySelector("#sizePick").value;
    var col = document.querySelector("#colPick").value;
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - size / 2) + "px";
    dot.style.top = (event.pageY - size / 2) + "px";
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.backgroundColor = col;
   
    document.body.appendChild(dot);
});

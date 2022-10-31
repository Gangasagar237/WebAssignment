var ulRef = document.createElement("ul");
function addlist() {
  var inputRef = document.getElementById("input");
  textRef = inputRef.value;
  divRef = document.getElementById("div");
  var liRef = document.createElement("li");
  liRef.innerHTML = textRef;
  ulRef.appendChild(liRef);
  divRef.appendChild(ulRef);
  inputRef.value = "";
  var spanRef = document.createElement("span");
  spanRef.innerText = "Delete";
  liRef.appendChild(spanRef);
  spanRef.style.margin = "0px 150px";
  spanRef.style.border = "2px solid black";
  spanRef.style.padding = "2px 6px";

  spanRef.style.cursor = "pointer";
  brRef = document.createElement("br");
  liRef.appendChild(brRef);
  ulRef.appendChild(liRef);
  divRef.appendChild(ulRef);
  spanRef.addEventListener("click", fn);
  function fn() {
    spanRef.remove();
    liRef.remove();
  }

  console.log(textRef);
}

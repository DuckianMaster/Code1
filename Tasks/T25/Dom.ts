let spanElement : HTMLSpanElement = document.querySelector("span#idAye")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Aye";
document.body.appendChild(newSpan);

let i:number=0;
do{
i++;
console.log(i);
} while (i< 10)


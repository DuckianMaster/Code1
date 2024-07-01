const canvas : HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
ctx.rect(10,10,100,100);
ctx.fillStyle = "green";
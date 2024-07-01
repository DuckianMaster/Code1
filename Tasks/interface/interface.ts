interface StudentData (
    name: string,
    adress:string,
    matrikel:number,
    exma:boolean,


)
let student1: studentdata = (
    name:"Noah Düfel",
    adress:"spastistraße",
    matrikel:11111,
    exma:true,
)
let student student2:studentdata = (name:"alex", adress:"irgendwo", matrikel:22222, exma:false)
console.log(student1.adress)

student1.adress ="da halt"
console.log(student1.adress)
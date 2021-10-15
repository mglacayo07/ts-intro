/*
    ===== Código de TypeScript =====
*/


let anyArray = [0,'string',true,[],{}];
console.log(anyArray);

let skills: string[] = ['Bash','Counter','Healing']; //TypeScript infiere el tipo de dato
console.log(skills);

let point: number[] = [0,10,20,30];
point.push(40);
console.log(point)


interface Classes {
    name: string;
    hp: number;
    skills: string[];
    description?: string; //este dato es pocional
}

const xelor: Classes = {
    name: "Xelor",
    hp: 1000,
    skills: ['Slow Down', 'Hand', 'Teleportation'],
}
xelor.description = "Master of time";
console.table(xelor);

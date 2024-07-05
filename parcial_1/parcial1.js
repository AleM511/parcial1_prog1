//Alejo Monteagudo

//ejercicio 1

// function calcularAreaTotal(medidasGalpones) {
//     let areaTotal = 0;
//     for (let galpon of medidasGalpones) {
//         let areaGalpon = galpon.largo * galpon.ancho;
//         areaTotal += areaGalpon;
//     }
//     return areaTotal;
// }

// let medidas = [
//     { largo: 50, ancho: 100 },
//     { largo: 30, ancho: 80 },
// ];

// console.log(calcularAreaTotal(medidas));





//ejercicio 2

// function instalarMaquina(superficieEdificio, maquinas) {
//     for (let maquina of maquinas) {
//         if (maquina.superficieDeOperacionRequerida <= superficieEdificio) {
//             return true;
//         }
//     }
//     return false;
// }

// let maquinas = [
//     { nombreMaquina: "Torno Industrial", superficieDeOperacionRequerida: 40 },
//     { nombreMaquina: "Robot Soldador", superficieDeOperacionRequerida: 60 },
//     { nombreMaquina: "Selladora", superficieDeOperacionRequerida: 30 }
// ];

// let superficieEdificio = 120;

// console.log(instalarMaquina(superficieEdificio, maquinas));

// superficieEdificio = 50;

// console.log(instalarMaquina(superficieEdificio, maquinas));

// superficieEdificio = 20;

// console.log(instalarMaquina(superficieEdificio, maquinas));

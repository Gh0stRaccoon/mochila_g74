const edad = Number(prompt("Qué edad tienes?")); // 18
const credencial = prompt("Tienes credencial?").toLowerCase(); // "si"

console.log(credencial)

// if (edad < 18) {
//   console.log("Eres menor de edad, no puedes entrar");
// } else if (edad >= 18 && credencial === "si") {
//   console.log("Eres mayor de edad, y tienes la credencial, pasa");
// } else if (edad >= 18 && credencial === "no") {
//   console.log(
//     "Eres mayor de edad, pero no tienes la credencial, no puedes entrar"
//   );
// } else {
//   console.log("No ingresaste un número");
// }

// AND
true && false && true; // false
false && false; // false
true && true && true; // true

if (edad < 18 && credencial === "no") {
  console.log("Eres menor de edad, y no tienes credencial, no puedes entrar");
} else if (edad < 18 && credencial === "si" || credencial === "sí") {
  console.log("Eres menor de edad, pero tienes la credencial, pasa");
} else if (edad >= 18) {
  console.log("Eres mayor de edad, pasa");
} else {
  console.log("No ingresaste un número");
}

// OR
true || false; // -> true
true || true; // -> true
false || true; // -> true
false || false; // -> false

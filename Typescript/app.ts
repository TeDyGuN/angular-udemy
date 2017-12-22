// let mensaje = "hola"
//
// if( true )
// {
//     let mensaje = "adios"
// }
//
// console.log(mensaje);


//TIPOS DE VAEIABLES
// let nombre:string = 'Peter';
// let numero:numero = 123;
// let booleano:boolean = true;
//
// let hoy:Date = new Date();
// hoy = new Date('2020-10-21');
//
// //cualquier tipo de datos
// let cualquiera:any;
//
// let spideran = {
//     nombre: "Peter",
//     edad: 20
// }

//template literales
// let nombre:string = "Juan"
// let apellido:string = "Perez"
// let edad:number = 32;
// //let texto = "Hola " + nombre + " " + apellido; + "(" + edad + ")";
// let texto = `Hola, ${ nombre } ${ apellido } (${edad})`
// console.log(texto);


//Parametros obligatorios, opcionales y por defecto
//quien parametro obligatorio
//objeto parametro por defecto
//momento parametro opcional
// function activar( quien:string , objeto:string = "Batiseñal", momento?:string){
//     let mensaje:string;
//     if( momento )
//     {
//         mensaje = ` ${ quien} activo la ${ objeto } en la ${ momento }`
//     }
//     else
//     {
//         mensaje = ` ${ quien} activo la ${ objeto }`;
//     }
//
//     console.log(mensaje);
// }
// activar("Gordon", "Batisenial", "tarde");


//------------Funciones con Flecha
// let miFuncion = function ( a:any ) {
//     return a;
// }
// let miFuncionF = ( a:any ) => a;
//
//
// let miFuncion2 = function(a:number, b:number){
//     return a + b;
// }
//
// let miFuncion2F = (a:number, b:number) => (a + b);
//
// let miFuncion3 = function( nombre:string ){
//     nombre = nombre.toUpperCase();
//     return nombre;
// }
//
// let miFuncion3F = ( nombre:string ) =>{
//     nombre = nombre.toUpperCase();
//     return nombre;
// }
//

//console.log(miFuncion3F("ted"));

// let hulk = {
//     nombre: "Hulk",
//     smash(){
//         setTimeout( ()=> console.log(this.nombre + " Smash!!!"), 1500);
//     }
// }
//
// hulk.smash();
//----DESCTRUCTURACION DE objetoS Y ARREGLOS

// let avenger = {
//     nombre: "Steve",
//     clave: "Capitan America",
//     poder: "Droga"
// }
//
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;
// let { nombre, clave, poder } = avenger;
// console.log(nombre , clave, poder);

// let avengers:string[] = [ "Thor", "Steve", "Tony"];
// let [thor, capi, tony] = avengers;
// console.log(thor, capi, tony);
// let [thori, , ] = avengers;
// console.log(thori);

// -- CLASES Y objetoS
class Avenger{

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(){
        console.log("Se ejecuto el constructor");
    }

}
let antman:Avenger = new Avenger();
console.log(antman);

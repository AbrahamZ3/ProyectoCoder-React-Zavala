const productoFlores = [
    {
        id: 1,
        nombre: "Rosa Roja",
        descripcion: "Una hermosa rosa roja con fragancia intensa.",
        precio: 12.99,
        categoria: "Rosas",
        stock: 10,
        imagen: "../img/rosa-roja.jpg"
    },
    {
        id: 2,
        nombre: "Lirio Blanco",
        descripcion: "Un elegante lirio blanco con pétalos largos.",
        precio: 9.99,
        categoria: "Lirios",
        stock: 10,
        imagen: "../img/lirio-blanco.jpg"
    },
    {
        id: 3,
        nombre: "Tulipán Amarillo",
        descripcion: "Un tulipán amarillo brillante con forma de copa.",
        precio: 7.99,
        categoria: "Tulipanes",
        stock: 10,
        imagen: "../img/tulipan-amarillo.jpg"
    },
    {
        id: 4,
        nombre: "Girasol",
        descripcion: "Un girasol radiante con un centro grande.",
        precio: 6.99,
        categoria: "Girasoles",
        stock: 10,
        imagen: "../img/girasol.jpg"
    },
    {
        id: 5,
        nombre: "Orquídea Púrpura",
        descripcion: "Una orquídea púrpura exótica y elegante.",
        precio: 19.99,
        categoria: "Orquídeas",
        stock: 10,
        imagen: "../img/orquidea-purpura.jpg"
    },
    {
        id: 6,
        nombre: "Rosa Blanca",
        descripcion: "Una hermosa rosa blanca muy elegante.",
        precio: 14.99,
        categoria: "Rosas",
        stock: 10,
        imagen: "../img/rosa-blanca.jpg"
    },
    {
        id: 7,
        nombre: "Lirio Azul",
        descripcion: "Un Lirio azul simbolo de paz",
        precio: 12.99,
        categoria: "Lirios",
        stock: 10,
        imagen: "../img/lirio-azul.jpg"
    },
    {
        id: 8,
        nombre: "Tulipán Blanco",
        descripcion: "Un tulipán blanc lleno de paz y calma.",
        precio: 7.99,
        categoria: "Tulipanes",
        stock: 10,
        imagen: "../img/tulipan-blanco.jpg"
    },
    {
        id: 9,
        nombre: "Rosa Rosa",
        descripcion: "Una hermosa rosa rosa simbolo de amistad y aprecio.",
        precio: 12.99,
        categoria: "Rosas",
        stock: 10,
        imagen: "../img/rosa-rosa.jpg"
    },
    {
        id: 10,
        nombre: "Orquídea Amarilla",
        descripcion: "Una orquídea amarilla simbolo de alegria.",
        precio: 19.99,
        categoria: "Orquídeas",
        stock: 10,
        imagen: "../img/orquidea-amarilla.jpg"
    },
];

export const getData = () => {

    let error = false

    return new Promise((resuelve, rechaza) => {

        setTimeout(() => {

            if (error) {
                rechaza("Hubo error, intente mas tarde")
            } else{
                resuelve(productoFlores)
            }
        }, 1000);
    });
}
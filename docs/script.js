
/*Cargar la información del televisor dentro de un array llamado productos*/
const productos = [
    {
      nombre: 'Album Breach - Twenty One Pilots',
      descripcion: 'Breach" es el octavo álbum de estudio del dúo estadounidense Twenty One Pilots. Fue lanzado el 12 de septiembre de 2025.',
      precio: 299.00,
      imagen: 'img1.png'
    },
    {
      nombre: 'Album Wiped Out! - The Neighbourhood',
      descripcion: 'Wiped Out es el segundo álbum de estudio de la banda alternativa estadounidense The Neighbourhood. Fue lanzado el 30 de octubre de 2015 por Columbia Records.',
      precio: 278.00,
      imagen: 'img2.jpeg'
    },
    {
      nombre: 'Album Unforgiven - Le Sserafim',
      descripcion: 'Unforgiven es el primer álbum de estudio de larga duración del grupo femenino surcoreano Le Sserafim. Fue lanzado por Source Music el 1 de mayo de 2023 ',
      precio: 669.00,
      imagen: 'img3.jpg'
    },
    {
      nombre: 'Love Yourself:結 Answer - BTS',
      descripcion: 'Love Yourself 結 Answer es el tercer álbum recopilatorio del grupo surcoreano BTS. El álbum fue lanzado el 24 de agosto de 2018 por Big Hit Entertainment ',
      precio: 699.00,
      imagen: 'img4.png'
    }
  ];
 
/*crear las tarjetas mediante la función crearTarjetaProducto*/
const catalogo = document.getElementById('catalogo');


function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';


  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;


  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;


  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;


  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = '$' + producto.precio.toFixed(2);


  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';


  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);


  return card;
}
/*3. Mediante una función llamada renderizarCatalogo se encargará de tomar todos los datos de tus
productos y dibujarlos (o renderizarlos) como tarjetas HTML dentro del contenedor principal de tu
página.Utilizando un bucle para procesar cada producto individualmente y agregarlo al catálogo.*/


function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
 
/*4. por ultimo se llamara a la función renderizarCatalogo para cargar la pagina*/
window.onload = renderizarCatalogo;


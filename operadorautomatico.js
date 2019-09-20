//Clase para estructurar el Billete con la cantidad
class Billete
{
  constructor(valor, cantidad)
  {
    this.valor = valor
    this.cantidad = cantidad
  }
}

//funciones------------------------------------------
function billetera(cantidad, valor)
{
  for (i = 0; i < cantidad; i++)
  {
    resultado.innerHTML += muchis_blasdiasd[valor] +"<br />"
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero=(t.value);
  for(var bi of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor(dinero/bi.valor);

      if (div > bi.cantidad)
      {
      papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor*papeles);
    }

  }
  if (dinero > 0)
  {
  resultado.innerHTML = "\nNo tengo esa cantidad de Dinero!!"
  resultado.innerHTML = nohay;
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0)
       {
          //resultado.innerHTML +=  e.cantidad +" Billetes de " + e.valor+"<br />"
          billetera(e.cantidad, e.valor);
      }
    }
  }
}
//fin de la funcion ---------------------------------------------------


//Variables-------------------------------------
var caja = [];
caja.push(new Billete(100,5));
caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,1));


var entregado = [];
var dinero;
var div = 0;
var papeles = 0;

var nohay="<img src = 'Imagenes/FotoJet.png></img>"
var muchis_blasdiasd =
{
  "50":"<img src = 'Imagenes/Billete50.png'></img>",
  "10":"<img src = 'Imagenes/Billete_de_10.png'></img>",
  "100":"<img src = 'Imagenes/100.jpg'></img>",
  "20":"<img src = 'Imagenes/20.png'></img>"
}

var resultado = document.getElementById("resultado")
var b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero)
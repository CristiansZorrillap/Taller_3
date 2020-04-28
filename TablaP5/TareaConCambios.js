//crea una tabla que guarda los datos del archivo .csv
let table;

//numero de filas en el archivo
let rowCount;

//variable que guarda el dato
let datoPoblacion=0;

//variable que guarda el dato máximo
let maxDato=0;

//se crea un arreglo del texto del tiempo que se coloca en el eje x del diagrama
let textoLocalidades = [];

//se crea un arreglo para el diagrama de circulos
let diagramaCirculos = [];

//se crea un arreglo para el diagrama de barras
//let diagramaBarras = [];

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload()
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/Datos.csv", "header");
}


function setup()
{
  createCanvas(600,400);
 
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows();  

  for (let i = 0; i < rowCount; i++)
  {
    //guardamos la información de la fila "x" en una constante
    const Localidades = row[i].getString("Localidades");
    //guardamos la información de la fila "y" en una constante
    const Poblacion = row[i].getNum("Poblacion");
   
   
    //se determina el valor máximo de toda la columna de Comcel
    datoPoblacion = Poblacion;
    if (datoPoblacion > maxDato)
    {
      maxDato = datoPoblacion;
    }

    //se determina las posX y posY para ubicar posteriormente el texto del tiempo sobre el eje x del diagrama
    //se replican las lineas 14 veces, en las pocisiones dentro del espacio del diagrama
    let x = map(i, 0, rowCount-1, 55, 475); //desde la 0 hasta la 13
    let y = 310;
     
    //Adiciono al arreglo un objeto de tipo textoEje, donde inicializo el objeto creando el texto
    textoLocalidades.push(new textoEje (x,y,Localidades));

     }

  console.log(maxDato);

  for (let i = 0; i < rowCount; i++)
  {
    //guardamos la información de la fila "y" en una constante
    const Poblacion = row[i].getNum("Poblacion");
   
    //se determina las posX y posY para ubicar posteriormente el texto del tiempo sobre el eje x del diagrama
    //se replican las lineas 14 veces, en las pocisiones dentro del espacio del diagrama
    let x = map(i, 0, rowCount-1, 55, 475); //desde la 0 hasta la 13
   
    //se mapean los datos de comcel acorde a la altura del diagrama
    let yPoblacion = map(Poblacion, 0, maxDato, 300, 100);

    //Adiciono al arreglo un objeto de tipo circulo, donde obtiene los datos de comcel para dibujarlos en forma de circulo
    diagramaCirculos.push(new circulo (x,yPoblacion));

    //Adiciono al arreglo un objeto de tipo circulo, donde obtiene los datos de comcel para dibujarlos en forma de circulo
    //diagramaBarras.push(new barra (x,yPoblacion));

  }

  background(0);

}


function draw()
{
  //cuadro gris de contexto en donde se colocan los valores
  fill(100);
  rect(0, 70, 560, 242);

  //cuadro blanco en donde se coloca el digrama de curvas
  fill(255);
  rect(55, 80, 420, 220);

  //lineas veticales, cada linea es un dato del archivo que se dibujará en el espacio
  strokeWeight(1);
  stroke(0);


  //son las lineas horizonales correspondiente a el max dato dividido la cantidad de lineas que quiero ver  
  //13121911/8 = 1640238
  //2000000
  for (let i = 0; i < maxDato; i+=2000000)
  {
      //se replican las lineas, en las pocisiones dentro del espacio del diagrama
      let y = map(i, 0, maxDato, 300, 80);
      line(55, y, 475, y);
     
      //texto con el valor de cada linea
      fill(255);
      //se coloca el texto en cada linea
      text(i, 25, y);
  }  


  //se recorre la cantidad de textoEje, que es lo mismo que recorrer la cantidad de datos
  //for (let i = 0; i < textoEje.length; i++)
  for (let i = 0; i < rowCount; i++)
  {
    //se replican las lineas 14 veces, en las pocisiones dentro del espacio del diagrama
    let x = map(i, 0, rowCount-1, 55, 475); //desde la 0 hasta la 13
    //lineas verticales
    line(x, 80, x, 300);

    //recorre el for y coloca el texto del tiempo correspondiente a la ubicación en el que se guardo en el arreglo
    textoLocalidades[i].dibujar();

    //recorre el for y coloca el rectangulo correspondiente a la ubicación en el que se guardo en el arreglo
    //diagramaBarras[i].dibujar();

    //recorre el for y coloca el circulo correspondiente a la ubicación en el que se guardo en el arreglo
    diagramaCirculos[i].dibujar();
   
  }
 
}



// clase textoEje
class textoEje
{
  //se determinan los variables del objeto
  constructor(posX, posY, texto)
  {
    this.posX = posX;
    this.posY = posY;
    this.texto = texto;
  }

  dibujar()
  {
    fill(0);
    textSize(7);  
    textAlign(CENTER);  
    text(this.texto, this.posX, this.posY);
  }
}
/*
class barra
{
  constructor(posX, posY)
  {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar()
  {
    fill(0,255,0);
    rect(this.posX-5,this.posY,10,300-this.posY);
  }
}

*/

class circulo
{
  constructor(posX, posY)
  {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar()
  {
    fill(0,255,0);
    ellipse(this.posX,this.posY,20,10);
    fill(255,0,0);
    ellipse(this.posX,this.posY,10,20);
  }
}
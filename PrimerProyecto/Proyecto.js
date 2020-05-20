

//crea una tabla que guarda los datos del archivo .csv
let table; 

let cnv;

let checkbox;

let slider;

//se crea un arreglo
let bubbles = []; 

let mostrarKennedy = false;

let mostrarAn = false;

let mostrarBu = false;

let mostrarBosa = false;

let mostrarChapi = false;

let mostrarBolivar = false;

let mostrarEnga = false;

let mostrarFonti = false;

let mostrarCande = false;

let mostrarMarti = false;

let mostrarAranda = false;

let mostrarUribe = false;

let mostrarCristo = false;

let mostrarSantaFe = false;

let mostrarSuba = false;

let mostrarSuma = false;

let mostrarTeusa = false;

let mostrarTunju = false;

let mostrarUsa = false;

let mostrarUsme = false;

//numero de filas en el archivo
let rowCount;

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() 
{
  //carga el archivo y tiene en cuenta el titulo de las columnas
  table = loadTable("assets/PoblacionFinal.csv", "header");
}

function setup() 
{
  cnv = createCanvas(1000, 1000);
  cnv.position(600, 30);

  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(90, 150);
  slider.style('width', '80px');

  checkbox = createCheckbox('kennedy'); //palabra al lado del checkbox
  checkbox.position(90, 200);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(Kennedy);

  checkbox = createCheckbox('Antonio Nariño'); //palabra al lado del checkbox
  checkbox.position(90, 220);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(Antonio);

  checkbox = createCheckbox('Barrios Unidos'); //palabra al lado del checkbox
  checkbox.position(90, 240);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(BarrioU);

  checkbox = createCheckbox('Bosa'); //palabra al lado del checkbox
  checkbox.position(90, 260);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(ChecBosa);
  
  checkbox = createCheckbox('Chapinero'); //palabra al lado del checkbox
  checkbox.position(90, 280);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checChapi);
  
  checkbox = createCheckbox('Ciudad Bolivar'); //palabra al lado del checkbox
  checkbox.position(90, 300);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checBoli);
  
  checkbox = createCheckbox('Engativa'); //palabra al lado del checkbox
  checkbox.position(90, 320);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checEnga);
  
  checkbox = createCheckbox('Fontibon'); //palabra al lado del checkbox
  checkbox.position(90, 340);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checFonti);
  
  checkbox = createCheckbox('Candelaria'); //palabra al lado del checkbox
  checkbox.position(90, 360);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checCande);
  
  checkbox = createCheckbox('Martires'); //palabra al lado del checkbox
  checkbox.position(90, 380);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checMarti);
  
  checkbox = createCheckbox('Puente Aranda'); //palabra al lado del checkbox
  checkbox.position(90, 400);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checPuente);
  
  checkbox = createCheckbox('Rafael Uribe'); //palabra al lado del checkbox
  checkbox.position(90, 420);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checUribe);
  
  checkbox = createCheckbox('San Cristobal'); //palabra al lado del checkbox
  checkbox.position(90, 440);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checCristo);
  
  checkbox = createCheckbox('SantaFe'); //palabra al lado del checkbox
  checkbox.position(90, 460);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checSanta);
  
  checkbox = createCheckbox('Suba'); //palabra al lado del checkbox
  checkbox.position(90, 480);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checSuba);
  
  checkbox = createCheckbox('Sumapaz'); //palabra al lado del checkbox
  checkbox.position(90, 500);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checSuma);
  
  checkbox = createCheckbox('Teusaquillo'); //palabra al lado del checkbox
  checkbox.position(90, 520);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checTeusa);
  
  checkbox = createCheckbox('Tunjuelito'); //palabra al lado del checkbox
  checkbox.position(90, 540);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checTunju);
  
  checkbox = createCheckbox('Usaquen'); //palabra al lado del checkbox
  checkbox.position(90, 560);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checUsa);
  
  checkbox = createCheckbox('Usme'); //palabra al lado del checkbox
  checkbox.position(90, 580);
  //cuando se selecciona una opción llama a la funcion changeFill
  checkbox.changed(checUsme);
  
  //numero de filas en el archivo
  rowCount = table.getRowCount();

  //creamos un objeto que guarda la información de las filas de la tabla
  const row = table.getRows();  

  for (let i = 0; i < rowCount; i++) 
  {
    //guardamos la información de la fila "x" en una constante
    const x = row[i].getNum("x");
    //guardamos la información de la fila "y" en una constante
    const y = row[i].getNum("y");
    //guardamos la información de la fila "diameter" en una constante
    const diameter = row[i].getNum("diameter");
    //guardamos la información de la fila "name" en una constante
    const name = row[i].getString("name");

    //Adiciono al arreglo un objeto de tipo Bubble, donde inicializo el objeto creando la Burbuja
    bubbles.push(new Bubble(x, y, diameter, name));
    //se crean la cantidad de burbujas acorde a la cantidad de datos
  }

}
function Kennedy() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarKennedy = true;
    console.log(diameter);
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarKennedy = false;
  }
}
function Antonio() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarAn = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarAn = false;
  }
}
function BarrioU() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarBu = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarBu = false;
  }
}

function ChecBosa() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarBosa = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarBosa = false;
  }
}

function checChapi() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarChapi = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarChapi = false;
  }
}

function checBoli() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarBolivar = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarBolivar = false;
  }
}

function checFonti() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarFonti = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarFonti = false;
  }
}

function checCande() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarCande = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarCande = false;
  }
}

function checMarti() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarMarti = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarMarti = false;
  }
}

function checUribe() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarUribe = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarUribe = false;
  }
}

function checCristo() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarCristo = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarCristo = false;
  }
}

function checSanta() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarSantaFe = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarSantaFe = false;
  }
}

function checSuba() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarSuba = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarSuba = false;
  }
}

function checSuma() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarSuma = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarSuma = false;
  }
}

function checTeusa() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarTeusa = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarTeusa = false;
  }
}

function checTunju() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarTunju = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarTunju = false;
  }
}

function checUsa() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarUsa = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarUsa = false;
  }
}

function checEnga() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarEnga = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarEnga = false;
  }
}

function checPuente() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarAranda = true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarAranda = false;
  }
}

function checUsme() 
{
  //si el boton esta activo
  if (checkbox.checked()) 
  {
    //coloque la variable mostrarCirculo en true
    mostrarUsme= true;
  } 
  //si el boton esta desactivado 
  else 
  {
    //coloque la variable mostrarCirculo en false
    mostrarUsme = false;
  }
}


function draw() 
{

  let val = slider.value();
  background(val, 100, 100, 1);

  //se recorre la cantidad de burbujas, que es lo mismo que recorrer la cantidad de datos
  //for (let i = 0; i < bubbles.length; i++)

  if(mostrarKennedy == true)
  {
     bubbles[7].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[7].mouseOver(mouseX, mouseY);
  }
  if(mostrarAn == true){
    bubbles[0].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[0].mouseOver(mouseX, mouseY);
  }
  if(mostrarBu == true){
    bubbles[1].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[1].mouseOver(mouseX, mouseY);
  }
  if(mostrarBosa == true){
    bubbles[2].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[2].mouseOver(mouseX, mouseY);
  }
  if(mostrarChapi == true){
    bubbles[3].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[3].mouseOver(mouseX, mouseY);
  }
  if(mostrarBolivar == true){
    bubbles[4].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[4].mouseOver(mouseX, mouseY);
  }
  if(mostrarEnga == true){
    bubbles[5].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[5].mouseOver(mouseX, mouseY);
  }
  if(mostrarFonti == true){
    bubbles[6].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[6].mouseOver(mouseX, mouseY);
  }
  if(mostrarCande == true){
    bubbles[8].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[8].mouseOver(mouseX, mouseY);
  }
  if(mostrarMarti == true){
    bubbles[9].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[9].mouseOver(mouseX, mouseY);
  }
  if(mostrarAranda == true){
    bubbles[10].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[10].mouseOver(mouseX, mouseY);
  }
  if(mostrarBu == true){
    bubbles[1].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[1].mouseOver(mouseX, mouseY);
  }
  if(mostrarUribe == true){
    bubbles[11].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[11].mouseOver(mouseX, mouseY);
  }
  if(mostrarCristo == true){
    bubbles[12].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[12].mouseOver(mouseX, mouseY);
  }
  if(mostrarSantaFe == true){
    bubbles[13].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[13].mouseOver(mouseX, mouseY);
  }
  if(mostrarSuba == true){
    bubbles[14].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[14].mouseOver(mouseX, mouseY);
  }
  if(mostrarSuma== true){
    bubbles[15].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[15].mouseOver(mouseX, mouseY);
  }
  if(mostrarTeusa == true){
    bubbles[16].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[16].mouseOver(mouseX, mouseY);
  }
  if(mostrarTunju == true){
    bubbles[17].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[17].mouseOver(mouseX, mouseY);
  }
  if(mostrarUsa == true){
    bubbles[18].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[18].mouseOver(mouseX, mouseY);
  }
  if(mostrarUsme == true){
    bubbles[19].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[19].mouseOver(mouseX, mouseY);
  }

/*
  for (let i = 0; i < rowCount; i++) 
  {
    //recorre cada burbuja y llama a la función dibujar para mostrarla
    bubbles[i].dibujar();
    //recorre cada burbuja y llama a la función mouseOver para mostrar  la información
    bubbles[i].mouseOver(mouseX, mouseY);
  } 
*/
}


// clase Bubble 
class Bubble 
{
  //se determinan los variables del objeto
  constructor(x, y, diameter, name) 
  {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.name = name;

    this.over = false;
  }

  //se crea la función donde se determina si el mouse esta encima de la burbuja, le entra como para metro mouseX y mouseY
  mouseOver(px, py) 
  {
    //distancia que hay entre la posición del mouse y la burbuja
    let distancia = dist(px, py, this.x + 200, this.y);

    //si la distancia entre el mouse y la burbuja es cercana
    if(distancia < 20)
    {
      // entonces la variable over pongala en true
      this.over = true; 
    }
    //si la distancia entre el mouse y la burbuja es lejana
    else
    {   
      // entonces la variable over pongala en false
      this.over = false;
    }
  }

  //muestra la burbuja
  dibujar() 
  {
    stroke(0);
    strokeWeight(0.8);
    noFill();
    //dibuja la burbuja segun los datos obtenidos del archivo en el setup
    ellipse(this.x + 200, this.y, this.diameter, this.diameter);

    //si la variable over es igual a true, es decir, si esta cerca a la burbuja  
    if (this.over == true) 
    {
      fill(0);
      textAlign(CENTER);
      //coloca el texto del dato mas abajo de la burbuja
      text(this.name, this.x +200 , this.y);
    }
  }
}

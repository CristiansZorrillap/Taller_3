import controlP5.*;
//GRAFICAS SUPERIORES
ControlP5 cp55;

Table tabla1;

//el valor en donde se encuentra el slider
int valSlider;


//numero de filas en el archivo
int rowCount;


//variable que guarda toda la información de la columna del tiempo
String [] tiempo;

//segundo
//variable que guarda toda la información de la columna del engativa de suscriptores
int [] engativa;

//tercero
//me da el valor maximo 
int maxDato;
//tamaño de la barra
float [] barraEngativa;

//cuarto
int [] Kennedy;
float [] barraKennedy;

//quinto
int [] suba;
float [] barraSuba;


int [] fontibon;
float [] barraFontibon;

int [] usme;
float [] barraUsme;

int [] chapinero;
float [] barraChapinero;

int [] usaquen;
float [] barraUsaquen;
//sexto
boolean toggleValue = false;


//octavo
Slider2D sliderPunto;


/*----------Variables Calidad de aire-----------*/
ControlP5 cp6;

PImage mapImage;

Table tabla2;

Table coordenadas;

int valSlider2;

int rowCount2;

float x = 0;
float y = 0;



String [] tiempo2;

int [] aireUsaquen;
float [] circulosUsaquen;

int [] aireSuba;
float [] circulosSuba;

int [] aireLasFerias;
float [] circulosLasFerias;

int [] aireKennedy;
float [] circulosKennedy;

int [] airePuenteAranda;
float [] circulosPuenteAranda;

int [] aireCarvajal;
float [] circulosCarvajal;

int [] aireTunal;
float [] circulosTunal;

int [] aireSanCristobal;
float [] circulosSanCristobal;



int maxDato2;

//GRAFICAS INFERIORES
ControlP5 cp5;
PImage mexicoMapa;
PImage bogotaMapa;
PImage limaMapa;

int valorSlider;

int rowCountLima;
int rowCountBogota;
int rowCountMexico;

//Aquí se guardan los días del mes. 
String [] dias;

int maxDatoMapas = 156;

//LOCALIDADES DE LIMA
int [] licampoDeMarte;
float [] licampoCirc;

int [] liUsEmbassy;
float [] liUsCirc;


int [] liSanBorja;
float [] liBorjaCirc;

int [] liSantaAnita;
float [] liSantaCirc;

int [] liSanMartin;
float [] liMartinCirc;

int [] liSanJuan;
float [] liSanCirc;

int [] liCarabaryllo;
float [] liCarabarylloCirc;

//LOCALIDADES DE BOGOTÁ
int [] boGuaymaral;
float [] boGuaymaraloCirc;

int [] boUsaquen;
float [] boUsaquenCirc;

int [] boSuba;
float [] boSubaCirc;

int [] boFerias;
float [] boFeriasCirc;

int [] boAmbiente;
float [] boAmbienteCirc;

int [] boFontibon;
float [] boFontibonCirc;

int [] boPuente;
float [] boPuenteCirc;

int [] boCto;
float [] boCtoCirc;

int [] boKennedy;
float [] boKennedyCirc;

int [] boCarvajal;
float [] boCarvajalCirc;

int [] boTunal;
float [] boTunalCirc;

int [] boCristobal;
float [] boCristobalCirc;

int [] boMovil;
float [] boMovilCirc;

//LOCALIDADES DE MÉXICO
int [] meAtizapan;
float [] meAtizipanCirc;

int [] meBenito;
float [] meBenitoCirc;

int [] meCuajimalpa;
float [] meCuajimalpaCirc;

int [] meCuautitlan;
float [] meCuautitlanCirc;

int [] meAcatlan;
float[] meAcatlanCirc;

int [] meHospital;
float [] meHospitalCirc;

int [] meItzacalco;
float [] meItzacalcoCirc;

int [] meMerced;
float [] meMercedCirc;

int [] mePedregal;
float [] mePedregalCirc;

int [] meSantaFe;
float [] meSantaFeCirc;

int [] meTlahuac;
float [] meTlahuacCirc;

int [] meTlanepantla;
float [] meTlanepantlaCirc;

int [] meIztapalap;
float [] meIztapalapCirc;

int [] meVillas;
float [] meVillasCirc;


Table tablaBogota;

void setup() 
{

  size(1280, 768);
  
  //GRAFICAS SUPERIORES
  tabla1 = loadTable("tablaquesirve.csv", "header");
  
  rowCount = tabla1.getRowCount();
  //println(rowCount + " filas en la tabla");
   
  cp55 = new ControlP5(this);  

  guiSup();
  
  tiempo = new String [rowCount];
  
  
  //segundo
   engativa = new int [rowCount];
  
  //tercero
  barraEngativa = new float [rowCount];
  
  //cuarto
  Kennedy = new int [rowCount];
  barraKennedy = new float [rowCount];
  
  //quinto
  suba = new int [rowCount];
  barraSuba = new float [rowCount];
  
  fontibon = new int [rowCount];
  barraFontibon = new float [rowCount];
  
  usme = new int [rowCount];
  barraUsme = new float [rowCount];
  
  chapinero = new int [rowCount];
  barraChapinero = new float [rowCount];
  
  usaquen = new int [rowCount];
  barraUsaquen = new float [rowCount];
    
  for(int i = 0; i < rowCount; i++)
  {
    //creamos un objeto que guarda la información de las filas de la tabla
    TableRow row = tabla1.getRow(i);
    
    tiempo[i] = row.getString("tiempo");
    
    //segundo
    engativa[i] = row.getInt("Engativa ");
        
    //tercero
    
    if(engativa[i] > maxDato) 
    {
      maxDato =  engativa[i];
    }
    
    
    //cuarto
    Kennedy[i]= row.getInt("Kennedy");
    
    //quinto
    suba[i]= row.getInt("Suba");
    
    fontibon[i]= row.getInt("Fontibon");
    
    usme[i]= row.getInt("Usme");
    
    chapinero[i]= row.getInt("Chapinero");
    
    usaquen[i]= row.getInt("Usaquen");
    
    
    /*-----------Datos de Calidad de Aire-------------*/
    mapa();
  
  }
  
  //GRAFICAS INFERIORES
  mexicoMapa = loadImage("Mexico.png");
  bogotaMapa = loadImage("Bogota.png");
  limaMapa = loadImage("Lima.png");
  
  tablaBogota = loadTable("datosBogota.csv", "header");
   rowCountBogota = tablaBogota.getRowCount();
   println("Cantidad row Bog" + rowCountBogota);
   
  
  cp5 = new ControlP5(this);  
  

  
  //Número de filas por cada tabla. 
 
  gui();
  
  dias = new String [rowCountBogota];
  
  println("Bogotá:" + rowCountBogota);

  

   licampoDeMarte = new int [rowCountBogota];
   licampoCirc = new float [rowCountBogota];
    
   liUsEmbassy = new int [rowCountBogota];
   liUsCirc  = new float [rowCountBogota];
    
   liSanBorja = new int [rowCountBogota];
   liBorjaCirc  = new float [rowCountBogota];
    
   liSantaAnita = new int [rowCountBogota];
   liSantaCirc  = new float [rowCountBogota];
    
   liSanMartin = new int [rowCountBogota];
   liMartinCirc  = new float [rowCountBogota];
    
   liSanJuan = new int [rowCountBogota];
   liSanCirc  = new float [rowCountBogota];
    
   liCarabaryllo = new int [rowCountBogota];
   liCarabarylloCirc  = new float [rowCountBogota];
   
   
   boGuaymaral= new int [rowCountBogota];
   boGuaymaraloCirc = new float [rowCountBogota];
   
   boUsaquen= new int [rowCountBogota];
   boUsaquenCirc = new float [rowCountBogota];
   
   boSuba = new int [rowCountBogota];
   boSubaCirc = new float [rowCountBogota];
   
   boFerias = new int [rowCountBogota];
   boFeriasCirc = new float [rowCountBogota];
   
   boAmbiente = new int [rowCountBogota];
   boAmbienteCirc = new float [rowCountBogota];
   
   boFontibon = new int [rowCountBogota];
   boFontibonCirc = new float [rowCountBogota];
   
   boPuente = new int [rowCountBogota];
   boPuenteCirc = new float [rowCountBogota];
   
   boCto= new int [rowCountBogota];
   boCtoCirc = new float [rowCountBogota];
   
   boKennedy= new int [rowCountBogota];
   boKennedyCirc = new float [rowCountBogota];
   
   boCarvajal= new int [rowCountBogota];
   boCarvajalCirc = new float [rowCountBogota];
  
   boTunal= new int [rowCountBogota];
   boTunalCirc = new float [rowCountBogota];
  
   boMovil= new int [rowCountBogota];
   boMovilCirc = new float [rowCountBogota];
   
   
  
   
   meVillas = new int [rowCountBogota];
   meVillasCirc = new float [rowCountBogota];
  

    
  for(int i = 0; i < rowCountBogota; i++)
  {
    //creamos un objeto que guarda la información de las filas de la tabla
    TableRow row = tablaBogota.getRow(i);
    
    dias[i] = row.getString("tiempo");
    
        
    //tercero
    
    
   licampoDeMarte[i]= row.getInt("Campo de Marte");
   liUsEmbassy[i]= row.getInt("Embassy");
   liSanBorja[i]= row.getInt("San Borja");
   liSantaAnita[i]= row.getInt("Santa Anita");
   liSanMartin[i]= row.getInt("San Martin de Porres");
   liSanJuan[i]= row.getInt("San Juan de Lurigancho");
   liCarabaryllo[i]= row.getInt("Carabaryllo");
   
   boGuaymaral[i]= row.getInt("Guaymaral");
   
   boUsaquen[i]= row.getInt("Usaquen");
   
   boSuba[i] = row.getInt("Suba");
   
   boFerias[i] = row.getInt("Las Ferias");
   
   boAmbiente[i] = row.getInt("MinAmbiente");
   
   boFontibon[i] = row.getInt("Fontibon");
   
   boPuente[i] = row.getInt("Puente Aranda");
   
   boCto[i]= row.getInt("Cto. Alto Rendimiento");
 
   boKennedy[i]= row.getInt("Kennedy");
 
   boCarvajal[i]= row.getInt("Carvajal");
  
   boTunal[i]= row.getInt("Tunal");
  
   boMovil[i]= row.getInt("Movilma");
   
  }
}

 //MÉTODO PARA GRÁFICAS SUPERIORES
 void mapa(){
  
    tabla2 = loadTable("calidad2.csv", "header");
    
    rowCount2 = tabla2.getRowCount();
  
  cp6 = new ControlP5(this);  
  
  newGui();
  

    tiempo2 = new String [rowCount2];
    
  aireSuba = new int [rowCount2];
  circulosSuba = new float [rowCount2];
  
  aireUsaquen = new int [rowCount2];
  circulosUsaquen = new float [rowCount2];
  
  aireLasFerias = new int [rowCount2];
  circulosLasFerias = new float [rowCount2];
  
  airePuenteAranda = new int [rowCount2];
  circulosPuenteAranda = new float [rowCount2];
  
  aireKennedy = new int [rowCount2];
  circulosKennedy = new float [rowCount2];
  
  aireCarvajal = new int [rowCount2];
  circulosCarvajal = new float [rowCount2];
  
  aireTunal = new int [rowCount2];
  circulosTunal = new float [rowCount2];
  
  aireSanCristobal = new int [rowCount2];
  circulosSanCristobal = new float [rowCount2];
  
  mapImage = loadImage("map.png");
  
  for(int i = 0; i < rowCount2; i++)
  {
    //creamos un objeto que guarda la información de las filas de la tabla
    TableRow row = tabla2.getRow(i);
    
    //tiempo2[i] = row.getString("tiempo");
    tiempo2[i] = row.getString("tiempo");
    //segundo
    aireSuba[i] = row.getInt("Suba");
    
    aireUsaquen[i] = row.getInt("Usaquen");
    
    aireLasFerias[i] = row.getInt("Las Ferias");
    
    airePuenteAranda[i] = row.getInt("Puente Aranda");
    
    aireKennedy[i] = row.getInt("Kennedy");
    
    aireCarvajal[i] = row.getInt("Carvajal");
    
    aireTunal[i] = row.getInt("Tunal");
    
    //aireSanCristobal[i] = row.getInt("San Cristobal");
    
        
    //tercero
      if(aireSuba[i] > maxDato2) 
    {
      maxDato2 =  aireSuba[i];
    }


  }
}





void draw() 
{
  background(#041F30); 
  barras();
  circulos();
  drawCircles();  
}

void gui()
{ 
    //slider
    cp5.addSlider("valorSlider")
     .setPosition(100,720)
     .setWidth(650)
     .setRange(0,rowCountBogota-1) 
     .setValue(0)
     .setNumberOfTickMarks(rowCountBogota)
     .setSliderMode(Slider.FLEXIBLE)
     ;
}

void guiSup()
{ 
    //slider
    cp55.addSlider("valSlider")
     .setPosition(10,380)
     .setWidth(450)
     .setRange(0,rowCount-1) 
     .setValue(1)
     .setNumberOfTickMarks(rowCount)
     .setSliderMode(Slider.FLEXIBLE)
     ;
}

void newGui(){
   cp6.addSlider("valSlider2")
     .setPosition(520,380)
     .setWidth(450)
     .setRange(0,rowCount2-1) 
     .setValue(1)
     .setNumberOfTickMarks(rowCount2)
     .setSliderMode(Slider.FLEXIBLE)
     ;
}

//GRÁFICAS
void barras() 
{
    println(valSlider);  
    
    textSize(10);    
    fill(255);
    for(int i = 0; i < rowCount; i++)
    { 
      float x = map(i, 0, rowCount-1, 5, 442);
      text(tiempo[i], x, 360);
      
      pushMatrix();
      translate(x,370);
      rotate(PI/2);
      //se coloca el texto en cada linea
      //text(tiempo[i], 0, 0);
      popMatrix();      
    }
    
    //tercero
    textSize(16);    
    fill(#C2D5FC);
    text(engativa[valSlider]+" Engativa",310,30);
    
    //cuarto
    fill(#81A8FA);
    text(Kennedy[valSlider]+" Kennedy",310,70);
    
    //quinto
    fill(#5288F7);
    text(suba[valSlider]+" Suba",310,120);
    
    fill(#3772ED);
    text(fontibon[valSlider]+" Fontibón",310,160);
    
    fill(#1856D8);
    text(usme[valSlider]+" Usme",310,200);
    
    fill(#0E48C1);
    text(chapinero[valSlider]+" Chapinero",310,240);
    
    fill(#012E8B);
    text(usaquen[valSlider]+" Usaquen",310,300);
    
    
    //tercero    
    
    for(int i = 0; i < rowCount; i++)
    {
      barraEngativa[i] = map(engativa[i], 0, maxDato, 0, 200);
      
      //cuarto      
      barraKennedy[i] = map(Kennedy[i], 0, maxDato, 0, 200);
      
      //quinto      
      barraSuba[i] = map(suba[i], 0, maxDato, 0, 200);
      
       barraFontibon[i] = map(fontibon[i], 0, maxDato, 0, 200);
       
       barraUsme[i] = map(usme[i], 0, maxDato, 0, 200);
       
       barraChapinero[i] = map(chapinero[i], 0, maxDato, 0, 200);
       
       barraUsaquen[i] = map(usaquen[i], 0, maxDato, 0, 200);
    }
    
    
    //tercero
    fill(#C2D5FC);
    rect(30,60,barraEngativa[valSlider], 40);
    fill(255);
    //text(barraEngativa[valSlider]+" culo",420,250);
    
    //cuarto
    fill(#81A8FA);
    rect(30,100,barraKennedy[valSlider], 40);  
    fill(255);
    //text(barraKennedy[valSlider]+" Kennedy",420,280);
     
    //quinto
    fill(#5288F7);
    rect(30,140,barraSuba[valSlider], 40);  
    fill(255);
    //text(barraSuba[valSlider]+" suba",420,310);
      
      fill(#3772ED);
    rect(30,180,barraFontibon[valSlider], 40);  
    fill(255);
    
    fill(#1856D8);
    rect(30,220,barraUsme[valSlider], 40);  
    fill(255);
    
    fill(#0E48C1);
    rect(30,260,barraChapinero[valSlider], 40);  
    fill(255);
    
     fill(#012E8B);
    rect(30,300,barraUsaquen[valSlider], 40);  
    fill(255);
    //sexto  
    
    if(toggleValue==true) 
    {
     // fill(255);
      //text(barraSuba[valSlider]+" suba",420,310);
    }
    
}

void circulos(){
   textSize(10);
  for(int i = 0; i < rowCount2; i++)
    { 
      float x = map(i, 0, rowCount2-1, 487, 927);
      text(tiempo2[i], x, 360);
      
      pushMatrix();
      translate(x,370);
      rotate(PI/2);
      //se coloca el texto en cada linea
      //text(tiempo[i], 0, 0);
      popMatrix();      
    }
  
    image(mapImage, 480, 60);
    textSize(10);    
    fill(255);
    for(int i = 0; i < rowCount2; i++)
    { 

      
     circulosSuba[i] = map(aireSuba[i], 0, maxDato2, 0, 40);
     circulosUsaquen[i] = map(aireUsaquen[i], 0, maxDato2, 0, 40);
     circulosLasFerias[i] = map(aireLasFerias[i], 0, maxDato2, 0, 40);
      circulosKennedy[i] = map(aireKennedy[i], 0, maxDato2, 0, 40);
       circulosTunal[i] = map(aireTunal[i], 0, maxDato2, 0, 40);
        circulosCarvajal[i] = map(aireCarvajal[i], 0, maxDato2, 0, 40);
         //circulosSanCristobal[i] = map(aireSanCristobal[i], 0, maxDato2, 0, 70);
         circulosPuenteAranda[i] = map(airePuenteAranda[i], 0, maxDato2, 0, 40);
   
    
    }
    //diametro = map(columna3, dataMinColumna3, dataMaxColumna3, 10, 60);
    //tercero
     
    
   
    fill(#FFFFFF);
    
    ellipse(555,  173,circulosSuba[valSlider2], circulosSuba[valSlider2]);
    text("Suba", 550,300);
    fill(255);
    fill(#BCD2FF);
    ellipse(504,  70,circulosUsaquen[valSlider2], circulosUsaquen[valSlider2]);
    text("Usaquén", 550,320);
    fill(255);
    fill(#92AFED);
    ellipse(594,  162,circulosLasFerias[valSlider2], circulosLasFerias[valSlider2]);
    text("Las Ferias", 610,300);
    fill(255);
    fill(#6C90DB);
    ellipse(640,  152,circulosKennedy[valSlider2], circulosKennedy[valSlider2]);
    text("Kennedy", 610,320);
    fill(255);
    fill(#4B75CE);
    ellipse(634,  202,circulosTunal[valSlider2], circulosTunal[valSlider2]);
    text("Tunal", 700,300);
    fill(255);
    fill(#345EB7);
    ellipse(640,  241,circulosCarvajal[valSlider2], circulosCarvajal[valSlider2]);
    text("Carvajal", 700,320);
    fill(255);
    fill(#1844A0);
    ellipse(711,  198,circulosPuenteAranda[valSlider2], circulosPuenteAranda[valSlider2]);
    text("Puente Aranda", 750,310);
    fill(255);
    //fill(#C2D5FC);
    //ellipse(x,y,circulosSanCristobal[valSlider2], circulosSanCristobal[valSlider2]);
    //fill(255);
    noStroke();
    
    textSize(12);    
    fill(#000000);
    text(aireSuba[valSlider2],545,  176);
    text(aireUsaquen[valSlider2],496,  74);
    text(aireLasFerias[valSlider2],585,  167);
    text(aireKennedy[valSlider2],630,  158);
    text(aireTunal[valSlider2],625,  205);
    text(aireCarvajal[valSlider2],632,  245);
    text(airePuenteAranda[valSlider2],704,  200);
}

void drawCircles() 
{
    println("Este es slider" + valorSlider);  
    textSize(10);    
    for(int i = 0; i < rowCountBogota; i++)
    { 
      float x = map(i, 0, rowCountBogota-1, 103, 740);
      text(dias[i], x, 710);
      
      pushMatrix();
      translate(x,370);
      rotate(PI/2);
      
      popMatrix();      

    }
    
   image(limaMapa, 44,464);
   image(bogotaMapa, 462,484);
   
    
    textSize(10);    
    fill(255);
    
    for(int i = 0; i < rowCountBogota; i++)
    { 

    licampoCirc[i] = map(licampoDeMarte[i], 0, maxDatoMapas, 0, 200);
   
    liUsCirc[i]= map(liUsEmbassy[i], 0, maxDatoMapas, 0, 200);
    liBorjaCirc[i]= map(liSanBorja[i], 0, maxDatoMapas, 0, 200);
    liSantaCirc[i] = map(liSantaAnita[i], 0, maxDatoMapas, 0, 200);
    liMartinCirc[i]= map(liSanMartin[i], 0, maxDatoMapas, 0, 200);
    liSanCirc[i]= map(liSanJuan[i], 0, maxDatoMapas, 0, 200);
    liCarabarylloCirc[i] = map(liCarabaryllo[i], 0, maxDatoMapas, 0, 200);
    
    boGuaymaraloCirc[i]= map(boGuaymaral[i], 0, maxDatoMapas, 0, 200);
    boUsaquenCirc[i]= map(boUsaquen[i], 0, maxDatoMapas, 0, 200);
    boSubaCirc[i]= map(boSuba[i], 0, maxDatoMapas, 0, 200);
    boFeriasCirc[i]= map(boFerias[i], 0, maxDatoMapas, 0, 200);
    boAmbienteCirc[i]= map(boAmbiente[i], 0, maxDatoMapas, 0, 200);
    boFontibonCirc[i]= map(boFontibon[i], 0, maxDatoMapas, 0, 200);
    boPuenteCirc[i]= map(boPuente[i], 0, maxDatoMapas, 0, 200);
    boCtoCirc[i]= map(boCto[i], 0, maxDatoMapas, 0, 200);
    boKennedyCirc[i]= map(boKennedyCirc[i], 0, maxDatoMapas, 0, 200);
    boCarvajalCirc[i]= map(boCarvajal[i], 0, maxDatoMapas, 0, 200);
    boTunalCirc[i]= map(boTunal[i], 0, maxDatoMapas, 0, 200);
   
    
    }
    
    noStroke();
    fill(#00BFFF);
    ellipse(97,  654,licampoDeMarte[valorSlider],licampoDeMarte[valorSlider]);
    
     fill(#6996AD);
    ellipse(136,  612,liSanBorja[valorSlider],liSanBorja[valorSlider]);
    
   fill(#009ACD);
    ellipse(251,  645, liUsEmbassy[valorSlider], liUsEmbassy[valorSlider]);
    
    fill(#6996AD);
    ellipse(183,  551,liSantaAnita[valorSlider], liSantaAnita[valorSlider]);
    
    fill(#00BFFF);
    ellipse(243,  581,liSanMartin[valorSlider], liSanMartin[valorSlider]);
    
    fill(#009ACD);
    ellipse(234,  516,liSanJuan[valorSlider], liSanJuan[valorSlider]);
 
    
    fill(#009ACD);
    ellipse(507,  510,boGuaymaral[valorSlider], boGuaymaral[valorSlider]);
    
    fill(#00BFFF);
    ellipse(591,  505,boUsaquen[valorSlider], boUsaquen[valorSlider]);
    
    fill(#6996AD);
    ellipse(536,  561,boSuba[valorSlider], boSuba[valorSlider]);
    
    fill(#009ACD);
    ellipse(642,  553,boAmbiente[valorSlider], boAmbiente[valorSlider]);
    
    fill(#009ACD);
    ellipse(586,  559,boFontibon[valorSlider], boFontibon[valorSlider]);
    
   fill(#6996AD);
    ellipse(693,  539,boPuente[valorSlider], boPuente[valorSlider]);
    
   fill(#00BFFF);
   ellipse(651,  608,boKennedy[valorSlider], boKennedy[valorSlider]);
    
   fill(#6996AD);
   ellipse(711,  657,boCarvajal[valorSlider], boCarvajal[valorSlider]);
    
   fill(#6996AD);
    ellipse(733, 670,boTunal[valorSlider], boTunal[valorSlider]);
    
    textSize(12);    
    fill(#000000);
    text(licampoDeMarte[valorSlider],97, 654);
    text(liSanBorja[valorSlider],136, 612);
    text(liUsEmbassy[valorSlider],251,  645);
    text(liSantaAnita[valorSlider], 183,  551);
    text(liSanMartin[valorSlider],243,  581);
    text(liSanJuan[valorSlider],234,  516);
    text(liCarabaryllo[valorSlider],507,  510);
    
     text(boUsaquen[valorSlider],583, 505);
      text(boGuaymaral[valorSlider],507, 510);
    text(boSuba[valorSlider], 536,  561);
    text(boAmbiente[valorSlider],642,  553);
    text(boFontibon[valorSlider],586,  559);
    text(boPuente[valorSlider],693,  539);
    text(boKennedy[valorSlider],651,  608);
    text(boCarvajal[valorSlider],711,  657);
    text(boTunal[valorSlider],733, 670);
  
}

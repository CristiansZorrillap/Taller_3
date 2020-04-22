class Rectangle 
{
  constructor(name, posX, posY, height, width) 
  {
  	this.name = name;
    this.x = posX;
  	this.y = posY;
    this.height = height;
    this.width = width;
  }

  mostrar()
  {
  	stroke(0);
    strokeWeight(0.8);
  	rect(this.x,this.y,this.width,this.height);
  }
}
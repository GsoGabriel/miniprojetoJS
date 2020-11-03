var imgOriginal;
var imgFiltrada;
var can;

function fileUpload() {
	can = document.getElementById("can");
	var fileUpload = document.getElementById("fileUpload");
	imgOriginal = new SimpleImage(fileUpload);
	imgOriginal.drawTo(can);
}

function filterGrayscale() {
	imgFiltrada = new SimpleImage(imgOriginal.getWidth(), imgOriginal.getHeight());
	for(var pixel of imgOriginal.values()){
		var x = pixel.getX();
		var y = pixel.getY();
		var getRed = pixel.getRed();
		var getGreen = pixel.getGreen();
		var getBlue = pixel.getBlue();
		var media = (getRed+getGreen+getBlue)/3;
		var imgPixel = imgFiltrada.getPixel(x, y);
		imgPixel.setRed(media);
		imgPixel.setGreen(media);
		imgPixel.setBlue(media);
		imgFiltrada.setPixel(x,y, imgPixel);
	}
	var context = can.getContext("2d");
	context.clearRect(0,0,can.width,can.height);
	imgFiltrada.drawTo(can);
}

function filterInverse() {	
	imgFiltrada = new SimpleImage(imgOriginal.getWidth(), imgOriginal.getHeight());
	for(var pixel of imgOriginal.values()){
		var x = pixel.getX();
		var y = pixel.getY();
		var getRed = pixel.getRed();
		var getGreen = pixel.getGreen();
		var getBlue = pixel.getBlue();
		var imgPixel = imgFiltrada.getPixel(imgOriginal.getWidth() - x - 1, y);
		imgPixel.setRed(getRed);
		imgPixel.setGreen(getGreen);
		imgPixel.setBlue(getBlue);
		imgFiltrada.setPixel(imgOriginal.getWidth() - x - 1, y, imgPixel);
		
	}
	var context = can.getContext("2d");
	context.clearRect(0,0,can.width,can.height);
	imgFiltrada.drawTo(can);
}

function filterRed() {
	imgFiltrada = new SimpleImage(imgOriginal.getWidth(), imgOriginal.getHeight());
	for(var pixel of imgOriginal.values()){
		var x = pixel.getX();
		var y = pixel.getY();
		var getRed = pixel.getRed();
		var getGreen = pixel.getGreen();
		var getBlue = pixel.getBlue();
		var media = (getRed+getGreen+getBlue)/3;
		var imgPixel = imgFiltrada.getPixel(x, y);
		if (media < 128){
			imgPixel.setRed(media*2);
			imgPixel.setGreen(0);
			imgPixel.setBlue(0);
		}
		else{
			imgPixel.setRed(255);
			imgPixel.setGreen(2*media - 255);
			imgPixel.setBlue(2*media - 255);
		}
		imgFiltrada.setPixel(x,y, imgPixel);
	}
	var context = can.getContext("2d");
	context.clearRect(0,0,can.width,can.height);
	imgFiltrada.drawTo(can);
}

function reset() {
	var context = can.getContext("2d");
	context.clearRect(0,0,can.width,can.height);
	imgOriginal.drawTo(can);
}
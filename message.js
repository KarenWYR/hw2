function setup() {
  createCanvas(700, 1000);
}

function draw() {
  background(220);
}

function printA(x, y) {
  line(x, y, x, y + 50);
  line(x, y, x + 25, y + 50);
  line(x, y + 25, x + 12.5, y + 25);
}

function printB(x, y) {
  line(x, y, x, y + 50);
  line(x, y, x + 25, y + 12.5);
  line(x, y + 25, x + 25, y + 12.5);
  line(x, y + 25, x + 25, y + 37.5);
  line(x, y + 50, x + 25, y + 37.5);
}

function printC(x, y) {
  line(x + 25, y, x, y + 25);
  line(x, y + 25, x + 25, y + 50);
}

function printD(x, y) {
  line(x, y, x + 25, y + 25);
  line(x + 25, y + 25, x, y + 50);
  line(x, y, x, y + 50);
}

function printE(x, y) {
  line(x + 25, y, x, y + 25);
  line(x, y + 25, x + 25, y + 50);
  line(x, y + 25, x + 25, y + 25);
}

function printF(x, y) {
  line(x + 25, y, x, y + 25);
  line(x, y + 25, x + 25, y + 25);
  line(x, y + 25, x, y + 50);
}

function printG(x, y) {
  line(x + 25, y, x, y + 25);
  line(x, y + 25, x + 25, y + 50);
  line(x + 12.5, y + 25, x + 25, y + 25);
  line(x + 25, y + 25, x + 25, y + 50);
  line(x, y + 25, x + 25, y + 50);
}

function printH(x, y) {
  line(x, y, x + 8.75, y + 25);
  line(x + 25, y, x + 16.25, y + 25);
  line(x + 8.75, y + 25, x + 16.25, y + 25);
  line(x + 8.75, y + 25, x, y + 50);
  line(x + 16.25, y + 25, x + 25, y + 50);
}

function printI(x, y) {
  line(x, y, x + 8.75, y);
  line(x, y + 50, x + 8.75, y + 50);
  line(x, y, x, y + 50);
}

function printJ(x, y) {
  line(x + 25, y, x + 25, y + 50);
  line(x, y + 25, x + 25, y + 50);
}

function printK(x, y) {
  line(x, y, x, y + 50);
  line(x, y + 25, x + 25, y);
  line(x, y + 25, x + 25, y + 50);
}

function printL(x, y) {
  line(x, y, x, y + 50);
  line(x, y + 50, x + 25, y + 50);
}

function printM(x, y) {
  line(x, y, x, y + 50);
  line(x + 25, y, x + 25, y + 50);
  line(x, y, x + 12.5, y + 25);
  line(x + 25, y, x + 12.5, y + 25);
}

function printN(x, y) {
  line(x, y, x, y + 50);
  line(x, y, x + 25, y + 25);
  line(x + 25, y, x + 25, y + 50);
}

function printO(x, y) {
  line(x + 12.5, y, x, y + 25);
  line(x + 12.5, y, x + 25, y + 25);
  line(x, y + 25, x + 12.5, y + 50);
  line(x + 12.5, y + 50, x + 25, y + 25);
}

function printP(x, y) {
  line(x, y, x, y + 50);
  line(x, y, x + 25, y + 12.5);
  line(x, y + 25, x + 25, y + 12.5);
}

function printQ(x, y) {
  line(x, y, x, y + 50);
  line(x, y + 50, x + 25, y + 25);
  line(x, y, x + 25, y);
  line(x + 25, y, x + 25, y + 25);
  line(x + 12.5, y + 25, x + 25, y + 50);
}

function printR(x, y) {
  line(x, y, x, y + 50);
  line(x, y, x + 25, y + 12.5);
  line(x + 25, y + 12.5, x, y + 25);
  line(x, y + 25, x + 25, y + 50);
}

function printS(x, y) {
  line(x + 25, y, x, y + 25);
  line(x, y + 25, x + 25, y + 25);
  line(x + 25, y + 25);
  line(x + 25, y + 25, x, y + 50);
}

function printT(x, y) {
  line(x, y, x + 25, y);
  line(x + 12.5, y, x + 12.5, y + 50);
}

function printU(x, y) {
  line(x, y, x, y + 25);
  line(x, y + 25, x + 12.5, y + 50);
  line(x + 25, y, x + 25, y + 25);
  line(x + 25, y + 25, x + 12.5, y + 50);
}

function printV(x, y) {
  line(x, y, x + 12.5, y + 50);
  line(x + 25, y, x + 12.5, y + 50);
}

function printW(x, y) {
  line(x, y, x, y + 25);
  line(x, y + 25, x + 8.3, y + 50);
  line(x + 8.3, y + 50, x + 12.5, y + 25);
  line(x + 12.5, y + 25, x + 16.7, y + 50);
  line(x + 16.7, y + 50, x + 25, y + 25);
  line(x + 25, y, x + 25, y + 25);
}

function printX(x, y) {
  line(x, y, x + 25, y + 50);
  line(x + 25, y, x, y + 50);
}

function printY(x, y) {
  line(x, y, x + 12.5, y + 25);
  line(x + 25, y, x + 12.5, y + 25);
  line(x + 12.5, y + 25, x + 12.5, y + 50);
}

function printZ(x, y) {
  line(x, y, x + 25, y + 25);
  line(x, y + 25, x + 25, y + 25);
  line(x, y + 25, x + 25, y + 50);
}

function printcomma(x, y) {
  line(x + 5, y + 40, x, y + 50);
}

function printperiod(x, y) {
  line(x + 2, y + 48, x, y + 50);
}

function draw() {
  background(60, 110, 130)
  printS(20, 20) //sorry
  printO(50, 20)
  printR(80, 20)
  printR(110, 20)
  printY(140, 20)
  printcomma(170, 20)
  printT(190, 20) //the
  printH(220, 20)
  printE(250, 20)
  printH(310, 20) //homework
  printO(340, 20)
  printM(370, 20)
  printE(400, 20)
  printW(430, 20)
  printO(460, 20)
  printR(490, 20)
  printK(520, 20)
  printI(580, 20) //is
  printS(595, 20)
  printU(20, 100) //uploaded
  printP(50, 100)
  printL(80, 100)
  printO(110, 100)
  printA(140, 100)
  printD(170, 100)
  printE(200, 100)
  printD(230, 100)
  printA(290, 100) //a
  printL(350, 100) //little
  printI(380, 100)
  printT(395, 100)
  printT(425, 100)
  printL(455, 100)
  printE(485, 100)
  printL(545, 100) //late
  printA(575, 100)
  printT(605, 100)
  printE(635, 100)
  printperiod(670, 100)
}

function setup() {
  createCanvas(700, 200);
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

function draw() {
  background(60, 110, 130)
  printA(20, 20)
  printB(70, 20)
  printC(120, 20)
  printD(170, 20)
  printE(220, 20)
  printF(270, 20)
  printG(320, 20)
  printH(370, 20)
  printI(420, 20)
  printJ(445, 20)
  printK(495, 20)
  printL(545, 20)
  printM(595, 20)
  printN(645, 20)
  printO(20, 100)
  printP(70, 100)
  printQ(120, 100)
  printR(170, 100)
  printS(220, 100)
  printT(270, 100)
  printU(320, 100)
  printV(370, 100)
  printW(420, 100)
  printX(470, 100)
  printY(520, 100)
  printZ(570, 100)
}

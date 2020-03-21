function setup() {
    noSmooth(); //ZAPAMIETAJ NA ZAWSZE TO ANTYALIASIGN
    createCanvas(800, 450);
}

function draw() {
    resizeCanvas(windowWidth - 520, 450);
    background("#ffffff");
    noFill();
    rect(10, 10, 100, 100);
}

function mouseDragged() {
    return false;
}
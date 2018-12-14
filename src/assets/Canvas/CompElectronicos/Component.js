
class Componente{
    constructor(sketch, gridSize, img, ins = [], outs = []) {

        this.gridSize = gridSize || sketch.createVector()

		this.ins = ins
        this.outs = outs

        this.sketch = sketch

        this.pos = sketch.createVector()

        this.cellSize = 20

        this.img = this.imgs[img]
    }

    render(){
        this.sketch.push()
        // this.sketch.strokeWeight(1)
        // //this.sketch.fill(0)
        // this.sketch.stroke(100)
        // for (let i = 0; i < this.gridSize.x; i++){
        //     for (let j = 0; j < this.gridSize.y; j++){
        //         this.sketch.rect(
        //             (this.pos.x - this.cellSize/4) + i * this.cellSize,
        //             (this.pos.y - this.cellSize/4) + j * this.cellSize,
        //             this.cellSize,
        //             this.cellSize)
        //     }
        // }

        this.renderImage()

        this.sketch.pop()
    }

    renderImage(){
        const imgDim = {
            x: this.pos.x + (this.cellSize * this.gridSize.x)/2 - this.cellSize/4,
            y: this.pos.y + (this.cellSize * this.gridSize.y)/2 - this.cellSize/4,
            w: this.gridSize.x * this.cellSize * 0.7,
            h: this.gridSize.y * this.cellSize * 0.7
        }

        this.sketch.imageMode(this.sketch.CENTER)
        this.sketch.image(this.img, imgDim.x, imgDim.y, imgDim.w, imgDim.h)
    }
}

Componente.prototype.componentes = {}

export function addComponent(name, comp){
    Componente.prototype.componentes[name] = comp
}

export function getComponent(name){
    return Componente.prototype.componentes[name]
}

Componente.prototype.imgs = {}

export function setupIconComp(sketch,ImageNames){
    ImageNames.forEach(img => {
        Componente.prototype.imgs[img] = undefined
        sketch.loadImage('/IconComp/' + img + '.png',
            (x) => Componente.prototype.imgs[img] = x,
            ( ) => console.log('Wrong!')
        )
    })
}

export default Componente
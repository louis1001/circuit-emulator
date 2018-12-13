
class Componente{
    constructor(sketch, gridSize, img, ins = [], outs = []) {

        this.gridSize = gridSize || sketch.createVector()

		this.ins = ins
        this.outs = outs

        this.sketch = sketch

        this.pos = sketch.createVector()

        this.cellSize = 20

        this.img = this.prototype.imgs[img]
    }

    render(){
        this.sketch.push()
        this.sketch.strokeWeight(1)
        this.sketch.fill(0)
        this.sketch.stroke(100)
        for (let i = 0; i < this.gridSize.x; i++){
            for (let j = 0; j < this.gridSize.y; j++){
                this.sketch.rect((this.pos.x - 5) + i * 20, (this.pos.y - 5) + j * 20, 20, 20)
            }
        }
        this.sketch.pop()
    }
}

Componente.prototype.imgs = {}

export function setupIconComp(sketch,ImageNames){
    console.log('Wrong!')    
    ImageNames.forEach(img => {
        Componente.prototype.imgs[img] = undefined
        sketch.loadImage('/IconComp/' + img + '.png',
            (x) => Componente.prototype.imgs[img] = x,
            ( ) => console.log('Wrong!')
        )
    })
}

export default Componente
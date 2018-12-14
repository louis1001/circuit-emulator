import Component from './Component'

class Cable extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 0)]
        const outs = [sketch.createVector(1, 0)]

        const gridSize = sketch.createVector(2, 1)

        const mouseOffset = sketch.createVector(0, 0)

        super(sketch, gridSize, 'Resistencia', ins, outs, mouseOffset)

        this.points = []

        this.imgScale = 0.8
    }

    renderImage(){

        this.sketch.stroke('#FC003F')
        this.sketch.strokeWeight(4)
        this.sketch.line(
            this.pos.x,// + this.cellSize/4,
            this.pos.y + this.cellSize/4,
            this.pos.x - this.cellSize/2 + (this.gridSize.x * this.cellSize),
            this.pos.y + this.cellSize/4,
        )
    }
}

export default Cable
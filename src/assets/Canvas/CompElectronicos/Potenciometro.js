import Component from './Component'

class Potenciometro extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 2), sketch.createVector(2, 2)]
        const outs = [sketch.createVector(1, 2)]

        const gridSize = sketch.createVector(3, 3)

        const mouseOffset = sketch.createVector(1, 3)

        super(sketch, gridSize, 'Potenciometro', ins, outs, mouseOffset)

        this.imgScale = 0.85
    }
}

export default Potenciometro
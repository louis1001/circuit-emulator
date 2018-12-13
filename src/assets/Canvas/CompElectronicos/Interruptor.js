import Component from './Component'

class Interructor extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 0)]
        const outs = [sketch.createVector(1, 1), sketch.createVector(2, 0)]

        const gridSize = sketch.createVector(3, 2)

        const mouseOffset = sketch.createVector(1, 0)

        super(sketch, gridSize, 'Interructor', ins, outs, mouseOffset)

        this.imgScale = 0.8
    }
}

export default Interructor
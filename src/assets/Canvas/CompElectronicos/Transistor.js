import Component from './Component'

class Transistor extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 3), sketch.createVector(2, 3)]
        const outs = [sketch.createVector(1, 3)]

        const gridSize = sketch.createVector(3, 4)

        const mouseOffset = sketch.createVector(1, 3)

        super(sketch, gridSize, 'Transistor', ins, outs, mouseOffset)

        this.imgScale = 0.85
    }
}

export default Transistor
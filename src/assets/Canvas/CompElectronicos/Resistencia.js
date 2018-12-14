import Component from './Component'

class Resistencia extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 0)]
        const outs = [sketch.createVector(2, 0)]

        const gridSize = sketch.createVector(3, 1)

        super(sketch, gridSize, 'Resistencia', ins, outs)
    }
}

export default Resistencia
import Component from './Component'

class Resistencia extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(2, 0)]
        const outs = [sketch.createVector(2, 2)]

        const gridSize = sketch.createVector(3, 3)

        super(sketch, gridSize, 'Bateria', ins, outs)
    }
}

export default Resistencia
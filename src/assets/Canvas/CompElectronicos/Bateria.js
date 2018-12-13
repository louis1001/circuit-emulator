import Component from './Component'

class Resistencia extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(2, 0)]
        const outs = [sketch.createVector(2, 2)]

        const gridSize = sketch.createVector(3, 3)

        const mouseOffset = sketch.createVector(2, 0)

        super(sketch, gridSize, 'Bateria', ins, outs, mouseOffset)

        this.imgScale = 0.9
    }
}

export default Resistencia
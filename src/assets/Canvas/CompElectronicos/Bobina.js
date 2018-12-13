import Component from './Component'

class Bobina extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 2)]
        const outs = [sketch.createVector(2, 2)]

        const gridSize = sketch.createVector(3, 3)

        const mouseOffset = sketch.createVector(0, 2)

        super(sketch, gridSize, 'Bobina', ins, outs, mouseOffset)

        this.imgScale = 0.8
    }
}

export default Bobina
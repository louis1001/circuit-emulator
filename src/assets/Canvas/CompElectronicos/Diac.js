import Component from './Component'

class Diac extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 0)]
        const outs = [sketch.createVector(2, 0)]

        const gridSize = sketch.createVector(3, 1)

        const mouseOffset = sketch.createVector(1, 0)

        super(sketch, gridSize, 'Diac', ins, outs, mouseOffset)

        this.imgScale = 0.7
    }
}

export default Diac
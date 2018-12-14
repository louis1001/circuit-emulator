import Component from './Component'

class LED extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 2)]
        const outs = [sketch.createVector(1, 2)]

        const gridSize = sketch.createVector(2, 3)

        super(sketch, gridSize, 'LED', ins, outs)
    }
}

export default LED
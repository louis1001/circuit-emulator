import Component from './Component'

class Condensador extends Component{
	constructor(sketch){
		const ins = [sketch.createVector(0, 2)]
        const outs = [sketch.createVector(1, 2)]

        const gridSize = sketch.createVector(2, 3)

        const mouseOffset = sketch.createVector(0, 2)

        super(sketch, gridSize, 'Condensador', ins, outs, mouseOffset)

        this.imgScale = 0.8
    }
}

export default Condensador
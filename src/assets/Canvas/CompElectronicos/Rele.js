import Component from './Component'

class Rele extends Component{
	constructor(sketch){
		const ins = []//[sketch.createVector(0, 0)]
        const outs = []//[sketch.createVector(1, 1), sketch.createVector(2, 0)]

        const gridSize = sketch.createVector(3, 3)

        const mouseOffset = sketch.createVector(1, 1)

        super(sketch, gridSize, 'Rele', ins, outs, mouseOffset)

        this.imgScale = 0.8
    }
}

export default Rele
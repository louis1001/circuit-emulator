
export default class Componente{
    constructor(sketch, gridSize, ins = [], outs = []) {

        this.gridSize = gridSize || sketch.createVector()

		this.ins = ins
        this.outs = outs

        this.sketch = sketch
	}
}
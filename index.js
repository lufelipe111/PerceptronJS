class Perceptron {
  constructor(eta = 0.1, numIterations = 10) {
    this.#eta = eta
    this.#numIterations = numIterations
  }

  #eta
  #numIterations
  #weights
  #errors

  fit(data, headers) {
    this.#weights = data.map(_ => 0)
    for (let idx = 0; idx < this.#numIterations; idx++) {
      let errors = 0
      for (let innerIdx = 0; innerIdx < data.length; innerIdx++) {
        let cell = data[innerIdx]
        let target = headers[innerIdx]
        update = this.#eta * (target - this.predict(cell))

        for (let i = 1; i < this.#weights.length; i++) {
          this.#weights[i] += update * cell
        }

        this.#weights[0] += update

        if (update !== 0) errors++;
      }
      this.#errors = this.#errors.push(errors)
    }
  }

  predict(x) {
    return this.netValue(x) >= 0.0 ? 1 : -1
  }

  netValue(x) {
    // implementar produto escalar de dois vetores
  }
}

const p = new Perceptron()

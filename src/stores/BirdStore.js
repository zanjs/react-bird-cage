import { observable, action, computed } from 'mobx'

class BirdStore {
  @observable birds = []

  @action addBird = (bird) => {
    this.birds.push(bird)
  }

  @action delBird = (index) => {
    this.birds.splice(index, 1)
  }

  @computed get count() {
    return this.birds.length
  }
}

const store = new BirdStore()
export default store
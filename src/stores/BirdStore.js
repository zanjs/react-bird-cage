import { observable, action, computed } from 'mobx'

class BirdStore {
  @observable birds = []

  @action addBird = (bird) => {
    const obj = {
      name:bird,
      time:new Date()
    }
    this.birds.push(obj)
  }

  @action delBird = (index) => {
    this.birds.splice(index, 1)
  }

  @computed get count() {
    console.log(this.birds.length)
    return this.birds.length
  }
}

const store = new BirdStore()
export default store
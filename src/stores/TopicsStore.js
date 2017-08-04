import { observable, action, computed } from 'mobx'
import Request from '../utils/request'
import Print from '../utils/print'

class TopicsStore {
    @observable name = 'nodejs.org'
    @observable topics = []
    
    @action
    getTopics(){
        Request.get('/topics').then(response => {
            Print.log(response)
            this.topics = response.data.data
        }).catch(error => {
            Print.err('topics store')
            Print.err(error)
        })
    }

    @computed
    get decorated(){
        return `${this.name} is awesome`
    }
}

const store = new TopicsStore()
export default store
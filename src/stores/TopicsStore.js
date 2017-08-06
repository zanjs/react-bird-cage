import { observable, action, computed, useStrict, runInAction } from 'mobx'
import Request from '../utils/request'
import Print from '../utils/print'

useStrict(true)

class TopicsStore {
    @observable name = 'nodejs.org'
    @observable topics = []
    
    @action
    getTopics = async () => {
        const response = await Request.get('/topics')
        const fistId = response.data.data[0].id
        Print.log(response.data.data[0].id)

        let response2

        try {
            response2 = await Request.get('/topics/'+fistId)
            
        } catch (error) {
            Print.err(error)
        }

        Print.log(response2)
        Print.log(0)

         runInAction("update state after fetching data", () => {
            Print.log(response)
            this.topics = response.data.data
            this.name = true;
        })

        Print.log(1)
        // Request.get('/topics').then(response => {
        //     Print.log(response)
        //     // this.topics = response.data.data
        // }).catch(error => {
        //     Print.err('topics store')
        //     Print.err(error)
        // })
    }

    @computed
    get decorated(){
        return `${this.name} is awesome`
    }
}

const store = new TopicsStore()
export default store
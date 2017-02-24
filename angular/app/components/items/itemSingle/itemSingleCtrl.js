import moment from 'moment'
import styles from './itemSingle.css'

export default class itemSingle {
    constructor($translate) {
        this.trans = $translate
        this.styles = styles
    }

    $onInit() {
        //this.geniusMethodYay(this.item)
    }

    geniusMethodYay = (args) => {

        console.log(args)
    }
}

itemSingle.$inject = ['$translate']
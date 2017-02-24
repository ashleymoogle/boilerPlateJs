import styles from './main.css'

export default function mainCtrl() {
    //console.log('controller')
    this.styles = styles
    this.items = [
        {
            "name": "Cat",
            "desc": "A cat is a feline"
        },
        {
            "name": "Windows",
            "desc": "Windows is an OS"
        },
        {
            "name": "Goo",
            "desc": "A goo is an unidentified thing made of stuff"
        }
    ]

    this.model = {
        "name": "",
        "desc": ""
    }

    this.addItem = () => {
        console.log('add item')
        this.items.push(this.model)
        this.model = {
            "name": "",
            "desc": ""
        }
    }
}

mainCtrl.$inject = []
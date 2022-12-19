import { Component } from "react";


export class List extends Component {
    state = {
        userInput: '',
        list: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
        
    }

    addItem (input){
        if (input === '') {
            alert('Please enter an item!')
        } else {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({list: listArray, userInput: ''})
        }
    }

    crossedWord (event) {
        const crossedLi = event.target;
        crossedLi.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState ({list: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    

    render () {
        return (
            <div className="inputContainer">
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                
                    <input type="text"
                    placeholder="What needs to be done?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                        
                    
                        <button onClick={() => this.addItem(this.state.userInput)} className='btn add' >+</button>
                    
                    </div>  

                    <ul>
                        {this.state.list.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>{item} </li>
                        ))}
                    </ul>
                    
                    <div className="container">
                        <button onClick={() => this.deleteItem()} className='btn delete'>DELETE</button>
                    </div>
            </form>
            </div>
               
            
        )
    }
}
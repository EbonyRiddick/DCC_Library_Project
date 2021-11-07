import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books= [
            {title: "The Giving Tree", author: "Shel Silverstein"},
            {title: "Fantastic Beasts and Where to Find Them", author: "J.K. Rowling"},
            {title: "The First and Last Freedom", author: "Jiddu Krishnamurit"}
        ];

        this.state = {
            bookNumber: 0
        };
    }
    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <div className="row">                
                    <div className="col-md-4">
                    {/*Button here to move to previous book*/}

                    </div>
                    <div className="col-md-4">
                    {/*Display book with cover here*/}
                     <h1>{this.books[this.state.bookNumber].title}</h1>
                     <h4>{this.books[this.state.bookNumber].author} </h4>
                    </div>
                    <div className="col-md-4">
                    {/*Button here to move to previous book*/}
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
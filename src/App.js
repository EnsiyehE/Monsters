import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: " "
        }

    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
            .then((users) => this.setState(() => {
                return { monsters: users };
            }
            ))
        // .then((users) => {
        //   this.setState({ monsters: users })
        // })

    }

    onSeachChange = (event) => {
        // console.log({ startingArray: this.state.monsters });

        const searchField = event.target.value.toLocaleLowerCase();

        this.setState(() => {
            return { searchField }
        })

    }


    render() {

        console.log('render from app.js');
        const { monsters, searchField } = this.state;
        const { onSeachChange } = this;


        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)

        })



        return (
            <div className="App" >
                <h1 className='app-title'>Monsters Rolodex</h1>

                <SearchBox
                    className='monsters-search-box'
                    onChangeHandler={onSeachChange} placeholder='search monsters ' />

                {/*
            <input className='search_box' type='search' placeholder='searchmonsters' onChange={onSeachChange} />
        */}


                {/*  {
                    filteredMonsters.map((monster) => {
                        return <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    })
                }
            */}

                <CardList monsters={filteredMonsters} />
            </div>
        );
    }

}

export default App;

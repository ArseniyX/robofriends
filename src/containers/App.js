import React, {Component, Fragment} from "react";
import SearchBox from '../components/SerchBox'
import CardList from "../components/CardList";
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor(props) {
        super(props);
        console.log('Class: App, Function: constructor, Line: 14  ',);
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        console.log('Class: App, Function: componentDidMount, Line: 23  ',);
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})

    };

    render() {
        const {robots, searchField} = this.state
        console.log('Class: App, Function: render, Line: 31  ',);
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (!robots.length) {
            return <h1>Loading</h1>;
        } else {
            return (
                <Fragment>
                    <div className={'tc'}>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }
}

export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { Link, Switch, Router } from 'react-router-dom'

class App extends Component {
  state = {
    name: '',
    color: '',
    amount: 0,
    message: 'no message yet',
    newPlantId: 'no plant id yet',
    plants: [],
    newMessage: ''
  }

  async componentDidMount() {
    let res = await Axios.get('http://localhost:5000') //Go get penguin from server 1 
    let res2 = await Axios.get('http://localhost:5000/plants')
    this.setState({
      name: res.data.name,
      plants: res2.data.plants
    
    }) //set penguin to state  2
  }

  sendMessageToServer = async () => {
    let res = await Axios.post('http://localhost:5000/plants', this.state) //Post flower to the server 5
    
    console.log(res) //show the message 8 
    let newPlants = [...this.state.plants]
    newPlants.push({name:this.state.name, color:this.state.color, amount:this.state.amount})

    this.setState({ //9 
      message:res.data.message,
      newPlantId: res.data.newPlantId,
      plants: newPlants,
      newMessage: 'Hurray we did it!'
    })
  }


 showDaPlants = () => {
   return this.state.plants.map(eachPlant => { 
        return <li key={eachPlant._id} >{eachPlant.name} | {eachPlant.color} | {eachPlant.amount} </li>    
   })
 }


 setTyping = (e) => {
   this.setState({
     [e.target.name] : e.target.value
   })
 }


  render() {
    return (
      <div className="App">
        <header className="App-header">



        {/* <Switch>
          <Route path={`/movies`} render={(props)=><Movie {...props} />} />
          <Route path={`/movies/:id`} render={(props)=><Movie {...props} />} />
          <Route path={`/movies`} render={(props)=><Movie {...props} />} />
        </Switch> */}


          {this.state.name} {/*See Penguin 3*/}

          <input type="text" placeholder="name" name="name" onChange={this.setTyping} />
          <input type="text" placeholder="color" name="color" onChange={this.setTyping}/>
          <input type="number" placeholder="amount" name="amount" onChange={this.setTyping}/>

          <button onClick={this.sendMessageToServer}>send to server</button> {/*Called method above 4*/}


          <p>{this.state.message}</p> {/*10*/}
          <p>{this.state.newPlantId}</p> 


          {this.showDaPlants()}
          <li>{this.state.newMessage}</li>

        </header>
      </div>
    );
  }
}

export default App;

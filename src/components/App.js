import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (newValue) => {
    this.setState({filters: {
      type: newValue}})
  }

  fetchPets = () => {
    let animal = this.state.filters.type
    const url = `/api/pets${animal !== 'all' ? (`?type=${animal}`) : ''}`

    fetch(url)
    .then(res => res.json())
    .then(json => {
        this.setState({pets: json})
    })
  }

  adoptionStatus = (id) => {
    console.log('hi')
    this.setState({ pets: this.state.pets.map(p => p.id === id ? {...p, isAdopted: true} : p)
    })
  }

  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptionStatus}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App












// import React from 'react'

// import Filters from './Filters'
// import PetBrowser from './PetBrowser'
// import fetchMock from 'fetch-mock';
// import getAll from '../data/pets'
// class App extends React.Component {
//   constructor() {
//     super()
// // petMapper
// //  'all' = getAll

//     this.state = {
//       pets: [],
//       filters: {
//         type: 'all'
//       }
//     }
//   }
// getPets = (fetchMock) => {
//     fetch('/api/pets')
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         pets: json
//       })
//     })
// }

//   // changeType = () => {

//   //   this.setState({
//   //     filters: {
//   //       type: ''
//   //     }
//   //   })
//   // }

//   render() {
//     this.getPets()
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters />
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser pets={this.state.pets}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
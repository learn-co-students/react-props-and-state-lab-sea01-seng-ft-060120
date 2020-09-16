import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petData = () => {
    return this.props.pets.map(pet => {
      // return <Pet pets={pet}/>
      return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }
  
  render() {

    return (
    <div className="ui cards">{this.petData()}</div>
    )
  }
}

export default PetBrowser











// import React from 'react'
// import getAll from '../data/pets'
// import Pet from './Pet'

// class PetBrowser extends React.Component {

  
//   render() {
//     return this.props.pets.map(pet => <Pet pet={pet}/>)
//     console.log(this.props.pets)
//     // return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
//   }
// }

// export default PetBrowser
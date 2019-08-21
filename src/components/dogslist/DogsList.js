import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogsList.css'

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>
        <Link className="listItems" to={ `/dog-breeds/${breed}` }>{breed}</Link>
      </li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1 className="title">Dogs List</h1>

        { !dogBreeds && 'Loading...' }

        {
          dogBreeds &&
          <ul className="list">{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}
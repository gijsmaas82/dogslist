import React from 'react'
import { Link } from 'react-router-dom'
import './DogBreedImages.css'

export default function DogBreedImages (props) {
  const images = props.images
  return (
    <div className="dog-breed-images">
      <h1 className="Title">Dogs Breed Images</h1>

      <h2 className="Subtitle">This page will show images of the { props.breed } breed.</h2>

      <Link className="link" to="/">Go back to the index</Link>
      {<div>
        { !images && 'Loading...' }
        { images && images.map(url => <img className="images" src={ url } alt="Dog" />) }
        
      </div> }
    </div>
  )
}
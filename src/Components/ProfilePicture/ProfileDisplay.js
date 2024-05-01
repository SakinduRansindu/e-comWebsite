import React from 'react'
import ProfilePicture from '../../../public/logo512.png'

export default function ProfileDisplay() {
  return (
    <img src={ProfilePicture} alt="Profile picture" class="rounded-circle" />
  )
}

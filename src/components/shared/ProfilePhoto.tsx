import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({src}:{src:string}) => {
  return (
    <div>
        <Avatar className='w-20 h-20'>
            <AvatarImage src={src} alt='profile'/>
            <AvatarFallback>Pr</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default ProfilePhoto
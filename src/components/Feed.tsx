import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { ExternalAccount } from '@/app/page';



const Feed = ({user}: {user: ExternalAccount}) => {
  const userData = JSON.parse(JSON.stringify(user))
  return (
    <div className='flex-1'>
       <PostInput user={userData} />
       <Posts/>
    </div>
  )
}

export default Feed
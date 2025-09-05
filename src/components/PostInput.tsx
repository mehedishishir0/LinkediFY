"use client"
import { ExternalAccount } from '@/app/page';
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto';
import { Input } from './ui/input';
import { PostDialog } from './PostDialog';


const PostInput = ({ user }: { user: ExternalAccount }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg'>
      <div className='flex items-center gap-3'>
        <ProfilePhoto src={user.imageUrl} />
        <Input onClick={() => { setOpen(true) }} type='text' placeholder='What is happening?' className='bg-[#edf3f8] w-full rounded-full h-12 border-none' />
        <PostDialog setOpen={setOpen} open={open} src={user.imageUrl} />
      </div>

    </div>
  )
}

export default PostInput
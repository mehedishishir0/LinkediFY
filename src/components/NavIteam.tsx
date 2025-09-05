import { Bell, BriefcaseBusiness, HomeIcon, MessageCircleMore, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type NavIteamType = {
    src: string,
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
    text: string
}

const navIteams: NavIteamType[] = [
    {
        src: "/home",
        icon: HomeIcon,
        text: "Home"
    },
    {
        src: "/networks",
        icon: Users,
        text: "My Network"
    },
    {
        src: "/jobs",
        icon: BriefcaseBusiness,
        text: "Jobs"
    },
    {
        src: "/messaging",
        icon: MessageCircleMore,
        text: "Messaging"
    },
    {
        src: "/notifications",
        icon: Bell,
        text: "Notifications"
    }
]

const NavIteam = () => {
    return (
        <div className='flex gap-8'>
            {navIteams.map((iteam, index) => (
                <div key={index} className='flex flex-col items-center text-sm text-gray-600 hover:text-black cursor-pointer'>
                    <iteam.icon />
                    <Link className='text-xs' href={iteam.src}>{iteam.text}</Link>
                </div>
            ))

            }
        </div>
    )
}

export default NavIteam
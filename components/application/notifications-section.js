'use client'
import { Bell } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NotificationSection({ user }) {
    const [notificationCount, setNotificationCount] = useState(0)

    const getNotificationCount = async () => {
        const axios = require('axios')
        const config = {
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BACKEND_URL + '/notification/count',
            headers: {
                Authorization: 'Bearer ' + user.token,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
        try {
            let response = await axios.request(config)
            setNotificationCount(response.data.data.notifications)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) {
            getNotificationCount()
        }
    }, [user])

    return (
        <Link
            href={'/notifications'}
            className="relative cursor-pointer w-9 h-9 rounded-full flex items-center justify-center bg-transparent hover:bg-tremor-brand-boulder400/10">
            <Bell width={18} className="text-tremor-brand-boulder500" />
            <p className="w-max px-1 flex items-center justify-center h-max absolute top-0 left-5 bg-red-600 rounded-full text-white text-center text-xs">
                {notificationCount}
            </p>
        </Link>
    )
}

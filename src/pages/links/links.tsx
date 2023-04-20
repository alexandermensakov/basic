import Link from 'next/link'
import React from 'react'

const links = () => {
    return (
        <div>links
            <ul>

                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/form">contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default links
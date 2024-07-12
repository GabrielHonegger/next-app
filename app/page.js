"use client";

import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                Sobre
            </Link>
        </div>
    )
}

// This is the component that we want Next.js to render as the Home page.
export default Home
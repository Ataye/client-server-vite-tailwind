import { useState } from "react"

const Layout = ({children}) => {

    return (
        <div className="h-full min-h-screen pb-10">
            <div className="max-w-4xl m-auto">{children}</div>
        </div>
    )
}

export default Layout
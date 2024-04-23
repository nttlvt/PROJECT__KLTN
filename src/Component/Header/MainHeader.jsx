import React from 'react'

export const MainHeader = () => {
    const listNav = ['iPhone', 'Mac', 'iPad', 'LapTop&Pc']
    return (
        <div>
            {
                listNav.map((value) => {
                    return <ul className="main__header inline-block hover:bg-gray-400 ">
                        <li className="inline-block mx-5 my-1 text-sm"> {value}</li>
                    </ul>
                })
            }</div>
    )
}

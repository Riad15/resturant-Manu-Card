import React from 'react'

const Navbar = ({ filterItem }) => {
    return <>
        <nav className="navbar">
            <div className="btn-group">
                <button
                    className="btn-group__item"
                    onClick={() => filterItem("breakfast")}>
                    Breafast
                </button>
                <button
                    className="btn-group__item"
                    onClick={() => filterItem("lunch")}>
                    lunch
                </button>
                <button className="btn-group__item"
                    onClick={() => filterItem("evening")}>
                    Evening
                </button>
                <button className="btn-group__item"
                    onClick={() => filterItem("dinner")}>
                    Dinner
                </button>
                {/* <button className="btn-group__item"
                    onClick={() => SetMenuData(Menu)}>
                    All
                </button> */}
            </div>

        </nav>
    </>

}

export default Navbar

import React from 'react'

const MenuCard = ({ MenuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
                {MenuData.map((curElem) => {
                    return (
                        <>
                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curElem.id}</span>
                                        <span className="card-author subtle">{curElem.category}</span>
                                        <h2 className="card-title">{curElem.name}</h2>
                                        <samp className="card-description subtle">{curElem.description}</samp>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={curElem.image} alt="image" className="card-media" />
                                    <samp className="card-tag subtle">Order Now</samp>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard

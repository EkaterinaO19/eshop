import React from "react";

const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="fa card-header d-flex justify-content-center">
                    NEW HERE? Get 25% off everything!*
                </div>
                <div className="fa card bg-ligght text-dark border-0">
                    <img src="/assets/bg.jpeg" className="card-img-top" alt="bg-image" 
                    />
                        <div className="card-img-overlay d-flex flex-column">
                            <div className="container">
                                <p className="card-title display-2 fw-bolder mt-4">New Season Arrivals</p>
                                <p className="card-text lead fs-2 mt-4">
                                    Check out all the trends
                                </p>
                            </div>
                        </div>
                <div/>
                
            </div>  
        </div>
    </div>
    )
}


export default Home;
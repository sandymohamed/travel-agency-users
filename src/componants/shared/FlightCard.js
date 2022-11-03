

import "./flightcard.scss"

import dummyImg from "../../assets/card/dummy-image.jpg";

function FlightCard() {

    return (
        <>

            <section id="flightCard">
                <div className='cardBody'>
                    <div className='cardBody_img col-md-4 '>
                        <img src={dummyImg} alt="Item_Name"></img>
                    </div>
                    <article className='cardBody_details col-md-7 col-sm-12'>
                        <div className="cardBody_details_data">
                            <div class="spacer"></div>
                            <div className="container">
                                <span className="line">  - - - - - - -<span>icon</span> - - - - - - -</span>
                                <div className="container_data">
                                    <div class="spacer"></div>
                                    <div className="data">
                                        <span className="data_from">Egypt</span>
                                        <span className="data_to">Usa</span>
                                    </div>

                                </div>
                            </div>

                            <div className="container">
                                <span className="line">  - - - - - - -<span>icon</span> - - - - - - -</span>
                                <div className="container_data">
                                    <div className="data">
                                        <span className="data_from">10/11/2022</span>
                                        <span className="data_to">15/11/2022</span>
                                    </div>

                                </div>
                            </div>
                        <button className="primaryBtn"> Booking</button>
                        <button className="secondaryBtn"> Details</button>

                        </div>
                        
                    </article>

                </div>
            </section>
        </>

    )
}
export default FlightCard;
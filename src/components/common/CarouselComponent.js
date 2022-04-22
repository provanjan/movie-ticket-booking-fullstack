import React from 'react';
import { Carousel } from 'react-bootstrap';
const CarouselComponent = (props) => {
    return (
        <>
            <div>
                <div className='container-fluid carousel' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Now Showing</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.gamecored.com/wp-content/uploads/2020/08/rvels-avengers-spiderman-500x300.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3><strong>SPIDERMAN</strong></h3>
                                        <p>After being bitten by a genetically-altered spider, outcast teenage genius Peter Parker develops spider-like superhuman abilities</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.mos.cms.futurecdn.net/2NBcYamXxLpvA77ciPfKZW-1200-80.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3><strong>BATMAN</strong></h3>
                                        <p>The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, </p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://images2.alphacoders.com/851/thumb-1920-85182.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3><strong>INCEPTION</strong></h3>
                                        <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default CarouselComponent;
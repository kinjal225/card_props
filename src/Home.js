

// import { Button } from 'react-bootstrap';

const Home = (props) => {

    return (

        <>

            <div className="col-md-4 col-lg-4 col-12">
                <div className='card_content'>
                    <h5>{props.customersupport}</h5>
                    <p>
                        {props.customercontent} <br></br>
                        {props.customercontent1}. "
                    </p>
                    <div className="card_imagecontent">
                        <div className="card_image">
                            <img src={props.image} alt="" className='card_img' />
                        </div>
                        <div className="side_content">
                            <p>
                                {props.customerid}
                            </p>
                        </div>
                    </div>
                </div>
            </div>




            {/* <div className="card_section">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                                <div className='card_content'>
                                    <h5>Customer Support</h5>
                                    <p>
                                        " Great! recommended. Awesome <br></br>
                                        Features. "
                                    </p>
                                    <div className="card_imagecontent">
                                        <div className="card_image">
                                            <img src={require('./images/envato-icon.png')} alt="" className='card_img' />
                                        </div>
                                        <div className="side_content">
                                            <p>
                                                - @RyanStudio
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )

}
export default Home
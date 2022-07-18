


const About = (props) => {

    return (

        <>

            {/* <div className="blogs_content">
                <div className="container">
                    <div className="row"> */}
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="blog_image">
                                <img src={props.image} alt="" />
                            </div>
                            <div className="blogs_content1">
                                <div className="blogs_content2">
                                    <a href="#">{props.alex}</a>
                                    <a href="#">{props.date}</a>
                                </div>
                                <h5>
                                    <a href="#">
                                        {props.goodtaste1}<br></br>
                                        {props.goodtaste2}
                                    </a>
                                </h5>
                                <a href="#" className='read'>
                                    <span>{props.readmore}</span>
                                </a>
                            </div>
                        </div>
                    {/* </div>
                </div>
            </div> */}






            {/* <div className="blogs_content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="blog_image">
                                <img src={require('./images/1.jpg')} alt="" />
                            </div>
                            <div className="blogs_content1">
                                <div className="blogs_content2">
                                    <a href="#">ALEX SMITH</a>
                                    <a href="#">AUG 6 2019</a>
                                </div>
                                <h5>
                                    <a href="#">
                                        In Good Taste: Mark Finlay <br></br>
                                        Architects and Interiors
                                    </a>
                                </h5>
                                <a href="#" className='read'>
                                    <span>read more</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}





        </>

    )

}
export default About
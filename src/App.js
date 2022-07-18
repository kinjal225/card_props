// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Home from './Home';
import About from './About';

const arr = [

  {
    "customersupport": "Code Quality",
    "customercontent": "Great! recommended. Awesome",
    "customercontent1": "Features.",
    "image": require('./images/envato-icon.png'),
    "customerid": "- @RyanStudio"
  },

  {
    "customersupport": "Flexibility",
    "customercontent": "Its a Beautiful template and Great",
    "customercontent1": "Great Customer Support.",
    "image": require('./images/envato-icon.png'),
    "customerid": "- @boiy"
  },

  {
    "customersupport": "Customer Support",
    "customercontent": "Great! recommended. Awesome",
    "customercontent1": "Features.",
    "image": require('./images/envato-icon.png'),
    "customerid": "- @sundaymba"
  },

  {
    "customersupport": "Customer Support",
    "customercontent": "Great! recommended. Awesome",
    "customercontent1": "Features.",
    "image": require('./images/envato-icon.png'),
    "customerid": "- @sundaymba"
  },


]



// aboutpage

const arr1 = [
  {
    "image": require('./images/1.jpg'),
    "alex": "ALEX SMITH",
    "date": "AUG 6 2019",
    "goodtaste1": "In Good Taste: Mark Finlay",
    "goodtaste2": "Architects and Interiors",
    "readmore": "read more"
  },

  {
    "image": require('./images/2.jpg'),
    "alex": "ALEX SMITH",
    "date": "AUG 6 2019",
    "goodtaste1": "In Good Taste: Mark Finlay",
    "goodtaste2": "Architects and Interiors",
    "readmore": "read more"
  },

  {
    "image": require('./images/3.jpg'),
    "alex": "ALEX SMITH",
    "date": "AUG 6 2019",
    "goodtaste1": "In Good Taste: Mark Finlay",
    "goodtaste2": "Architects and Interiors",
    "readmore": "read more"
  },



]


function App() {
  return (
    <div className="">


      {/* home section */}

      <div className="card_section">

        <div className="container">
          <div className="row">

            {arr.map((item) => {

              return (

                <Home customersupport={item.customersupport}
                  customercontent={item.customercontent}
                  customercontent1={item.customercontent1}
                  image={item.image}
                  customerid={item.customerid}

                />
              )


            })

            }
          </div>
        </div>
      </div>


            {/* about section */}

      <div className="blogs_content">
        <div className="container">
          <div className="row">

            {

              arr1.map((item) => {

                return (

                  <About image={item.image}
                    alex={item.alex}
                    date={item.date}
                    goodtaste1={item.goodtaste1}
                    goodtaste2={item.goodtaste2}
                    readmore={item.readmore}
                  />

                )

              })

            }

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Element from './components/Element';

// class App extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       step: 0,
//       radio: 1
//     }
//   }



function App() {
  //var tmp = <img src="https://ads-cdn.fptplay.net/static/banner/2019/09/9b6ddeba5b33e577c07c35d8505c6072_6872.png"></img>
  const [step, setStep] = React.useState(0);
  const [radio, setRadio] = React.useState(1);
  const tmp = () => setRadio(1);
  
  return (
    <div className="App">
      {step === 0 ?
        (
          <div className="step0">
            <img src="https://ads-cdn.fptplay.net/static/banner/2019/11/506166cfb9872f7637adfae814a57cd8_5995.jpg"></img>
            <div className="radio">
              <p>
                <img src="https://ads-cdn.fptplay.net/static/banner/2019/07/97d8e28108d8e79cc0f354fc62df0f74_4734.png" onClick={tmp}></img>
              </p>
              <p>
                <img src="https://ads-cdn.fptplay.net/static/banner/2019/07/3feabc942d18849da4a58a80759200d4_7993.png" onClick={() => setRadio(1)}></img>
              </p>
              <p>
                <img src="https://ads-cdn.fptplay.net/static/banner/2019/07/a3e6f9530d715cceff59a090b076268e_5487.png" onClick={() => setRadio(2)}></img>
              </p>
              <p>
                <img src="https://ads-cdn.fptplay.net/static/banner/2019/09/2688dbaa1a995d57c857f2740322f034_8042.png" onClick={() => setStep(radio)}></img>
              </p>
            </div>
          </div>
        ) :
        step === 1 ?
          (
            <div className="step1">
              <img src="https://ads-cdn.fptplay.net/static/banner/2019/10/a33c493ad61d6257a39f2787a1b5ec2a_9253.png"></img>
              <div className="for-step1">
                <Element></Element>
              </div>
            </div>
          ) :
          (
            <div className="step2">
              <img src="https://ads-cdn.fptplay.net/static/banner/2019/07/9bce464280f1f5f57894edaddb667cdc_9431.jpg"></img>
            </div>
          )
      }
    </div>
  );
}


export default App;

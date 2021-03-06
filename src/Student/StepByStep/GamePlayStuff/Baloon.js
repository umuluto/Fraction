import React from 'react';

class Baloon extends React.Component{
    render() {
        return(
            <div className="container" >
              <div className="answers">
                <div className="cur-answer" />
              </div>
              <div className="baloon" style={{marginLeft: this.props.coordLeft, marginTop: this.props.coordTop}}>
                <div className="fraction win">
                  <div className="fraction-inner">
                    <div className="fraction-number numerator">{this.props.numerator}</div>
                    <div className="fraction-line"/>
                    <div className="fraction-number denominator">{this.props.denominator}</div>
                  </div>
                </div>
              </div>

                
            </div>
        )
    }    
}

export default Baloon;
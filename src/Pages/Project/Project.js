import React from 'react';
import './index.css';
import projectOneLogo from '../../svg/astronomy.png';

export default function Project() {
    return (
        <div classNam="projectContainer">
          <section className="projectone ">
            <div className="projectContainer one">
              <div classNmae="card one">
                  <img src={projectOneLogo} alt="logo" height="400" width="400"/>
              </div>
            </div>
          </section>
          <section className="projecttwo">
            <div className="projectContainer two">
              <div classNmae="card two">
                  {/* <img src=""/> */}
              </div>
            </div>
          </section>
        </div>
    )
}



import React, {Component} from 'react';
// import coliber from "../../../img/coliber.svg";

export default class AboutDescription extends Component {
    render() {
        return(
            <section className="aboutDescription container" id="aboutDescription">

                <div className="aboutText">
                    {/*<div className="coliberImage">*/}
                    {/*    <img alt="coliber" src={coliber}/>*/}
                    {/*</div>*/}
                    <div>
                        <h2>Few words about me</h2>
                        <p>Lorem ipsum dolor sit amet enim. Mauris lobortis convallis, dui aliquam sapien. Morbi pede. Vestibulum eget volutpat facilisis, wisi vel blandit tempus enim sapien aliquet ipsum. Donec at urna quis ipsum. Nulla pellentesque sed, ultrices metus mi quam enim, id mollis faucibus, convallis consequat. Donec pede. Cras nec felis. Curabitur magna iaculis mi. Cras lorem libero, pharetra vel, lacinia turpis a wisi. Phasellus a elit. Proin dui et leo. Suspendisse est. Curabitur nec erat.</p>
                    </div>
                </div>
                </section>
        )
    }
}

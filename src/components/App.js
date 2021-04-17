import React from 'react';
import ThemeSwitcher from "../partials/ThemeSwitcher";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            class: "app"
        }
        this.switchMode = this.switchMode.bind(this);
    }

    switchMode(newMode){
        newMode === "day"
        ? this.setState({class: "app dark-mode"}) 
        :  this.setState({class: "app"});
    }


    render() {
        return (
            <div className={this.state.class}>
                {/* need to reaasign class from prev. option "app" to  "app dark-mode" - back and forth on button click switch mode: */}
            {/* <div className="app dark-mode"> */} 


                <div className="level header">
                    <div className="title-container">
                        <div className="morningscore-avatar"></div>
                        <h1 className="title">Dark Mode Challenge</h1>
                    </div>
                    <ThemeSwitcher switchMode={this.switchMode}/>
                </div>


                <div className="columns">
                    <div className="column">
                        <p>
                            Morningscore is the one tool you need to bring in more traffic from Google.
                            Even if you're not an expert, you can focus exactly on the improvements that matter.
                            And with a one-page overview, you don't have to go back and forth between dozens of tools.

                            No need for complex, time-consuming tools. Simplifying SEO is where we specialize.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            A SEO reporting tool built for leaders. Founded and built in Robo City -
                            Odense, Denmark.
                        </p>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Name"/>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input" type="text" placeholder="Email"/>
                    </div>
                </div>

                <section className="section">
                    <div className="buttons level-right">
                        <button className="button">Save</button>
                        <button type="submit" className="button is-primary">Submit</button>
                    </div>
                </section>
            </div>
        );
    }

}
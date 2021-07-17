import React, { Component } from 'react';
import HTMLCoder from '../components/HTMLCoderComponent';
import CSSCoder from '../components/CSSCoderComponent';
import Output from '../components/OutputComponent';
import { TabContent, TabPane, Nav, Row, Col, NavItem, NavLink } from 'reactstrap';
import '../CSS/coder.css';

class Coder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab : "1",
            htmlCode : "",
            cssCode : "",
        };

        this.setActiveTab = this.setActiveTab.bind(this);
        this.updateHTMLCode = this.updateHTMLCode.bind(this);
        this.updateCSSCode = this.updateCSSCode.bind(this);
    }

    setActiveTab(tab) {
        this.setState({
            activeTab : tab
        });
    }

    updateHTMLCode(newCode) {
        //console.log("Updating html to " + newCode);
        this.setState({
            htmlCode : newCode
        })
    }

    updateCSSCode(newCode) {
        this.setState({
            cssCode : newCode
        })
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm={1} style={{height: "100%"}}>
                        <Nav className="flex-column" tabs>
                            <NavItem className={this.state.activeTab === "1"? "selectedTab" : "normalTab"} >
                                <NavLink className="text-white" onClick= {()=>this.setActiveTab("1")}>index.html</NavLink>
                            </NavItem>
                            <NavItem className={this.state.activeTab === "2"? "selectedTab" : "normalTab"}>
                                <NavLink className="text-white" onClick= {()=>this.setActiveTab("2")}>index.css</NavLink>
                            </NavItem>
                            <NavItem className={this.state.activeTab === "3"? "selectedTab" : "normalTab"}>
                                <NavLink className="text-white" onClick= {()=>this.setActiveTab("3")}>index.js</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={5}>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <HTMLCoder updateHTML={this.updateHTMLCode} />
                            </TabPane>
                            <TabPane tabId="2">
                                <CSSCoder  updateCSS = {this.updateCSSCode}/>
                            </TabPane>
                            <TabPane tabId="3">

                            </TabPane>
                        </TabContent>
                    </Col>
                    <Col sm={6}>
                        <Output htmlCode={this.state.htmlCode} cssCode={this.state.cssCode} />
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Coder;
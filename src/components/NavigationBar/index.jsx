import React from "react"
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setSchemaType } from '../../actions/XML_validator'
import classNames from "classnames"
import "./style.css"

const NavigationBar = props => {
    const history = useHistory();

    const formTabs = ["Study", "Sample", "Experiment", "Run", "Analysis", "DAC", "Policy", "Dataset"];

    return (
        <nav className="nav">
            <div className="nav__left">
                <div className="nav__link">
                    Forms:
            </div>
                {formTabs.map((tab, key) => {
                    let linkClassName = classNames('nav__link_element', { 'selected': tab === props.selected });
                    return (
                        <div key={key} className="nav__link">
                            <span className={linkClassName}
                                onClick={() => {
                                    if (history.location.pathname !== '/')
                                        history.push("/")
                                    props.setSchemaType(tab)
                                }}>
                                {tab}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className="nav__link nav__right">
                <span className={'nav__link_element'}
                    onClick={() => history.push("/submit")}>
                    {'Upload XML'}
                </span>
            </div>
        </nav>
    )
}

const mapStateToProps = (state, ownProps) => ({
    selected: state.xml_form.schema_type,
})

const mapDispatchToProps = dispatch => {
    return {
        setSchemaType: (schema) => dispatch(setSchemaType(schema))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)


import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    ButtonToolbar,
    ButtonGroup,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardBody,
    Row,
    Col,
    Button,
    InputGroupAddon
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import { StackedAreaChart } from "./components/StackedAreaChart";

import classes from './Security.scss';
import {CardTitle, Input, InputGroup} from "../../../components";
import {Link} from "react-router-dom";
import {DraggableProjects} from "./components/DraggableProjects";

const SessionByDevice = (props) => (
    <div className={classes['session']}>
        <div className={classes['session__title']}>
            { props.title }
        </div>
        <div className={classes['session__values']}>
            <div className={`${classes['session__percentage']} text-${props.color}`}>
                { props.valuePercent }%
            </div>
            <div className={`${classes['session__value']} text-${props.color}`}>
                { props.value }
            </div>
        </div>
    </div>
);

SessionByDevice.propTypes = {
    title: PropTypes.node,
    color: PropTypes.string,
    valuePercent: PropTypes.string,
    value: PropTypes.string
};

export class Security extends React.Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Container fluid={ true }>
                    <div className="d-flex mt-3 mb-5">
                        <HeaderMain 
                            title="Security"
                            className="mt-0"
                        />
                        <ButtonToolbar className="ml-auto">
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-globe text-body mr-2"></i>
                                        Acme<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <div className="small">
                                        Last 30 Days vs Previous Period
                                    </div>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Organization:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            Acme
                                        </DropdownItem>
                                        <DropdownItem>
                                            Facebook
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                            <ButtonGroup className="align-self-start mr-2">
                                <UncontrolledButtonDropdown className="ml-auto flex-column">
                                    <DropdownToggle color="link" className="text-left pl-0 text-decoration-none mb-2">
                                        <i className="fa fa-calendar-o text-body mr-2"></i>
                                        This Month<i className="fa fa-angle-down text-body ml-2" />
                                    </DropdownToggle>
                                    <div className="small">
                                        Jan 01, 2020 to Jan 31, 2020
                                    </div>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Select Period:
                                        </DropdownItem>
                                        <DropdownItem active>
                                            This Month
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last Month
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 3 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last 6 Months
                                        </DropdownItem>
                                        <DropdownItem>
                                            Last Year
                                        </DropdownItem>
                                        <DropdownItem>
                                            All Time
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Custom...
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </div>
                </Container>

                <Container fluid={true}>
                    <Row>
                        <Col lg={12}>
                            <Card className="mb-3">
                                <CardBody>
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="card-title mb-1">Open Incidents by Risk<span className="small ml-1 text-muted">#3.02</span>
                                            </h6>
                                            <p>Area Charts</p>
                                        </div>
                                        <span className="ml-auto">
                            <Button color="link" href="https://jsfiddle.net/alidingling/c1rLyqj1/" target="_blank">
                                <i className="fa fa-external-link"></i>
                            </Button>
                        </span>
                                    </div>
                                    <StackedAreaChart />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={ 4 }>
                            <Card className="mb-3">
                                <CardBody>
                                    <CardTitle tag="h6" className="mb-3">
                                        Open Cases
                                    </CardTitle>
                                    <InputGroup>
                                        <Input placeholder="Search Projects..." />
                                        <InputGroupAddon addonType="append">
                                            <Button color="secondary" outline tag={ Link } to="/apps/projects/list">
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </CardBody>
                                <DraggableProjects />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

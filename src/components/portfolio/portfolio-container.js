import React, {Component} from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State or lifecycle hooks require class base components
    // Constructors cannot be used with functional components
    constructor() {
        // super must be called in order to bring everything from the class Component in
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }
    getPortfolioItems(filter = null) {
        axios
            .get("https://mikebird148.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            // console.log("item data", item);
            return (
                <PortfolioItem key={item.id} item={item} />
            );
        });
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something Else"
    //     });
    // }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('HTML/CSS')}>HTML/CSS</button>
                    <button className="btn" onClick={() => this.handleFilter('React')}>React</button>
                    <button className="btn" onClick={() => this.handleFilter('Games')}>Games</button>
                    <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>All</button>
                </div>
                <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
            </div>

            // <button onClick={this.handlePageTitleUpdate}>Change Title</button>
        );
    }
}
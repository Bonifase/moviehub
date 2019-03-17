import React, { Component } from 'react';

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [1,2,3,4,5]
        }
    }
    render() {
        let series = this.state.series;
        var items = series.forEach((item) => {
            console.log(item)
        })
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default Series;
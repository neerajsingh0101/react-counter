var React = require('react');

var App = React.createClass({

  getInitialState: () => {
    return {
      count: 0
    }
  },

  incrementCounter: function() {
    this.setState({ count: this.state.count + 1 });
  },

  render: function () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    )
  }
});

module.exports = App;

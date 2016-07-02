var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
        <h1> GitHub Battle </h1>
        <p className='lead'> Let's see who got stronger profile </p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-success btn-lg'> Let's Get Started </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;

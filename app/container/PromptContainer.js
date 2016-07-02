var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Prompt = require('./Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne){
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.params.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
        header={this.props.route.header} />
    )
  }
});

module.exports = PromptContainer;

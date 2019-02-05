import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    
    if(this.state.hasError) {
      return(
        <h1 style={{ wordSpacing: "10px" }}>Looks like we did an oopsie...</h1>
      );
    }
    
    else { return this.props.children }
    // this.props.children is CardList component because we wrapped CardList inside the ErrorBoundary component 
  }

}

export default ErrorBoundary;
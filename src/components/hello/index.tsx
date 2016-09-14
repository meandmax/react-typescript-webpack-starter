import React, { Component } from 'react';
const styles =  require('./styles.scss');

interface IProps {
  name: string;
}
class App extends Component<IProps, void> {
  public render() {
    return (
      <div className={styles.wrapper}>
        Hello {this.props.name}
      </div>
    );
  }
}

export default App;

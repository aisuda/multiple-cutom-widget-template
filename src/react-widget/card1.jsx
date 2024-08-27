import * as React from 'react';
import { myContext } from './context';

export default class Card1 extends React.PureComponent {
  static contextType = myContext;

  constructor() {
    super();
  }

  render() {
    console.log('this.context:', this.context);
    console.log('this.props:', this.props);
    return <div className="card1">我是Card1</div>;
  }
}

import React from 'react';
import '../sass/main.scss';

//  注意元件開頭第一個字母都要大寫
class MyComponent extends React.Component {
  // render 是 Class based 元件唯一必須的方法（method）
  render() {
    return (
      <h3 className='test'>aaa, {this.props.name}!</h3>
    );
  }
}

MyComponent.defaultProps = {
  name: 'Test'
}

export default MyComponent;
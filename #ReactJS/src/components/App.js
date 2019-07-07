/* eslint-disable */
import React, { Component } from 'react';
import Express from '../views/Express';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calcActions from '../store/modules/Calc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiply: 12,
      substract: null
    };
  }

  componentDidMount() {
    this.init();
  }

  _handleDetecting = () => {
    this.setState({
      ...this.state,
      // plus 값이 30으로 되어있어서 문제 발생
      // 33으로 수정
      plus: 33
    });
  };

  _handleShow = val => {
    var { CalcActions } = this.props;
    if (val == '') {
      return null;
    } else {
      CalcActions.showAction(val);
      this._handleDetecting();
    }
  };

  setStating() {
    return {
      sNumber: 13,
      // function 의 경우 this 의 위치가 setStating 함수의 return 값으로 고정됨
      // 그래서 call 로 this 를 대체하지 못하게 됨
      // arrow function 은 this 의 탐색 범위를 window 로 넓힌 후 call 을 받아올 수 있음
      // var 는 let 으로 수정
      pass: () => {
        console.log(this);
        let substract;
        console.log(this.sNumber);
        return (substract = this.sNumber);
      }
    };
  }

  init() {
    var substract = this.setStating.call({ sNumber: -33 }).pass();

    this.setState({ substract });
  }

  render() {
    var { source, show } = this.props;
    var { multiply, substract, plus } = this.state;
    return (
      <Express
        source={source}
        multiply={multiply}
        show={show}
        plus={plus}
        substract={substract}
        handleShow={this._handleShow}
      />
    );
  }
}

var mapStateToProps = state => ({
  source: state.Calc.get('source'),
  show: state.Calc.get('show')
});

var mapDispatchToProps = dispatch => ({
  CalcActions: bindActionCreators(calcActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import { connect } from 'dva';
import is from 'electron-is';

export default connect(state => ({
  g: state.g,
}))((props) =>
  <div style={{ textAlign: 'center' }}>
    <h1>Yay! Welcome to umi and dva!</h1>
    <h2>Data Test: {props.g}</h2>
    <h2>is.osx(): {JSON.stringify(is.osx())}</h2>
    <br /><br />
    <img src={require('../assets/yay.jpg')} width="400" />
  </div>
);

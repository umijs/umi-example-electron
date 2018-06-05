import { connect } from 'dva';

export default connect(state => ({
  g: state.g,
}))((props) =>
  <>
    <h1>Index Page {props.g}</h1>
  </>
);

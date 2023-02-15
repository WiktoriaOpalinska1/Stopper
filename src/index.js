import ReactDom from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDom.render(
  <App />, document.querySelector('#root')
);


import ReactLoadable from 'react-loadable';
import Loading from './loading';

const CodeSplittingViewLoadable = ReactLoadable({
  loader: () => import(/* webpackChunkName: "code-splitting-view" */ './index'),
  loading: Loading,
  timeout: 30000, // 30 seconds
});

export default CodeSplittingViewLoadable;

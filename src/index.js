import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from './components/r-editor-body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyEditor />, document.getElementById('root'));
registerServiceWorker();

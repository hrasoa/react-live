import React from 'react';
import {
  LiveProvider,
  LivePreview
} from 'react-live'

const App = () => (
  <LiveProvider code="<strong>Hello World!</strong>">
    <LivePreview />
  </LiveProvider>
);

export default App;

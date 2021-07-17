import React from 'react';
import Button from './components/button';

export default function App(): React.ReactElement {
  return (
    <div style={{ margin: 20 }}>
      <h2>Button </h2>
      <Button
        size="lg"
        onClick={() => {
          alert('点击了');
        }}
      >
        primary lg
      </Button>

      <Button btnType="primary" disabled>
        default
      </Button>
      <Button btnType="danger">primary</Button>
      <Button btnType="link">link</Button>
    </div>
  );
}

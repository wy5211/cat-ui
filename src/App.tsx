import React from 'react';
import Button from './components/button';
import Icon from './components/icon';
import Input from './components/input';

export default function App(): React.ReactElement {
  return (
    <div style={{ margin: 20 }}>
      <h2>Button </h2>
      <Button
        size='lg'
        onClick={() => {
          alert('点击了');
        }}
      >
        primary lg
      </Button>
      <Button btnType='primary' disabled>
        default
      </Button>
      <Button btnType='danger'>primary</Button>
      <Button btnType='link'>link</Button>
      <h2>Icon</h2>
      <Icon icon='coffee' theme='danger' size='3x'></Icon>
      <Icon icon='spinner' spin size='3x' />
      <Icon icon='angle-down' size='3x' />
      <Icon icon='times' size='3x' />
      <Icon icon='times-circle' size='3x' />
      <Icon icon='check-circle' size='3x' />
      <Icon icon='file-alt' size='3x' />

      <h2>Input</h2>
      <Input
        style={{ width: '300px' }}
        placeholder='placeholder'
        onChange={() => {
          console.log('input onchange');
        }}
      />
      <br />
      <Input style={{ width: '300px' }} placeholder='disabled input' disabled />
      <br />
      <Input
        style={{ width: '300px' }}
        placeholder='input with icon'
        icon='search'
      />
      <br />
      <Input style={{ width: '300px' }} defaultValue='large size' size='lg' />
      <br />
      <Input style={{ width: '300px' }} placeholder='small size' size='sm' />
      <br />
      <Input
        style={{ width: '300px' }}
        defaultValue='prepend text'
        prepend='https://'
      />
      <br />
      <Input style={{ width: '300px' }} defaultValue='google' append='.com' />
      <br />
    </div>
  );
}

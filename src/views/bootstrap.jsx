import React from 'react';
// import classNames from 'classnames/bind';
import Button from 'reactstrap/lib/Button';

const Instances = () => {
  return (
    <div>
      <div>Buttons</div>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
      <div>Outline Buttons</div>
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </div>
  );
};

const View = () => (
  <div>
    <Instances />
  </div>
);

export default View;

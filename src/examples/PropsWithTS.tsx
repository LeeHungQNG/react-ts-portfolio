import React from 'react';

interface IProps {
  name: string;
  age: number;
  address: string;
}

const PropsWithTS = (props: IProps) => {
  const { name, age, address } = props;
  return (
    <div>
      My name is {name}
      <br />
      I'm {age} year old
      <br />I live in {address} city
    </div>
  );
};

export default PropsWithTS;

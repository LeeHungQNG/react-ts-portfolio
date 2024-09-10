import React from 'react';

interface IProps {
  name?: string;
  age?: number;
  address?: string; // ? =>  optional: có thể có hoặc không
}

const PropsWithTS = (props: IProps) => {
  const { name, age = 18, address = 'Quảng Ngãi' } = props; // default props
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

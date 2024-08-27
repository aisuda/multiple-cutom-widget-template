import * as React from 'react';

export const myContextData = {
  test1: 123,
};

export const myContext = React.createContext(myContextData);

export function updateContextData() {
  myContextData.test1 = 456;
  console.log('myContextData:', myContextData);
}

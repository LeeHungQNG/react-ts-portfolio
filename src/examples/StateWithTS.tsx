import React, { useState } from 'react';

const StateWithTS = () => {
  let [lang, setLang] = useState<number | string>(10);
  lang = 'ReactJS';
  // setLang('Nodejs');
  return <div>StateWithTS + {lang}</div>;
};

export default StateWithTS;

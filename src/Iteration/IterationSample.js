import React, { useState } from 'react';

const IterationSample = () =>
{
  const [names, setNames] = useState(
    [{ id: 1, text: '눈사람' },
    { id: 2, text: '눈사람2' },
    { id: 3, text: '눈사람3' },
    { id: 4, text: '눈사람4' },
    ]
  );
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);

  const onClick = () =>
  {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const nameList = names.map(names => <li key={names.id}>{names.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;

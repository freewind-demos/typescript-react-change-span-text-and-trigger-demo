import React, {useState} from 'react'

function changeFromOutside() {
  console.log("> changeFromOutside");
  const myInput = document.querySelector<HTMLInputElement>('#myInput')!;

  // Notice: only input value changes, but not trigger state change
  // myInput.value = 'new value';
  // myInput.dispatchEvent(new Event('input', {bubbles: true}));

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  nativeInputValueSetter?.call(myInput, 'new value');

  // `input` event is also ok
  myInput.dispatchEvent(new Event('change', {bubbles: true}));
}

export default function Hello() {
  const [message, setMessage] = useState('react')
  return <div>
    <h1>Hello {message}</h1>
    <div>
      <input id="myInput" value={message} onChange={(event) => setMessage(event.target.value)}/>
    </div>
    <div>
      <button onClick={() => changeFromOutside()}>Change from outside</button>
    </div>
  </div>
};

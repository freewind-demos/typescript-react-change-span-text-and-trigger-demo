import React, {useState} from 'react'

function changeFromOutside() {
  console.log("> changeFromOutside");
  const myInput = document.querySelector<HTMLSpanElement>('#myInput')!;

  // Notice: only input value changes, but not trigger state change
  myInput.textContent = 'new value';
  myInput.dispatchEvent(new Event('input', {bubbles: true}));

}

export default function Hello() {
  const [message, setMessage] = useState('react')
  return <div>
    <h1>Hello {message}</h1>
    <div>
      <span id="myInput" contentEditable={true}
            onInput={(event) => setMessage((event.target! as any).textContent)}>{message}</span>
    </div>
    <div>
      <button onClick={() => changeFromOutside()}>Change from outside</button>
    </div>
  </div>
};

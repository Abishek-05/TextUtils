import React, {useState } from 'react'

export default function TextArea(props) 
{
	const [text,setText] = useState("");

	function handleUpclick()
	{
		let newText = text.toUpperCase(); 
		setText(newText);
		props.showAlert("Converted to UpperCase","success");
	}
	function handleLowclick()
	{
		let newText = text.toLowerCase(); 
		setText(newText);
		props.showAlert("Converted to LowerCase","success");
	}
	function handleSpeak()
	{
		const msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		props.showAlert("Message is being read","success");
	}
	function handleChange(event)
	{
		setText(event.target.value);
	}
  return (
	<>
		<div className="container my-5">
			<div className="container">

				<div className="mb-3">
				<label htmlFor="myBox" className={`form-label textContent-${props.mode}`}><h3>{props.title}</h3></label>
				<textarea className={`form-control textArea-${props.mode}`} id="myBox" rows="6" placeholder="Enter your text here" value = {text} onChange={handleChange}></textarea>
				</div>

				<button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
				<button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleLowclick}>Convert to LowerCase</button>
				<button disabled = {text.length == 0} className="btn btn-primary mx-2 my-1" onClick={handleSpeak}>Speak</button>
			</div>
			
			<div className={`container my-5 textContent-${props.mode}`}>
				<h3>Your text summary</h3>
				<p>
					<li>Character count : {text.length}<br/></li> 
					<li>Word count : {text.split(/[\s]+/).length - 1}</li> 
					{/* We give regex in split() to split by space and \n . (\s covers both) . /RegEx/ => // are called regex literals*/}
				</p>
			</div>
		</div>
	</>
  )
}

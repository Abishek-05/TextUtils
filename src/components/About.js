import React from 'react'

export default function About(props) {
  return (
	<div className={`container my-5 about-${props.mode}`}>
		<h2>TextUtils - Your simple friendly text manipulator !</h2>
		<br/>
		<p>
			TextUtils is a powerful and user-friendly React application that allows you to easily manipulate any piece of text in a variety of ways. With TextUtils, you can quickly and easily <strong> convert text to uppercase, lowercase,have it recited to you and get a summary of the composition of the text </strong>
		</p>
		<p>
			Our intuitive user interface makes it easy to get started with TextUtils. Simply paste in your text and select the transformation you would like to apply. One of the great features of TextUtils is its ability to recite your text. This is particularly useful for those who are visually impaired or prefer to listen to text rather than read it. With the click of a button, TextUtils will recite your text aloud using text-to-speech technology.
		</p>
		<p>
			Whether you're a writer, student, or just someone who wants to improve their productivity, TextUtils is an essential tool to have in your toolkit. It's quick, easy, and efficient, making it the perfect solution for all your text transformation needs.In addition to its core features, TextUtils also boasts a dark mode to go easy on your eyes.
		</p>
	</div>
  )
}

import React from 'react'

export default function Alert(props) {
  return (
	<div style={{height : "30px"}}>
		{ //since we check props.alert(condn), we have to enclose everything in {} only then we can wrap it in a div
			props.alert && 
			<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
				<strong>{props.alert.type}</strong> : {props.alert.msg}
			</div>
		}
	</div>
  )
}

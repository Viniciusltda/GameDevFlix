import React from 'react';

const Game = '<iframe src="https://itch.io/embed-upload/2536539?color=333333" allowfullscreen="" width="960" height="660" frameborder="0"><a href="https://viniciusltda.itch.io/embed-test">Play Embed test on itch.io</a></iframe>';

function Iframe(props){
    return(
        <div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}}/>
        
    );
}

function LoadGame(){
	return(
		<Iframe iframe={Game}/>

	);
}

export default LoadGame;
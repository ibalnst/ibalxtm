import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Trance1 from './songs/Trance1.mp3';
import Trance2 from './songs/Trance2.mp3';
import Trance3 from './songs/Trance3.mp3';
import Trance4 from './songs/Trance4.mp3';
import Trance5 from './songs/Trance5.mp3';
import Trance6 from './songs/Trance6.mp3';
import '../App.css';

const Mixtapes = () => {
	return (
		<div className="judulLagu">
			<h5>Trance Vox 1</h5>
			<AudioPlayer autoplay src={Trance1} onPlay />
			<br />
			<h5>Trance Vox 2</h5>
			<AudioPlayer src={Trance2} onPlay />
			<br />
			<h5>Trance Vox 3</h5>
			<AudioPlayer src={Trance3} onPlay />
			<br />
			<h5>Trance Vox 4</h5>
			<AudioPlayer src={Trance4} onPlay />
			<br />
			<h5>Trance Vox 5</h5>
			<AudioPlayer src={Trance5} onPlay />
			<br />
			<h5>Trance Vox 6</h5>
			<AudioPlayer src={Trance6} onPlay />
			<br />
		</div>
	);
};

export default Mixtapes;

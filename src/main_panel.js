
import settings from './settings';

export default class MainPanel {
	constructor(){
		
	}

	create(){
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		
		const { main_panel } = settings;
		g.rect(0, 0, main_panel.width, main_panel.height);

		return frame;
	}
}

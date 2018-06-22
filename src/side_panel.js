
import settings from './settings';

export default class SidePanel {
	constructor(){
		
	}

	create(){
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		
		const { side_panel } = settings;
		g.rect(0, 0, side_panel.width, side_panel.height);

		return frame;
	}
}

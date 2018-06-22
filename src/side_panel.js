
import settings from './settings';
import Tile from './tile';

export default class SidePanel {
	constructor(){
		
	}

	create(){
		const container = new createjs.Container();
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		
		const { side_panel } = settings;
		g.rect(0, 0, side_panel.width, side_panel.height);

		const tile = new Tile(0, 0).create();
		tile.x = 8;
		tile.y = 8;
		
		container.addChild(frame);
		container.addChild(tile);

		return container;
	}
}

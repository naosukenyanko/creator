
import settings from './settings';
import Tile from './tile';

export default class MainPanel {
	constructor(){
		this.tiles = [
			{x: 0, y:0, data: {}}
		];
	}

	create(){
		const container = new createjs.Container();
		
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		
		const { main_panel } = settings;
		g.rect(0, 0, main_panel.width, main_panel.height);

		const tile = new Tile(0, 0).create();


		container.addChild(frame);
		container.addChild(tile);
		return container;
	}
}

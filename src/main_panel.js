
import settings from './settings';
import Tile from './tile';

export default class MainPanel {
	constructor(){
		const { main_panel } = settings;
		this.offset = {
			x: (main_panel.width - 128) / 2.0,
			y: (main_panel.height - 128) / 2.0,
		}
		
		this.tiles = [
			{x: 0, y:0, data: {}}
		];
	}

	handleClick(event){
		const { tile } = settings;
		const {offset} = this;
		
		const sx = event.stageX - offset.x;
		const sy = event.stageY - offset.y;
		const x = Math.floor(sx / tile.width);
		const y = Math.floor(sy / tile.height);
		
		console.log("click", x, y);

		const newtile = new Tile(x, y).create();
		this.tile_container.addChild(newtile);
	}

	create(){
		const container = new createjs.Container();
		
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		g.beginFill( "#ffffff" );
		
		const { main_panel } = settings;
		g.rect(0, 0, main_panel.width, main_panel.height);
		g.endStroke();

		const tile_container = new createjs.Container();
		const tile = new Tile(0, 0).create();
		const { offset } = this;
		tile_container.x = offset.x;
		tile_container.y = offset.y;

		tile_container.addChild(tile);

		container.addChild(frame);
		container.addChild(tile_container);

		container.addEventListener("click", 
								   this.handleClick.bind(this));
		this.container = container;
		this.tile_container = tile_container;
		
		return container;
	}
}

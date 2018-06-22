
import settings from './settings';

function getLength(w, h){
	return Math.sqrt(w*w + h*h);
}

function getPos(length, i){
	const rad1 = (i + 1.5) * Math.PI * 2 / 4;
	const rad2 = (i + 2.5) * Math.PI * 2 / 4;
	const pos1 = {
		x: length * Math.cos(rad1),
		y: length * Math.sin(rad1),
	};
	const pos2 = {
		x: length * Math.cos(rad2),
		y: length * Math.sin(rad2),
	}
	return [ pos1, pos2 ];
}

export default class Tile {
	constructor(x, y, initial){
		if(initial){
			this.data = inital;
		}else{
			this.data = {
				left: 0,
				top: 1,
				right: 2,
				bottom: 3,
			}
		}
		
		this.x = x;
		this.y = y;
	}

	create(){
		const frame = new createjs.Shape();
		const g = frame.graphics;
		g.beginStroke( "#a0a0a0" );
		
		const { tile } = settings;
		const { x, y, data } = this;
		
		g.rect(
			x * tile.width, 
			y * tile.height,
			tile.width, 
			tile.height);
		
		const center = {
			x: tile.width / 2.0,
			y: tile.height / 2.0,
		}
		const length = getLength(tile.width, tile.height) / 2;

		["left", "top", "right", "bottom"].forEach( (name, i)=>{
			const index = data[name];
			g.lineWidth = 1;
			g.beginStroke(tile.colors[index]);
			g.beginFill( tile.colors[index] );
			
			const pos = getPos(length, i);
			console.log(pos, center);
			g.moveTo(center.x, center.y);
			g.lineTo(center.x + pos[0].x, center.y + pos[0].y);
			g.lineTo(center.x + pos[1].x, center.y + pos[1].y);
			g.lineTo(center.x, center.y);
			
			g.endStroke();
		});

		return frame;
	}
}

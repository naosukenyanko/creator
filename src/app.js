
import settings from './settings';
import SidePanel from './side_panel';
import MainPanel from './main_panel';


export default class App{
	constructor( container ){
		const canvas = ( typeof(container) === "string" ) ?
			document.getElementById(container) : container;
		this.canvas = canvas;
		//console.log("canvas", canvas);

		const stage = new createjs.Stage(canvas);
		this.stage = stage;

		createjs.Ticker.timingMode = createjs.Ticker.RAF;
		createjs.Ticker.addEventListener('tick', function(){
			
			stage.update();
		});

	}
	
	async loadData(){
		
	}

	async run(){
		console.log("run");
		await this.loadData();
		
		
		const {stage} = this;

		const side_panel = new SidePanel().create();
		const main_panel = new MainPanel().create();
		console.log(settings);

		side_panel.x = settings.main_panel.width;
		
		stage.addChild( side_panel );
		stage.addChild( main_panel );


		stage.update();

	}
	
}


export default class App{
	constructor( container ){
		if( typeof(container) === "string" ){
			this.container = document.getElementById(container);
		}else{
			this.container = container;
		}

	}

	run(){
		
	}
}

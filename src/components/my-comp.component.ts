import {Component, NgZone} from '@angular/core';
import * as Electron from 'electron';
import * as fs from 'fs';

// any child components must be declared in the directives property.
// templateUrl should be specified from the root of the project.
@Component({
	selector: 'my-comp',
	templateUrl: 'dist/templates/my-comp.template.html'
})

/**
 * This example reads a given file from disk and outputs the contents to a textarea.
 * It demonstrates both 'electron' and 'fs'. Any other node modules can be used
 * accordingly. Update systemjs.config.js when using additional node modules.
 */
export class MyRootComponent {

	//Saves the selected file path
	file: string;

	//Bound to the input field
	currentText: string;

	//The zone context required for binding to work properly (see doSomethingInElectron()).
	zone: NgZone;

	//Injects the NgZone at runtime. We save the reference to this.zone so we can use it later.
	constructor(ngZone: NgZone) {
		this.zone = ngZone;
	}

	doSomethingInElectron() {

		//When passing functions that require 'this', make sure to use arrow functions like this.
		//Alternatively use bind().
		//Otherwise, because the functions can run in a different context,
		//you might get errors at runtime.

		//Open file dialog..
		Electron.remote.dialog.showOpenDialog((fileNames) => {

			fs.readFile(fileNames[0], 'utf-8', (err, data) => {

				//To update 'this.currentText', we run it the following command
				//in the context of 'this.zone'. Without this, any UI elements
				//bound to the field may not update immediately.
				//
				//Try it out by doing it without 'this.zone.run' (commented out below)!

				this.zone.run(() => this.currentText = data);
				//this.currentText = data;
			});
		});

	}

}

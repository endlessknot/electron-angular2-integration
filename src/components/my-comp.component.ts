import {Component} from '@angular/core';
import * as Electron from 'electron';

// any child components must be declared in the directives property.
// templateUrl should be specified from the root of the project.
@Component({
	selector: 'my-comp',
	templateUrl: 'dist/templates/my-comp.template.html'
})
export class MyRootComponent {

	doSomethingInElectron() {
		Electron.remote.dialog.showOpenDialog({
			properties: ['openDirectory']
		})
	}

}

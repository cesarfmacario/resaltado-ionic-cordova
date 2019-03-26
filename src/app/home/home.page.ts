import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private platform: Platform) {
        
    }

    ionViewWillEnter() {
        //Verifica si ya se encuentra lista la plataforma  
        this.platform
            .ready()
            .then(() => {
                //Realiza el llamado al plugin e invoca segun el resultado la funcion correspondiente
                (<any>window).MiPlugin.saludo('Mundo!!!', this.successCallback, this.errorCallback);
            });
    }

    //Funcion para desplegar la respuesta cuando es satisfactorio
    successCallback(message) {
        alert(message);
    }

    //Funcion si hubo un error
    errorCallback() {
        alert("Hubo un error");
    }


}

import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.page.html',
    styleUrls: ['./inscription.page.scss'],
  })
  export class InscriptionPage implements OnInit {
  
    insData:any = {
        // nom:"",
        // email:"",
        // tel:"",
        // sousStructure:"",
        // username:"",
        // password:""

    };
    //retraitData= {};
    values = {};
    Data: any={};

    constructor(private inscrip: InscriptionService,private alertController:AlertController) { }

    ngOnInit(){

    }
    inscription(data){
        this.inscrip.inscription(data)
        .subscribe(
            res => {
                this.presentAlertError()
                window.confirm('inscription echouée');
                console.log(res);
            },
            err=> {
                window.confirm('inscription réussie')
            }
        );
    }

    async presentAlertError() {
        const alert = await this.alertController.create({
          header: 'inscription',
          subHeader: 'KUDO WALL',
          message: 'inscription reussie',
          buttons: ['OK']
        });
    
    }
}
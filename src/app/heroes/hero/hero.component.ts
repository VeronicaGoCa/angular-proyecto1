import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   public name: string = 'Iromen';
   public age: number = 45;

   /*Aplicando metodo get como propiagees name y age*/
    get capitalizedName():string{
    return this.name.toUpperCase();
   }

   getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
   }

   changeName():void{
    this.name = 'Chamelon';
   }
   changeAge():void{
    this.age = 60;
   }
   resetForm():void{
    this.name = 'Iromen';
    this.age = 15;
    /*
    como no esta dentro de la deteccion de angular es decir en el ciclo de vida
    lo codificado en javascript esto puede traer problemas
    */
   /*  document.querySelectorAll('h1').forEach(Element =>{
      Element.innerHTML = '<h1> Desde Angular </h1>';
    })
 */
   }
}



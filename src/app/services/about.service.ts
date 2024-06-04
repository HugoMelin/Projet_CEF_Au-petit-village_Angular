import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  about = {
    titre: "Replongez dans l'univers d'Astérix et Obélix !",
    paragraphe1: `Vous-êtes nostalgique des aventures rocambolesques d'Astérix et Obélix, ces irréductibles Gaulois qui ont bravé l'envahisseur romain ? Chez "Au petit village", nous partageons cette passion pour le célèbre village gaulois en confectionnant des figurines uniques à l'effigie de vos personnages préférés.`,
    paragraphe2: `Que vous soyez amateur de la potion magique ou adepte des gauloiseries, nos créations artisanales sauront raviver vos souvenirs d'enfance. Laissez-vous transporter dans cet univers plein d'humour et de rebondissements, idéal pour les grands enfants de 30 à 55 ans !`
  }
  constructor() { }
}

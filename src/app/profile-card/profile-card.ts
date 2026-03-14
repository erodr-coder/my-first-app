import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  name: string = 'Eric Rodriguez';
  tagline: string = 'The happiness of your life depends upon the quality of your thoughts.';
  skills: string[] = [
    'Python',
    'HTML & CSS',
    'Javascript',
    'Typescript',
    'Angular',
    'Object-Oriented Programming',
  ];
  links: { name: string, url: string }[] = [{
    name: 'GitHub',
    url: 'https://github.com/erodr-coder'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ericrbi/'
  }];
}

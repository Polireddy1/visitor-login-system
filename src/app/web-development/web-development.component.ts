// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-web-development',
//   templateUrl: './web-development.component.html',
//   styleUrls: ['./web-development.component.css']
// })
// export class WebDevelopmentComponent implements OnInit {
//   // technologies: any[] = [];

//   constructor(private http: HttpClient) { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   // ngOnInit(): void {
//   //   this.fetchWebDevTechnologies();
//   // }

//   technologies = [
//     {
//       name: 'Angular',
//       description: 'A popular JavaScript framework.'
//     },
//     {
//       name: 'React',
//       description: 'A JavaScript library for building user interfaces.'
//     },
//     {
//       name: 'Vue.js',
//       description: 'A progressive JavaScript framework for user interfaces.'
//     },
//     {
//       name: 'Node.js',
//       description: 'Node.js is a server-side JavaScript runtime that allows you to build scalable network applications. It\'s known for its non-blocking, event-driven architecture, making it suitable for real-time applications and APIs.'
//     },
//     {
//       name: 'Ruby on Rails',
//       description: 'Ruby on Rails, commonly known as Rails, is a web application framework written in Ruby. It follows the convention over configuration (CoC) and don’t repeat yourself (DRY) principles, making development efficient and maintainable.'
//     },
//     {
//       name: 'Django',
//       description: 'Django is a high-level Python web framework that promotes rapid development, clean design, and reusability. It includes an ORM, authentication system, and an admin interface.'
//     },
//     {
//       name: 'Laravel',
//       description: 'Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It includes a wide range of tools and libraries for building modern web applications.'
//     },
//     {
//       name: 'Spring Boot',
//       description: 'Spring Boot is an extension of the Spring framework for building production-ready Java applications. It simplifies the development process and provides a wide range of modules for various tasks.'
//     },
//     {
//       name: 'Sass (Syntactically Awesome Stylesheets)',
//       description: 'Sass is a CSS extension language that adds features like variables, nesting, and reusable styles. It compiles to standard CSS and makes writing and maintaining stylesheets more efficient.'
//     },
//     {
//       name: 'TypeScript',
//       description: 'TypeScript is a superset of JavaScript that adds static typing, interfaces, and other features to enhance the development experience and maintainability of large-scale applications.'
//     },
//     {
//       name: 'GraphQL',
//       description: 'GraphQL is a query language for your API that allows clients to request only the data they need. It offers a more efficient and flexible approach to data retrieval compared to traditional REST APIs.'
//     },
//     {
//       name: 'Express.js',
//       description: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It\'s often used in conjunction with Node.js to create APIs.'
//     },
//     {
//       name: 'Ember.js',
//       description: 'Ember.js is an opinionated JavaScript framework for building ambitious web applications. It emphasizes convention over configuration and includes a router and an ORM.'
//     },
//     {
//       name: 'ASP.NET Core',
//       description: 'ASP.NET Core is a cross-platform, high-performance framework for building modern web applications using C#. It offers flexibility and scalability and is commonly used for enterprise-level projects.'
//     },
//     {
//       name: 'Meteor',
//       description: 'Meteor is a full-stack JavaScript platform for developing real-time web applications. It provides real-time data synchronization and supports hot code pushes.'
//     },
//     {
//       name: 'Ionic Framework',
//       description: 'The Ionic Framework is an open-source UI toolkit for building high-quality cross-platform mobile and web applications using web technologies such as HTML, CSS, and JavaScript.'
//     },
//     // Add more technologies as needed
//   ];



// }
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {
  technologies = [
    {
      name: 'Angular',
      description: 'A popular JavaScript framework.',
      website: 'https://angular.io/'
    },
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      website: 'https://reactjs.org/'
    },
    {
      name: 'Vue.js',
      description: 'A progressive JavaScript framework for user interfaces.',
      website: 'https://vuejs.org/'
    },
    {
      name: 'Node.js',
      description: 'Node.js is a server-side JavaScript runtime that allows you to build scalable network applications. It\'s known for its non-blocking, event-driven architecture, making it suitable for real-time applications and APIs.',
      website: 'https://nodejs.org/'
    },
    {
      name: 'Ruby on Rails',
      description: 'Ruby on Rails, commonly known as Rails, is a web application framework written in Ruby. It follows the convention over configuration (CoC) and don’t repeat yourself (DRY) principles, making development efficient and maintainable.',
      website: 'https://rubyonrails.org/'
    },
    {
      name: 'Django',
      description: 'Django is a high-level Python web framework that promotes rapid development, clean design, and reusability. It includes an ORM, authentication system, and an admin interface.',
      website: 'https://docs.djangoproject.com/'
    },
    {
      name: 'Laravel',
      description: 'Laravel is a PHP web application framework known for its elegant syntax and developer-friendly features. It includes a wide range of tools and libraries for building modern web applications.',
      website: 'https://laravel.com/'
    },
    {
      name: 'Spring Boot',
      description: 'Spring Boot is an extension of the Spring framework for building production-ready Java applications. It simplifies the development process and provides a wide range of modules for various tasks.',
      website: 'https://spring.io/projects/spring-boot'
    },
    {
      name: 'Sass (Syntactically Awesome Stylesheets)',
      description: 'Sass is a CSS extension language that adds features like variables, nesting, and reusable styles. It compiles to standard CSS and makes writing and maintaining stylesheets more efficient.',
      website: 'https://sass-lang.com/'
    },
    {
      name: 'TypeScript',
      description: 'TypeScript is a superset of JavaScript that adds static typing, interfaces, and other features to enhance the development experience and maintainability of large-scale applications.',
      website: 'https://www.typescriptlang.org/'
    },
    {
      name: 'GraphQL',
      description: 'GraphQL is a query language for your API that allows clients to request only the data they need. It offers a more efficient and flexible approach to data retrieval compared to traditional REST APIs.',
      website: 'https://graphql.org/'
    },
    {
      name: 'Express.js',
      description: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It\'s often used in conjunction with Node.js to create APIs.',
      website: 'https://expressjs.com/'
    },
    {
      name: 'Ember.js',
      description: 'Ember.js is an opinionated JavaScript framework for building ambitious web applications. It emphasizes convention over configuration and includes a router and an ORM.',
      website: 'https://guides.emberjs.com/'
    },
    {
      name: 'ASP.NET Core',
      description: 'ASP.NET Core is a cross-platform, high-performance framework for building modern web applications using C#. It offers flexibility and scalability and is commonly used for enterprise-level projects.',
      website: 'https://docs.microsoft.com/en-us/aspnet/core/'
    },
    {
      name: 'Meteor',
      description: 'Meteor is a full-stack JavaScript platform for developing real-time web applications. It provides real-time data synchronization and supports hot code pushes.',
      website: 'https://www.meteor.com/'
    },
    {
      name: 'Ionic Framework',
      description: 'The Ionic Framework is an open-source UI toolkit for building high-quality cross-platform mobile and web applications using web technologies such as HTML, CSS, and JavaScript.',
      website: 'https://ionicframework.com/'
    },
    // Add more technologies as needed
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Any initialization logic you may have
  }
}

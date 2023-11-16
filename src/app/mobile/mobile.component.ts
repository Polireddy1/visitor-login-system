import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobileTechnologies = [
    { 
      name: 'React Native', 
      description: 'React Native is a framework for building mobile applications using JavaScript and React. It allows you to create native mobile apps for both iOS and Android using a single codebase.',
      website: 'https://reactnative.dev/'
    },
    { 
      name: 'Flutter', 
      description: 'Flutter is an open-source UI software development kit created by Google. It allows you to build natively compiled applications for mobile, web, and desktop from a single codebase.',
      website: 'https://flutter.dev/'
    },
    { 
      name: 'Swift', 
      description: 'Swift is Apple\'s programming language for iOS app development. It is known for its performance and ease of use and is used to build apps for iPhones, iPads, and Macs.',
      website: 'https://developer.apple.com/swift/'
    },
    { 
      name: 'Kotlin', 
      description: 'Kotlin is a modern programming language that is officially supported for Android app development. It is designed to be concise, expressive, and fully interoperable with Java.',
      website: 'https://kotlinlang.org/'
    },
    { 
      name: 'Xamarin', 
      description: 'Xamarin is a cross-platform app development framework that uses C# and the .NET framework. It allows you to create native mobile apps for iOS and Android.',
      website: 'https://docs.microsoft.com/en-us/xamarin/'
    },
    { 
      name: 'PhoneGap', 
      description: 'PhoneGap, also known as Apache Cordova, is an open-source mobile app development framework that uses web technologies (HTML, CSS, and JavaScript) to build cross-platform mobile apps.',
      website: 'https://cordova.apache.org/'
    },
    { 
      name: 'NativeScript', 
      description: 'NativeScript is an open-source framework for building native mobile apps using JavaScript, TypeScript, or Angular. It provides direct access to native platform APIs.',
      website: 'https://nativescript.org/'
    },
    { 
      name: 'Appgyver', 
      description: 'Appgyver is a low-code platform for building mobile apps. It allows you to create and deploy apps with minimal coding and offers a range of pre-built components.',
      website: 'https://www.appgyver.com/'
    },
    { 
      name: 'Apache Cordova', 
      description: 'Apache Cordova is an open-source platform for building native mobile applications using web technologies. It provides a set of JavaScript APIs for accessing native device capabilities.',
      website: 'https://cordova.apache.org/'
    },
    { 
      name: 'Sencha Touch', 
      description: 'Sencha Touch is a JavaScript framework for building cross-platform mobile web applications. It includes a wide range of UI components for mobile app development.',
      website: 'https://docs.sencha.com/touch/'
    },
    { 
      name: 'App Inventor', 
      description: 'App Inventor is a visual development environment for building Android apps. It is beginner-friendly and allows you to create apps using a drag-and-drop interface.',
      website: 'https://appinventor.mit.edu/'
    },
    { 
      name: 'Corona SDK', 
      description: 'Corona SDK is a 2D game and app development platform that uses Lua scripting. It is known for its ease of use and is used for mobile game development.',
      website: 'https://coronalabs.com/'
    },
    { 
      name: 'Unity', 
      description: 'Unity is a powerful and versatile game development platform that can also be used to build mobile apps. It is widely used for 2D and 3D game development.',
      website: 'https://unity.com/'
    },
    { 
      name: 'AppSheet', 
      description: 'AppSheet is a no-code platform for creating mobile apps from spreadsheets. It enables users to transform data into apps with minimal development.',
      website: 'https://www.appsheet.com/'
    },
    { 
      name: 'Xojo', 
      description: 'Xojo is a cross-platform development environment for creating apps for desktop, web, and mobile. It offers a single codebase for multiple platforms.',
      website: 'https://www.xojo.com/'
    },

    // Add more mobile technologies as needed
  ];

  constructor() { }

  ngOnInit(): void {
    // Your initialization code here
  }
}

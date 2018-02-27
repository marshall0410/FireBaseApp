// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCDBUmlduKHES8yL-Y3t68X4vdlI1vmcl8',
      authDomain: 'fbapp-d9391.firebaseapp.com',
      databaseURL: 'https://fbapp-d9391.firebaseio.com',
      projectId: 'fbapp-d9391',
      storageBucket: 'fbapp-d9391.appspot.com',
      messagingSenderId: '453808145995'
    }
  };


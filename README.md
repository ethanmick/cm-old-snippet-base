# CloudMine Snippet Base #

CloudMine offers powerful snippets to run on their servers, but they don't allow arbitrary packages to be installed (yet), so they have a list of packages. This starter repo let's you clone it and immediately begin developing. It uses grunt so you can push your work to the cloud.

## Quick Start
To start, clone the repo and run `npm install`. I highly suggest you hook the repo up to it’s own remote repo so you can have all your snippets for your app under source control.

Once you’re ready to deploy you can either:

1. `grunt render:production` This will compile your snippets to `bin/production/`. Copy and paste to CloudMine.

2. Open `config.js`
1. 	Set `appId` and `masterKey` for your application.
2. 	`grunt rd`. This will deploy and **overwrite** snippets.


## Using the Grunt Pipeline

To make snippet writing easier (and more module), there are two directories that you’ll write your code.

* `lib` This is where you should place reusable modules that you want to use in the rest of your code. To start, it has:
* 	`test.js` Which has setup code in it. This should be used in every snippet file in `src`. It will automatically create and mimic the `exit` function for local testing.
* 	`index.js` An example module that acts like a class. This can be removed for your own.
*	`src` This is where your snippets will reside. Grunt will go through this directory and when it sees `’<%- any_key %>’`, it will replace it with a value from your `config.js`. When it sees `<% include ../lib/test.js %>`, it will replace it with the entire contents of the linked file.


## Final Thoughts
Using the grunt pipeline is very powerful, both easily allowing version control for snippets, and keeping in sync your snippets with the local version. It can also be used to include entire other modules CloudMine currently doesn’t offer (merge the other module into one file for easy importing).

Running:
```
grunt render:production && node bin/production/index.js
```

Is a fast and easy way to test the snippet you’re currently working on.

You can use this method to add tests to your compile snippets, which is extremely useful.

## Changelog

### Version 0.1.0
* Initial Version












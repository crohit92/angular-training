## Chapter-3: Create a Login Screen

We need at least a file called [login.component.ts]('../../../../src/app/login/login.component.ts) to create a component. If we have inline css and inline HTML then this single file is sufficient. but for complex components
we prefer to break the component into seperate files
* [Component Class File]('../../../../src/app/login/login.component.ts)
* [Component Template File]('../../../../src/app/login/login.component.html)
* [Component Style File]('../../../../src/app/login/login.component.scss)

With these files created we can add this component to the `declarations` section of the `AppModule` to add this component to the application. 

But there is a better way to do this. We should create a seperate module called [`LoginModule`](../../src/app/login/login.module.ts) which will encapsulate the login feature. Everything required for the Login feature should be declared in this module and then this feature module can be imported into AppModule. 

If we follow this structure, we can better encapsulate the feature in its own module and avoid putting everything into the application scope. Moreover when we start with *Lazy Loading* this approach will help us alot.

So lets create the login component from scratch.


First lets checkout to the intial commit 
### Add a helper utility library for designing
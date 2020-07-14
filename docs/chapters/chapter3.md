## Chapter-3: Create First Angular Component (Login Screen)

So the first component we are going to create is the LoginComponent

We need at least one file called [login.component.ts]('../../../../src/app/login/login.component.ts) to create this component. If we have inline css and inline HTML then this single file is sufficient. but for complex components
we prefer to break the component into seperate files

- [Component Class File]('../../../../src/app/login/login.component.ts)
- [Component Template File]('../../../../src/app/login/login.component.html)
- [Component Style File]('../../../../src/app/login/login.component.scss)

With these files created we can add this component to the `declarations` section of the `AppModule` to add this component to the application.

But there is a better way to do this. We should create a seperate module called [`LoginModule`](../../src/app/login/login.module.ts) which will encapsulate the login feature. Everything required for the Login feature should be declared in this module and then this feature module can be imported into AppModule.

If we follow this structure, we can better encapsulate the feature in its own module and avoid putting everything into the application scope. Moreover when we start with _Lazy Loading_ this approach will help us alot.

So lets create the login component from scratch.

First lets checkout to the `create_login_dashboard` branch

```shell
git checkout create_login_dashboard
```

Now to create the login feature module, we need to add a folder inside the app folder by the name `login`.

Now as mentioned above we need 4 files to create in login folder for this feature.

1. Login Component class file - `login.component.ts`
2. Login Component template file - `login.component.html`
3. Login Component style file - `login.component.scss`
4. Login module file - `login.module.ts`

If we want to unit test our components, then we need to add the Spec file also. We will discuss about this later.

> Since we are using angular material in our project so will use some components from material to make our login screen look good.

The final outcome after the components are created should look like [this]('../../src/app/login)

But wait, I don't see this feature anywhere on screen, how can i test if i am doing it right?

The answer to this is `routing` which we will discuss in detail later, but for now lets paste the below code in the `app-routing.module.ts` to replace its existing content.

```ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Another thing is to import `LoginModule` into AppModule

To do this add `import { LoginModule } from "./login/login.module";` to the toplevel imports in `app.module.ts`.
and then add LoginModule to the imports array on the AppModule

Now if you navigate to "http://localhost:4200/login" you should start to see the component which you created.


## Communication between components

Components modularize your application. They break the big monolith into small managable pieces. But these pieces need communication between them so that, they can function in harmony and collectively build the application and solve the business problem.

Before we start to discuss about the topic, lets understand a few terms i have used below

| Term               | Meaning                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Register a service | Add the service in the providers array to make it available to the registering element and its children                       |
| Inject a service   | Add the service as a constructor arguement, so that when angular created this element, It also inject the service from the DI |
So can we make components communicate to each other?

The answer depends on the hierarchical of components. What does that mean? Lets see what are the possible arrangements of components.

1. Parent Child communication - `Use @Input and @Output`
2. Sibling Components sharing the same parent - `Use Parent as a medium`, or `use a service registered at Parent level`, or `Use a Subject created at Parent level along with @Input and @Output in the Siblings`
3. One View Component(Bound to the route) to another view component(Bound to another route) - `Use Service registered at their common parent/grand parent`.

Ok So now let's start to see one arrangment at a time.

**Parent Child communication**

This is one of the easiest and the most talked about communication. In this situation, the parent and child wants to communicate to each other. We have already discussed about this in the previous chapter.

We used @Input and @Output decorators to create property and event binding

*Usage of Result Screen Component*

```html 
<ngt-result-screen [model]="expression" (modelChange)="expression=$event"></ngt-result-screen>
```

*Result Screen Component*
```ts
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ngt-result-screen",
  template: ` <input
    #expressionControl
    [ngModel]="model"
    (ngModelChange)="modelChange.next($event)"
    tabindex="0"
    class="screen px-2 py-4 border-0 w-full"
  />`,
})
export class ResultScreenComponent {
  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();
}
```

Here the communication is self evident, The parent `CalculatorComponent` is sending some input to the child `ResultScreenComponent` and on some event based on user's interaction the child `ResultScreenComponent` is sending back some data to the parent `CalculatorComponent`

> @Input and @Output can be used to transfer any kind of data, It can be `an object`, `a premitive value`, `a function`, `a javascript Map` or anything.

Lets discuss another arrangement

**Communication between sibling components**

Problem statement

There has to be a screen, where user should be able to select a city from a dropdown and when the user selects a city, the weather forecast for that city should be fetched from a server and displayed on the screen.

The city selection component and the weather forecast components should be made such that they can be reused an different parts of the application.

Let's create three components

1. ShellComponent -  Acting as a parent component
2. CitySelectionComponent - Allows user to select a city from the dropdown
3. WeatherForecastComponent - Responsible for displaying the current weather forecast


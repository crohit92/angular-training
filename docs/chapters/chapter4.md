## Chapter-4: Template binding

Template binding has three forms

1. Property Binding
2. Event Binding
3. Interpolation

### Property Binding

Angular Allows us to bind expressions to native DOM properties. [See](https://angular.io/guide/template-syntax#data-binding-and-html) here for a complete doc.

For example: We can bind the value property of an input element with a property in our component class
like: 
```html
<input [value]="expression">
```

Now if expression is a string variable in our component, then any changes to `expression` will change the value of the input element.

### Event Binding

Same as Property binding, Angular wraps all the native DOM events using the event binding syntax.

For example: The most common event which is used in every app is the click event.
```html
<button (click)="evaluate()">Evaluate</button>
```

Clicking on this button will invoke the evaluate method in our component class

### Interpolation

Angular allows us to write inline expressions in HTML which are interpolated on runtime.

For eg. 
```html
<span> {{ button }}</span>
```

If we have an array of strings where each string represent the label of a button, we can iterate over that array and in each iteration we can display the label using the above syntax.

For an example of template binding lets see a calculator component [here](./../../src/app/dashboard/calculator)

| [< Create First Angular Component](./chapter3.md) | ~~Next >~~ |
| ---------------------------------------------------- | ---------- |
## Chapter-2: Template binding

Template binding has three forms

1. Property Binding
2. Event Binding
3. Interpolation

### Property Binding

Angular Alows us to bind expressions to native DOM properties. [See](https://angular.io/guide/template-syntax#data-binding-and-html) here for a complete doc.

For example: We can bind the value property of an input element with a property in our component class
like: 
```html
<input [value]="myValue">
```

Now if myValue is a string variable in our component, then any changes to `myValue` will change the value of the input element.

### Event Binding

Same as Property binding, Angular wraps all the native DOM events using the event binding syntax.

For example: The most common event which is used in event noraml apps is the click event.
```html
<button (click)="updateMyValue('Rohit')">Save</button>
```

**Assuming the below implementation of the greet method**

```ts
greet(updatedValue:string) {
    this.myValue = updatedValue;
}
```

### Interpolation

Angular allows us to write inline expressions in HTML which are interpolated on runtime.

For eg. 
```html
<span>{{myValue}}</span>
```

Now us use the above property binding, event binding and this interpolation in the same example

| [< Building blocks of an Angular App](./chapter1.md) |     |
| ---------------------------------------------------- | --- |
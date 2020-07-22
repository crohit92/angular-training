## Two way data binding

Using the [property binding](./chapter3.md) syntax discussed in the last [video chapter](https://web.microsoftstream.com/video/91de6338-d27f-480b-9079-aa8382142e6e?st=2165), we saw that we can acheive one way data binding.

For Eg.
```html
<input type="tel" [value]="expression">
```

In the above snippet, when I change the expression variable, the value property of the input also changes. but when I change the value in the input property by typing somthing directly into the input element, the expression variable does not change.

If it had changed, it would be referred as **Two way data binding**

Achieving, two way data binding is simple. We just need to subscribe to the change event of the input and update the expression variable [see here](https://web.microsoftstream.com/video/91de6338-d27f-480b-9079-aa8382142e6e?st=2428)

Two way data binding is such a trivial thing, that angular has given a directive which we can use achieve it.

The directive we are talking about here is ***ngModel***.

There is a special syntax to use when we want to achieve two way data binding. That syntax is generally referred as **Banana in the box** [()].

In the previous section, we use two way data binding using both property and event binding like:

```html
<input #resultScreenElement type="tel" [value]="expression" (change)="expression = resultScreenElement.value">
```

We can simplify our code by using the *ngModel* directive like:

```html
<input type="tel" [(ngModel)]="expression">
```

So, the above syntax does exactly the same thing as before, just is shorter and cleaner.

To be able to use the *ngModel* directive, we need to import the ***FormsModule*** from ***@angular/forms***

```ts
import {FormsModule} from "@angular/forms";
```

Since FormsModule has exported this directive, so when we import this module we get the ngModel directive inside our module. **This is how we can also share our components with other modules**

### Demystifying the syntatic sugar

The ngModel directive has an Input property called *ngModelChange*. By convention, if a component has an input property named say x and an output property named xChange, then angular allows you to wrap it inside the Banana in the box syntax.

More about this in the next chapter.

| [< Template binding](./chapter4.md) | [Communication between components >](./chapter6.md) |
| ----------------------------------- | --------------------------------------------------- |


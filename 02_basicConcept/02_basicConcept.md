# data binding
- data function should always and only return an object
- interpolation: syntax with `{{ }}` you can execute any code, example `{{ myMethod() }}` --> any JS expression
- `v-bind:` directive (instruction) to set a value of an attribute on a html element. Eg. `v-bind:href="..."` or shorthand `:ref="..."`
- within html `<p>...</p>` use `{{...}}`
- html attribute `<a href_>...</p>` use `v-bind:` oder just `:`
- `this` keyword in vue: references to the global object, which is hold in `data()`.
- if you get an html tag instead of plain text (interpolation), you can use `v-html`, e.g. `coursegoal='...'` in `data()`, `v-html="coursegoal"`
- `v-once`: any dynamic value binding should executed only once (e.g. starting Counter and Counter).

# event binding
- `v-on:click="add"` or `@click:click="add"`
- build in event (with `$`): `@click="setName($event, 'Andrey')"`, `setName(event, lastName) { this.name = event.target.value + ' ' + lastName: }`
- no page Reload => `submitForm(event) { event.preventDefault(); alert('Submitted') }`

## event modifier
- `@submit.prevent="submitForm"` or `@submit.stop="submitForm"` for `preventDefault()` resp. `stopPropagation()`
- `@click.right="..."` only right klick
- `@keyup.enter="confirmedInput"` only executed when hit enter

## List of events
- `@click="clickedButton" `
- `@input="setName"`, `setName(event) { this.name = event.target.value }`
- `@submit="submitForm"`
- `@keyup.enter="confirmedInput"`

# data binding & event binding
- `<input :value="name"` e.g.reset button of inputfield
- `v-model="name"` === `:value="name" @input="myFunction"`: bind a value and listen to input changes on input. `v-model` binds value and send back to the input value. `v-model` ist a shortcut for `v-bind` and `v-input`, it is a <strong>two-way-binding</strong>

# Computed properties
- calculate output dynamically
- you bind events to properties but not to computed properties
- for performance computed properties ar better than methods
- vue renders view when computed properties are changed

# watchers
- method which is called when a data property has changed, e.g. (timers, which changed, http requests)
- if you want run some code which maybe (not necessary) also update some data propery in reaction of a property changing 

```
  data() {
    return {
      counter: 0,
    };
  },
```
```
 watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0
      }
    }
  },
```


# methods vs computed vs watch
## methods 
- use with event binding OR data binding
- Data binding: Method is executed for every "rerender" cycle of the component
- Use for events or data that really needs to be reevaluated all the time

## computed
- Use with data binding
- Computed properties are only re-evaluated if one of their "used values" changed
- use for data that depends on other data

## watch
- not use directly in template
- allows you to run any code in reaction to some changed data (e.g. send Http request etc.)
- use for any non-data update you want to make

# dynamic styling
- inline: `:style="{borderColor: boxASelected ? 'red' : '#ccc'}"` 
- classes: `:class="boxBSelected ? 'demo active' : 'demo'"` or `:class="{active: boxCSelected}"`
- multiple classes (classlist in react?): `:class="['demo', {active: boxCSelected}]"`
- classes with logic: 
```
  computed: {
    boxAClasses() {
      return { active: this.boxASelected }
    }
  },
```
```
    <div class="demo"
      :class="boxAClasses"
      @click="boxSelected('C')"
    ></div>
```

# Summary
## DOM & Templates
- Vue can be used to define the gola instead of the steps -> <strong>declarative</strong> approach
- <strong>Connect</strong> Vue to HTML elements via <strong>"el"</strong>: Vue <strong>renders the real DOM</strong> based on the connected template

## Reactivity
- Vue updates the real DOM for you when bound data changes
- <strong>Computed properties</strong> and <strong>watchers</strong> allow you to react to data changes

## Data & Event Binding
- You <strong>bind data</strong>via interpolation (<strong>{{}}</strong>) or the <strong>v-bind(":")</strong> directive
- You <strong>listen for events</strong> via <strong>v-on ("@")</strong>

## Styling
- Dynamic CSS class and inline style bindings are supported by Vue
- Vue offerts multiple <strong>special syntaxes</strong> (object-based, array-based) for efficient bindings
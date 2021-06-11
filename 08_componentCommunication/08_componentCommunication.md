# Components Communication

- why not change props value? Unidirectional Data Flow. Data has one and only one way to be transferred to other parts of the application
- if a component is optional (`required: false`), you should provide a d default value.
- Communication Parent to Component: trough `props`
- Communication Component to Parent: trough `$emit`: you have to pass the name of the event and every props you like
- `emits: [...]` is the same like props but for events. Its a declaration for your custom events. It is nice to have an overview of the component when looking at the props and custom events.

Child-Component:

```
  <button @click="toggleFavorite">
    Toggle Favorite
  </button>

...

  toggleFavorite() {
    this.$emit("toggle-favorite", this.id);
  },
```

Parent-Component:

```
  <friend-contact
    v-for="friend in friends"
    :id="friend.id"
    :key="friend.id"
    :name="friend.name"
    :phoneNumber="friend.phone"
    :emailAddress="friend.email"
    :is-favorite="friend.isFavorite"
    @toggle-favorite="toggleFavoriteStatus"
  ></friend-contact>

...

  toggleFavoriteStatus(friendId) {
    const identifiedFriend = this.friends.find(
      (friend) => friend.id === friendId
    );
    identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
  }

```

- Props Fallthrough: you can have an button component without props for `type` and `click`. Vue has built-in support for prop (and event) "fallthrough". Props and events added on a custom component tag automatically fall through to the root component in the template of that component. You can get access to these fallthrough props on a built-in `$attrs` property (e.g. `this.$attrs`).
- props are for sending data into a component
- events are there for sending data out to a component

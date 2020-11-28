status: 2

# Storybook

- Document components as you develop
- typescript autogenerates documentation

## Install

1. on the folder

```
yarn init -y
yarn add -D @storybook/react babel-core
yarn add react react-dom
mkdir .storybook src
touch .storybook/config.js
```

2. on `package.json`

```
scripts: {
  "storybook": "start-storybook -p 6006 -c .storybook"
}
```

3. `npm run storybook`

---

# [Design Systems with React and Typescript in Storybook](https://egghead.io/courses/design-systems-with-react-and-typescript-in-storybook)

- [learn storybook](https://www.learnstorybook.com/react/en/get-started/)

<video src="01.mp4"></video>
- typescript autogenerates documentation
- design at scale
- document your components as you develop it
----
<video src="02.mp4"></video>
- on an empty folder

- ```
  yarn init -y
  yarn add -D @storybook/react babel-core
  yarn add react react-dom
  mkdir .storybook src
  touch .storybook/config.js
  ```

- on `package.json`

  ```
  "scripts": {
      "storybook": "start-storybook -p 6006 -c .storybook"
  }
  ```

  run with `npm run storybook`
----
<video src="03.mp4"></video>
- on `.storybook/config.js`

- ```react
  import {configure} from '@storybook/react`;
  
  const req = require.context('../src', true, /.stories.js$/)
  
  function loadStories() {
      req.keys().forEach(file => req(file))
  }
  
  configure(loadStories, module);
  
  ```

- create component on `src/Button.js`

- ```react
  import React from 'react';
  
  export const Button = ({ bg, children }) => (
  <button style={{ backgroundColor: bg }}> {children}</button>
  );
  ```

- create story on `src/Button.stories.js` (make sure it's `*.stories.js` to match `config`)

- ```react
  import React from 'react'
  
  import {storiesOf} from '@storybook/react'
  import {Button} from '/Button'
  
  storiesOf('Button', module).add('with background', (<Button bg="plaegoldenrod">Hello World</Button>
  ));
  ```

- 
----
<video src="04.mp4"></video>
- create 'welcomeStory.js`

- ```react
  
  ```

- 
----
<video src="05.mp4"></video>
- pending
----
<video src="06.mp4"></video>
- pending
----
<video src="07.mp4"></video>
- pending
----
<video src="08.mp4"></video>
- pending
----
<video src="09.mp4"></video>
- pending
---
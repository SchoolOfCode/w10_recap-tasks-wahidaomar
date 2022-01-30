[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6839034&assignment_repo_type=AssignmentRepo)

# Recap Tasks - Week 10

## Tasks

For these tasks, you'll create a blog app with components that display posts, comments, a like button with authorisation.
Click [here](https://serene-ramanujan-3f4ae4.netlify.app/) to see an example of what the final result should look like!

### Task 1

Install all of the dependencies

### Task 2

Follow the component requirements below and create your folders and index.js files accordingly

### Task 3 

Follow the component breakdown, and successfully display the array of posts in [libs/articles](task2/src/libs/articles.js).

### Task 4

Follow the [Auth0 Tutorial ](https://auth0.com/docs/quickstart/spa/react/01-login) to implement the login, logout and user profile components.

Remember to create an environment file to store your domain and clientID.

To do this:
- Create a .env file
- REACT_APP_AUTH0_DOMAIN=
- REACT_APP_AUTH0_CLIENT_ID=

### Task 5

#### Styling

#### CSS Module Styling

Style however you would like, using your normal CSS styling.

After you have done that, convert your CSS styling to CSS module styling.

To do this:
- Rename your css file to [name].module.css
- Import that file into the file you will be styling as "css"
- Rename your classes using JSX - {css.className} - where className is the name of the class used in your css file

#### Ant Design

Install Ant Design and replace one of your components with one of their ready-made ones.
i.e.

To do this:
- Install Ant Design - npm i antd
- Import one of their components into the file of the component you will be replacing. 
   - i.e. import { Button } from 'antd'
- Instead of rendering button using JSX, I will render the antDesign button using <Button />




## Requirements

### Component Tree

- App
- Articles
   - Post
        - Comment Section
             - Comment
   - Like Button
   - Paragraphs
   - Title                   
- Login Button
- Logout Button
- User Profile



### Component Breakdown
#### App

_behaviour_

- render a div displaying the Login Button, Logout Button, User Profile, and Articles

#### Post

_props_

- title infomation
- paragraphs information
- comments information

_behaviour_

- render an article with the Title, Paragraphs, Like Button and Comment Section as components.
#### Comment Section

_props_

- comments infomation

_behaviour_

- render all the comments

#### Comment

_props_

- name infomation
- text information

_behaviour_

- render a div displaying the commentor's name and text

#### Like Button

_behaviour_

- render the Ant Design - LikeFilled component

#### Paragraphs

_props_

- paragraphs infomation

_behaviour_

- render a paragraph displaying the paragraph

#### Title

_props_

- title infomation

_behaviour_

- render a subheading displaying the title

#### Login Button

_behaviour_

- render a button in which when you click it, it redirects you to an authorisation page. And if successful, will then allow you to access the article contents

#### Logout Button

_behaviour_

- render a button in which when you click it, you no longer have authorisation to the page, and no longer displays the article contents.

#### User Profile

_behaviour_

- render a div displaying a user's picture and name, once they are authorised.
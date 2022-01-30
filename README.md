[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6839034&assignment_repo_type=AssignmentRepo)

# Recap Tasks - Week 10

## Deployed site

Click [here](https://serene-ramanujan-3f4ae4.netlify.app/)

## How to run

- npm i
- npm run start

## Dependencies

- React
- Ant Design

## Component Tree

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



## Component Breakdown

### App

_behaviour_

- render a div displaying the Login Button, Logout Button, User Profile, and Articles

### Post

_props_

- title infomation
- paragraphs information
- comments information

_behaviour_

- render an article with the Title, Paragraphs, Like Button and Comment Section as components.
### Comment Section

_props_

- comments infomation

_behaviour_

- render all the comments

### Comment

_props_

- name infomation
- text information

_behaviour_

- render a div displaying the commentor's name and text

### Like Button

_behaviour_

- render the Ant Design - LikeFilled component

### Paragraphs

_props_

- paragraphs infomation

_behaviour_

- render a paragraph displaying the paragraph

### Title

_props_

- title infomation

_behaviour_

- render a subheading displaying the title

### Login Button

_behaviour_

- render a button in which when you click it, it redirects you to an authorisation page. And if successful, will then allow you to access the article contents

### Logout Button

_behaviour_

- render a button in which when you click it, you no longer have authorisation to the page, and no longer displays the article contents.

### User Profile

_behaviour_

- render a div displaying a user's picture and name, once they are authorised.


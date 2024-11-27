# router-layer-outer
A quick tool for testing Expo router layouts (eventually)

## Motivation
I get a lot of questions like, "I'm trying to setup a router layout like..."

There's not always code right in front of us that we can quickly mess around with. And even if there is, then you gotta build back the navigation links and such in order to really try it out.

I want to quickly jump from pen-and-paper navigation hierarchy design to code where we can see if it actually works. And then toss it and try something completely different in no time flat.

## WARNING

This currently deletes your entire `app` folder without any warning or confirmation.

## Prereqs
- Yarn
- NCC (`npm install -g @vercel/ncc`)

## Trying it out

1. Add an alias to your **.bashrc** / **.zshrc** like `alias router-layer-outer="node /Users/keith/GitHub/router-layer-outer/build/index.js"`

2. Run `yarn watch`

3. Create a **layout.json** file (see **examples**)

4. In an Expo project directory, run `router-layer-outer layout.json`

## Plans
Writing out the folders and files is easy enough. I'd like have it infer screen contents based on the proceeding screens. For instance, if there's an **index** and **[post]** route, have it automatically make **index** a list of values that get passed as the value to **[post]**.

For shared routes, I'd like it to inter **initalRouteName**, configure the visible tabs and their href's correctly, probably some other things.

## Actual punch list
- [] Make sure it actually works as an app
- [] Add route names to the screens
- [] See if I can do a diff instead of recreating every file (not sure if this matters)
- [] Make simple forward links work
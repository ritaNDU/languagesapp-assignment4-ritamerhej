# LinguoPrunto

## Description
LinguoPrunto is an app that I wanted to develop with a friend. It's an app where you can learn languages.

## How to run the code

1. Clone the repository using the following command:
   `git clone https://github.com/ritaNDU/languagesapp-assignment4-ritamerhej.git`
2. Inside the cloned repository run either of the following commands:
   `yarn` or `npm install`
3. To start the server, run either of these commands:
   `yarn start` or `npm run starr`

## How I got organized

I started by drawing my screen on paper and bu drawing the interactions between screens using arrows. Then, I drew a diagram representing the structure of the data I wanted to use for the courses and lessons.
Finally I started implementing the app.

## Challenges Found

1. **Some Problems with Context ane state management**
   I was mutating state wihtout paying attention, so it took a while to fix the issue. All was find at the end.

2. **Emulators and Responsive Design**
   My laptop ism't powerful enough to run emulators, therefore I could only test my design on thr Small Phone and Medium phone emulators. I also found responsive design tricky, but I got the hold of it (I hope so!) after some googling and some course reviewing.

## Folder Structure

The code is all located in the src/ folder.

### The src/ folder:

It is divided into the components/ folder, the features/ folder and the data/ folder.

### The assets/ folder:

It's where all icons and illustrations in general are stored.

### The components/ folder:

It is divided into:

1. **atoms/** which is where the smallest pieces of components like buttons are implemented.
2. **molecules/** which is where the atoms are used to create the structures that need to be used in the interface, like card components for example that specifies how a single card should be rendered.
3. **organisms/** is where molecules are used to create features for the app. For example, there's the Course Cards List component.
4. **templates/** this is were modal views have been implemented.

### The hooks/ folder:

This is where all custom hooks are stored.

### The screens/ folder:

This is where all screens are stored.

### The store/ folder:

This is where the reducer and the context provider is implemented.

### The styles/ folder:

This is where the theme and the scaling functions are stored.

### The data/ folder:

It contains data, and interfaces to structure data objects.

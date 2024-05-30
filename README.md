## Description
This is the frontend repository for the LessonsQueue project. The project is being developed to facilitate the process of passing laboratory work by university students.
This API provides students with the ability to efficiently manage their lab assignment queue.
The application provides the ability to create the queue, add students to the queue, move and remove them from it, as well as mark the completion of tasks, etc...
The focus of the project will be on creating an intuitive and user-friendly interface to facilitate the queue management process and make it more transparent for all stakeholders.

**Our tech stack**: Svelte

**Design Document**: For more understanding of this project you can visit our [Design Document](https://docs.google.com/document/d/1VQChDcqtpMh4TreQL61J6O9NR8FkwoBUx1zo6jvGuPg/edit)

## Our developers
This project is being made by:
* [Anton Dovzhenko](https://github.com/KobbAsa)
* [Nazarii Radichenko](https://github.com/radichenko)
* [Danyil Tymofeiev](https://github.com/SharpDevOps10)
* [Bogdan Yarmolka](https://github.com/thebladehit)

## Installation
* First and foremost, you need to make sure that you have installed [Node.js](https://nodejs.org/en)

* After that, you have to clone this repository and enter the working folder:
```bash
$ git clone https://github.com/LessonsQueue/QueueManagerFront.git 
$ cd QueueManagerFront
```
* Then you have to install the dependencies for this project:
```bash
$ npm install
```

## Developing
Once you've installed dependencies with `npm install`, start a development server:
```bash
$ npm run dev
```
Or start the server and open the app in a new browser tab
```bash
$ npm run dev -- --open
```

## Building
To create a production version of your app:
```bash
$ npm run build
```
You can preview the production build with `npm run preview`.

Or you can use our [Dockerfile](https://github.com/LessonsQueue/QueueManagerFront/blob/main/Dockerfile) to build the project (how to build the image of our app, visit the `Dockerization` sections of README)

## Continuous Integration
We have also added CI using `GitHub Actions` (located in `.github` folder) for checking the build.
Here you can find our [All Workflows](https://github.com/LessonsQueue/QueueManagerFront/actions)

## Dockerization
If you want to build our image, you should write these commands:
```bash
$ sudo docker build -t svetle:latest .
```
After that:
```bash
$ sudo docker run -p 5173:5173 svetle:latest
```
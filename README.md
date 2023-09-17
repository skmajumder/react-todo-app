# React Todo App.

A simple To-Do List application built using React.js that allows users to add, remove, and mark tasks as complete. The app is connected to the JSONPlaceholder REST API to fetch and save tasks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Features](#features)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm comes bundled with Node.js installation.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/skmajumder/react-todo-app.git
   cd react-todo-app

   ```

Install the project dependencies

```shell
npm install
```

To run the application, use the following command:

```shell
npm run dev
```

This will start the development server, and you can access the app in your web browser at
http://localhost:portnumber
example: http://localhost:3000

### API Integration

The app is integrated with the JSONPlaceholder API to fetch and save tasks. The API endpoints for retrieving, adding, updating (marking as complete), and deleting tasks are used within the application. The following API endpoints are used:

- GET /todos: Retrieve the list of tasks.
- POST /todos: Add a new task.
- PUT /todos/:id: Update the completion status of a task.
- DELETE /todos/:id: Delete a task.

### Interacting with the JSONPlaceholder API

**Fetching Tasks:** Tasks are fetched from the API when the application loads. You can view the fetched tasks in the To-Do List.

**Adding a Task:** To add a new task, use the text input field and the "Add" button. The new task will be sent to the API and added to the list.

**_Important:_** In _https://jsonplaceholder.typicode.com/todos_ resource will not be really updated on the server but it will be faked as if.

### Features

Add new tasks to the to-do list.
Mark tasks as complete.
Delete tasks from the list.
Fetch tasks from the JSONPlaceholder API.
Stylish and user-friendly design.

### Styling

The app is styled to make it visually appealing and user-friendly. CSS styles have been applied to enhance the user interface.

### Tools Used

1. Hero Icon: [Flaticon.com](https://heroicons.com/)
1. Code Editor: [VS Code](https://code.visualstudio.com/)
1. React Hot Toast: [React Hot Toast](https://react-hot-toast.com/)

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

1. Fork the project.
1. Create your feature branch (git checkout -b feature/your-feature).
1. Commit your changes (git commit -m 'Add some feature').
1. Push to the branch (git push origin feature/your-feature).
1. Open a pull request.

---

# Understanding Reusable components in React.js 

Output:

![Alt Text](https://github.com/Reshmagvs/Basic-Vue.js-app/blob/main/vue_task.png)

1. First, install Vue CLI globally ( write the command in vs code terminal ) :

```
npm install -g @vue/cli
```
2. Verify the installation:

```
vue --version:
```
3. Create a New Vue Project

```
vue create task-list-app
cd task-list-app
```
4. Start the Vue development server:
   
```
npm run serve
```
5. Create a New Vue Component (TaskList.vue)
Inside the src/components/ folder, create a file named TaskList.vue and add the following code :

```
<template>
  <div>
    <h2>Task List</h2>
    <input v-model="newTask" placeholder="Enter a task" />
    <button @click="addTask">Add Task</button>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask);
        this.newTask = "";
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
  cursor: pointer;
}
</style>
```
6. Use TaskList Component in App.vue
Open src/App.vue and replace everything with:
```
<template>
  <div>
    <h1>Vue Task List App</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
```
7. Run the Vue App
Go back to the terminal and restart the server:

```
npm run serve
```






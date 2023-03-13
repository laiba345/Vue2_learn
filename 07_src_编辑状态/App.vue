<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 想给孩子传什么就传什么，方法，数组，字符串 -->
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>

</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';
// Item是List里面的子组件，无需进行引入

export default {
  name: 'App',
  components: { MyHeader, MyFooter, MyList },
  data() {
    return {
      /* todos: [
        // // 因为数字是有尽头的，我们一般用的都是哈希值
        // { id: '001', title: '吃饭', done: true },
        // { id: '002', title: '喝酒', done: false },
        // { id: '003', title: '开车', done: true },
      ] */
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    // 添加一个Todo
    addTodo(todoObj) {
      // console.log('我是APP组件,我收到了数据:', x)
      // unshift() 这种函数Vue是可以捕获到的 
      this.todos.unshift(todoObj)
    },
    // 勾选 or 取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      // filter是不改变原数组的，它是返回一个新的数组
      // 通过filter来对数组中的对象来进行过滤
      this.todos = this.todos.filter((todo) => {
        // 返回留下来的
        return todo.id !== id
      })
    },
    // 全选 or 取消全选
    checkAllTodo(done) {
      // 全选 or 取消全选是对其中的每个内容进行操作
      this.todos.forEach(todo => {
        todo.done = done
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }, 
    // 更新todo  使用pubsub-js 需要多加注意，
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.title = title
      })
    }
  },
  // 数据变化时，要进行相应的操作的时候，使用的是监视属性
  // 当里面的内容很多没有监视到的时候，我们要开启深度监视，
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  mounted() {
    // 全局事件总线
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('updateTodo', this.updateTodo)

    // 全局事件总线
    // this.$bus.$on('deleteTodo', this.deleteTodo)
    // 消息订阅与发布 --- 回调函数上面已经写好了
    // 取消的时候同定时器
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    this.$bus.$off('updateTodo')
    // this.$bus.$off('deleteTodo')
    // 取消的时候调用unsubscribe将id传进去
    pubsub.unsubscribe(this.pubId)
  }
};
</script>

<!-- App里面一般不写scoped -->
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}


.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

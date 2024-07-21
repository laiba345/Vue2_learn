# Vue2 基础知识
## 1. 初识Vue
- 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
- root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
- root容器里的代码被称为【Vue模板】；
- Vue实例和容器是一一对应的；（div中弄一个id选择器） 
- 真实开发中只有一个Vue实例，并且会配合着组件一起使用；
- {{ xxx }}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
- 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
**shift+option为快捷键**
## 2. Vue模板语法
- 插值语法
    - 功能：用于解析标签体内容
    - 写法： {{  }}
- 指令语法
    - 功能：用于解析标签
    - 举例：v-bind:href="xxx" 或 简写为 :href="xxx"，xxx同样要写js表达式，
	且可以直接读取到data中的所有属性。
## 3. 数据绑定
- 单向绑定（v-bind）
    - 数据只能从data流向页面
- 双向绑定（v-model）
    - 数据不仅能从data流向页面，还可以从页面流向data
    - 备注
        - 双向绑定一般都应用在表单类元素上（如：input、select等）
        - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值
## 4. el与data的2种写法
- el的2种写法
    - new Vue的时候直接配置el属性
    - 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。
- data的2种写法
    - 对象式
    - 函数式
    - 如何选择？
        - 目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错
- 一个重要原则
    - 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了
## 5. MVVM模型
- M（模型）
    - 模型(Model) ：data中的数据，包含了应用程序中的状态和数据
- V（视图）
    - 表示用户界面，直接与用户交互
    - 视图(View) ：模板代码
- VM
    - VM：视图模型(ViewModel)：Vue实例
    - 充当模型和视图之间的桥梁
- 注意点
    - data中所有的属性，最后都出现在了vm身上
    - vm身上所有的属性 及 vue原型上所有属性，在vue模板中都可以直接使用
        - 理解1：当我们创建一个Vue实例时，可以在可以在data、computed、methods等选项中定义属性和方法。这些属性和方法会被挂载到Vue实例（vm）上，并可以在模板中直接访问。
        - 理解2：Vue原型上的属性和方法是定义在Vue.prototype上的，并且所有的Vue实例都可以继承和访问这些属性和方法。这些属性和方法通常是Vue框架本身提供的实用功能。
            - 直接直接使用全局方法了
## 6. 数据代理
- 回顾；Object.defineProperty方法
    - 该方法主要针对某个对象，和对象中的属性设置get和set方法
- 何为数据代理
    - 通过一个对象代理对另一个对象中属性的操作（读/写）
- Vue中的数据代理
    - 通过vm对象来代理data对象中属性的操作（读/写）
    - 好处：更加方便的操作data中的数据
    - 基本原理：
        - 通过Object.defineProperty()把data对象中所有属性添加到vm上
        - 为每一个添加到vm上的属性，都指定一个getter/setter。
        - 在getter/setter内部去操作（读/写）data中对应的属性。
- 注意：在Vue3中是使用Proxy来实现数据代理的，Proxy是ES6的一个新特性，用于
监听数据的变化并触发响应式更新

## 7. 事件处理
- 事件的基本使用
    - 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
    - 事件的回调需要配置在methods对象中，最终会在vm上；
    - methods中配置的函数，不要用箭头函数！否则this就不是vm了；
    - methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
    - @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
        - 有的可以传递参数，有的不可以传递参数，关键在于是否加上括号；
- 事件修饰符
    - prevent：阻止默认事件（常用）；
    - stop：阻止事件冒泡（常用）；
    - once：事件只触发一次（常用）；
    - capture：使用事件的捕获模式；
    - self：只有event.target是当前操作的元素时才触发事件；
    - passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
- 键盘事件；

## 8. 计算属性
- 使用methods来实现计算属性的操作
    - 直接通过return来返回想要的结果即可
- 计算属性
    - 定义：要用的属性不存在，要通过已有属性计算得来。
    - 原理：底层借助了Objcet.defineproperty方法提供的getter和setter。
    - get函数什么时候执行？
        - 初次读取时会执行一次
        - 当依赖的数据发生变化时会被再次调用
    - 优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
    - 备注
        - 计算属性最终会出现在vm上，直接读取使用即可。
        - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
    - 计算属性的写法中，想要计算属性的名字写在最外面，通过对象冒号的形式来实现
        - 里面书写相应的get和set方法（以读取
            - get 有什么作用？当有人读取fullName时，get就会被调用，
            且返回值就作为fullName的值
            - set什么时候调用？当fullName被修改时调用
    - 计算属性的简写形式    
        - 在computed计算属性中，有点类似于方法的写法，通过return来进行
        相应的return操作；
     
## 监视属性（watch）
- 监视属性内部，写的是监视的属性，属性:{}的操作
    - 在对象中可以书写handler处理操作
- 深度监视
- 监视属性简写
    - 如果不开启深度监听的话，可以使用简写的形式（类似与方法的写法）

## 绑定样式
- class样式
    - 写法:class="xxx" xxx可以是字符串、对象、数组。
        - 字符串写法适用于：类名不确定，要动态获取。
        - 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
        - 数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
- style样式
    - :style="{fontSize: xxx}"其中xxx是动态值。
	- :style="[a,b]"其中a、b是样式对象。

## 条件渲染
- v-if
    - 写法：
        - (1).v-if="表达式" 
        - (2).v-else-if="表达式"
        - (3).v-else="表达式"
    - 适用于：切换频率较低的场景
    - 特点：不展示的DOM元素直接被移除。
    - 注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。
- v-show
    - 写法：v-show="表达式"
	- 适用于：切换频率较高的场景。
	- 特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
- 备注
    - 使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。

## 列表渲染
- 基本列表
    - 用于展示列表数据
    - 语法：v-for="(item, index) in xxx" :key="yyy"
    - 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
- key的原理
    - 虚拟DOM中key的作用：key是虚拟DOM对象的标识，当数据发生变化时，Vue
    会根据新数据生成新的虚拟DOM
    - 随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下
        - 旧虚拟DOM中找到了与新虚拟DOM相同的key：
            - 若虚拟DOM中内容没变, 直接使用之前的真实DOM！
            - 若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
        - 旧虚拟DOM中未找到与新虚拟DOM相同的key
            - 创建新的真实DOM，随后渲染到页面
    - 用index作为key可能会引发的问题
        -  若对数据进行：逆序添加、逆序删除等破坏顺序操作:
            -  会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。
        -  如果结构中还包含输入类的DOM：
			- 会产生错误DOM更新 ==> 界面有问题。
    - 开发中如何选择key？
        - 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值
        - 如果果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
	    使用index作为key是没有问题的。

- 列表过滤
    - 可以直接在监视属性中，完成列表的过滤操作；
- 列表排序
    - 可以直接在计算属性中，完成列表排序；
- 更新时的一个问题
    - 需要使用数组的相关方法来更新
    - 而不是简单使用: .属性 的方式来更新原有数组
- Vue.set的使用
    - 其中，通过Vue.set(this.student,'sex','男')
	或者是this.$set(this.student,'sex','男')都可以改变相关属性

## 收集表单数据
- 收集表单数据：
    - 若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
    - 若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
    - 若：<input type="checkbox"/>
        - 1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
        - 2.配置input的value属性:
            - (1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
            - (2)v-model的初始值是数组，那么收集的的就是value组成的数组
    - 备注：v-model的三个修饰符：
        - lazy：失去焦点再收集数据
        - number：输入字符串转为有效的数字
        - trim：输入首尾空格过滤
    
## 过滤器
- 定义：对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
- 语法：
    - 1.注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
    - 2.使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
- 备注：
    - 1.过滤器也可以接收额外参数、多个过滤器也可以串联
    - 2.并没有改变原本的数据, 是产生新的对应的数据

## 内置指令
- 重点关注 v-once
    - 1.v-once所在节点在初次动态渲染后，就视为静态内容了。
	- 2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
- 操作DOM的命令
    - 选择DOM元素
        - document.getElementById
        - document.getElementsByClassName
        - document.getElementsByTagName
        - document.querySelector
        - document.querySelectorAll
    - 创建和插入元素
        - 创建新元素
            - document.createElement("div")
        - 插入元素
            - parentElement.appendChild(newElement); 
                - 插入到某个父元素的最后一个子元素
                - 插入到某个特定子元素之前
        - 插入或修改HTML内容
            - element.innerHTML = "<p>Some HTML content</p>";
    - 修改元素属性和内容
        - 设置或获取元素属性
            - element.setAttribute("class", "newClassName");
            - var className = element.getAttribute("class");
        - 修改元素的文本内容
            - element.textContent = "New text content";
    - 删除元素
        - 移除元素
            - element.remove();
        - 从父元素中移除子元素
            - parentElement.removeChild(childElement);
    - 操作元素的样式
        - 修改元素的样式
            - element.style.color = "red";
            - element.style.backgroundColor = "blue";
        - 添加或移除CSS类
            - element.classList.add("newClass");
            - element.classList.remove("oldClass");
            - element.classList.toggle("activeClass");
    - 事件处理
        - 添加事件监听器
        ```
        element.addEventListener("click", function() {
            console.log("Element clicked!");
        });
        ```
        - 移除事件监听器
        ```
        function handleClick() {
            console.log("Element clicked!");
        }
        element.removeEventListener("click", handleClick);
        ```

## 生命周期
- 生命周期
    - 别称
        - 生命周期回调函数、生命周期函数、生命周期钩子。
    - 是什么
        - Vue在关键时刻帮我们调用的一些特殊名称的函数。
    - 生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。
    - 生命周期函数中的this指向是vm 或 组件实例对象。
- 分析生命周期：了解不同生命周期函数做了什么事情
- 总结生命周期
    - 常用的生命周期钩子
        - 1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
		- 2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
    - 关于销毁Vue实例
        - 1.销毁后借助Vue开发者工具看不到任何信息。
		- 2.销毁后自定义事件会失效，但原生DOM事件依然有效。
		- 3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了

## 非单文件组件
- 定义
    - 用纯JS对象来定义组件，而不是使用.vue文件的组件    
    - 非单文件组件通常使用Vue.js的Vue.component方法或使用纯js对象定义
- 1. 使用Vue.component定义全局组件
- 2. 使用纯js对象定义局部组件
- 优点
    - 简单易用
    - 无需构建工具
- 缺点
    - 不适合复杂组件
    - 缺少内置功能
    - 不易调试
- 基本使用
    - Vue中使用组件的三大步骤：
        - 一、定义组件(创建组件)
        - 二、注册组件
        - 三、使用组件(写组件标签)

	- 一、如何定义一个组件？
        - 使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；
        - 区别如下：
            - 1.el不要写，为什么？ ——— 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
            - 2.data必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
        - 备注：使用template可以配置组件结构。

	- 二、如何注册组件？
        - 1.局部注册：靠new Vue的时候传入components选项
        - 2.全局注册：靠Vue.component('组件名',组件)

	- 三、编写组件标签：
		- <school></school>
- 几个注意点
    - 关于组件名
        - 一个单词组成：
            - 第一种写法(首字母小写)：school
            - 第二种写法(首字母大写)：School
        - 多个单词组成：
            - 第一种写法(kebab-case命名)：my-school
            - 第二种写法(CamelCase命名)：MySchool (需要Vue脚手架支持)
        - 备注：
            - (1).组件名尽可能回避HTML中已有的元素名称，例如：h2、H2都不行。
            - (2).可以使用name配置项指定组件在开发者工具中呈现的名字。  
    - 2.关于组件标签:
        - 第一种写法：<school></school>
        - 第二种写法：<school/>
        - 备注：不用使用脚手架时，<school/>会导致后续组件不能渲染。
    - 3.一个简写方式：
        const school = Vue.extend(options) 可简写为：const school = options

- 组件的嵌套

- 关于VueComponent
    - 1.school组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

    - 2.我们只需要写<school/>或<school></school>，Vue解析时会帮我们创建school组件的实例对象，
        - 即Vue帮我们执行的：new VueComponent(options)。

    - 3.特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

    - 4.关于this指向：
        - (1).组件配置中：
            - data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。
        - (2).new Vue(options)配置中：
            - data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

    - 5.VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。
        Vue的实例对象，以后简称vm。

- 一个重要的内置关系
    - VueComponent.prototype.__proto__ === Vue.prototype
    - 为什么要有这个关系
        - 让组件实例对象（vc）可以访问到 Vue原型上的属性、方法

## 单文件组件
- 单文件组件通常包含一个.vue文件中，里面包含了模版(HTML)、脚本(JS)和样式(CSS)
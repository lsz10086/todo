// 获取元素
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 添加任务
addBtn.addEventListener('click', function(){
    const text = todoInput.value.trim();
    if(!text) return;
    createTodoItem(text);
    todoInput.value = '';
})

// 回车添加
todoInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        addBtn.click();
    }
})

// 创建待办项
function createTodoItem(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = text;

    // 点击文字切换完成
    span.onclick = ()=>{
        li.classList.toggle('done');
    }

    const delBtn = document.createElement('button');
    delBtn.innerText = '删除';
    delBtn.className = 'del-btn';
    delBtn.onclick = ()=>{
        li.remove();
    }

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for(let i = 0; i < todoList.items.length; i++) {
           this.print(i)
        }
    },
  
    add: function(text) {
        this.items.unshift({text:text})
    },
  
    remove: function(index) {
        this.items.splice(index,1)
    },
  
    print: function(index) {
        if(this.items[index].completed === true) {
            console.log('[x]' + ' ' + this.items[index].text);
        } else {
            console.log('[]' + ' ' + this.items[index].text);
        }
    },
  
    complete: function(index) {
        this.items[index].completed = true
    },
  };
  todoList.complete(0)
todoList.printAll()
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, StatusBar, useColorScheme } from 'react-native';
import { Navbar } from './components/Navbar'
import { AddToDo } from './components/AddToDo';
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {"id": 1, "title": "Ответить на электронные письма"},
    {"id": 2, "title": "Завершить этап проекта"},
    {"id": 3, "title": "Подготовиться к встрече с клиентом"},
    {"id": 4, "title": "Исследовать тренды в отрасли"},
    
    {"id": 5, "title": "Прогулка или бег"},
    {"id": 6, "title": "Прочитать главу книги"},
    {"id": 7, "title": "Покупки в продуктовом магазине"},
    {"id": 8, "title": "Заниматься рисованием или музыкой"},
    
    {"id": 9, "title": "Пройти ревизию месячного бюджета"},
    {"id": 10, "title": "Подключиться в LinkedIn"},
    {"id": 11, "title": "Практика медитации"}
  ])
 
  const addToDo = title => {
    setTodos(prev => [...prev, { id: Date.now().toString(), title}])
  }

  const removeTodo = id => {
    Alert.alert('Удаление', 'Удалить это заметку ?', [
      {
        text: 'Нет',
        onPress: () => '',
        style: 'cancel'
      },
      {
        text: 'Да',
        onPress: () => setTodos(item => item.filter(todo => todo.id !== id)),
        style: 'destructive'
      },
    ])
  }

  const colorScheme = useColorScheme('dark');

  return (
    <View>
      <StatusBar hidden={true}/>

      <Navbar title="Todo App"/>

      <View style={styles.container}>
        <AddToDo onSubmit={addToDo}/>

        <ScrollView>
          { todos.map(todo => {
            return <TouchableOpacity key={todo.id} onLongPress={() => removeTodo(todo.id)}>
              <Text style={styles.item}>{todo.title}</Text>
            </TouchableOpacity>
          }) }
        </ScrollView>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  item: {
    marginBottom: 15,
    backgroundColor: '#3939ab',
    padding: 10,
    color: '#fff'
  }
});

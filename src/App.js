import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Index from './components/exercises/Index';
import Footer from './components/layouts/Footer';
import { skills, exercises } from '../src/store';

class App extends Component {
  state = {
    exercises,
    exercise: {
    }
  }
  getExercisesBySkills() {
    const initExercises = skills.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})



    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { skills } = exercise
        // exercises[skills] = exercises[skills] ? [...exercises[skills], exercise] : [exercise]
        exercises[skills] = [...exercises[skills], exercise]
        return exercises;
      }, initExercises)
    )
  }
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }
  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))
  }
  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }
  handleExerciseDelete = id => {
    this.setState(({ exercises,exercise,editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }
  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }
  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))
  }
  render() {
    const exercises = this.getExercisesBySkills(),
      { category, exercise, editMode } = this.state
    console.log(this.getExercisesBySkills());
    return (
      <div className="App">
        <Header
          skills={skills}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Index
          exercise={exercise}
          category={category}
          exercises={exercises}
          skills={skills}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}

        />
        <Footer
          category={category}
          skills={skills}
          onSelect={this.handleCategorySelected}
        />
      </div>
    );
  }

}

export default App;

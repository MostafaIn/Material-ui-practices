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
      exercise: exercises.find(ex => ex.id === id)
    }))
  }
  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }
  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }
  render() {
    const exercises = this.getExercisesBySkills(),
      { category, exercise } = this.state
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
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
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

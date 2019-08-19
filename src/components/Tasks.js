import React, { useState } from 'react';
import TopBar from './TopBar';
import TaskCard from './TaskCard';

function Tasks() {
  return (
    <div>
      <TopBar pageName="Tasks" />
      <h1> Tasks, Yo</h1>
      <TaskCard />
    </div>
  );
}

export default Tasks;

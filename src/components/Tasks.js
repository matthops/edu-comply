import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import ObjectiveCards from './ObjectiveCards';
import axios from 'axios';
// import AddTasks from './AddTasks';

function Tasks() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    axios.get('/api/getalltasks').then(results => setTaskList(results.data));
  }, []);

  const handleStatusChange = (status, id) => {
    axios
      .post('/api/changeStatus', { status, id })
      .then(results => console.log('results', results));

    this.setState({
      statusButton: !this.state.statusButton
    });
  };

  const tasks = taskList.map((e, i) => {
    return (
      <ObjectiveCards
        key={e.id}
        id={e.id}
        headline={e.headline}
        status={e.task_status}
        dueDate={e.due_date}
        owner={e.owner}
        description={e.description}
        // frequency={e.frequency}
        handleStatusChange={handleStatusChange}
      />
    );
  });
  return (
    <div>
      <TopBar pageName="Tasks" />
      {tasks}
      {/* <AddTasks /> */}
    </div>
  );
}

export default Tasks;

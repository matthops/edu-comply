import React from 'react';
// import axios from 'axios';
import useInput from './hooks/useInput';

function AddTasks() {
  //   const [taskList, setTaskList] = useState([]);
  const {
    value: headline,
    bind: bindHeadline,
    reset: resetHeadline
  } = useInput('');
  const { value: status, bind: bindStatus, reset: resetStatus } = useInput('');
  const { value: owner, bind: bindOwner, reset: resetOwner } = useInput('');

  const handleSubmit = evt => {
    evt.preventDefault();
    alert(`${headline} ${status} ${owner}`);
    resetHeadline();
    resetStatus();
    resetOwner();
  };

  //   useEffect(() => {
  //     axios.post('/api/addtask').then(results => setTaskList(results.data));
  //   });

  // headline, status, owner, due_date, description, objective
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Headline:
        <input type="text" {...bindHeadline} />
      </label>
      <label>
        Status:
        <input type="text" {...bindStatus} />
      </label>
      <label>
        Owner:
        <input type="text" {...bindOwner} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddTasks;

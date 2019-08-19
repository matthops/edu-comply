import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import ObjectiveCards from './ObjectiveCards';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Objectives extends Component {
  constructor(props) {
    super();

    this.state = {
      activeObjectives: []
    };
  }

  componentDidMount() {
    axios.get('/api/getallobjectives').then(results =>
      this.setState({
        activeObjectives: results.data
      })
    );
    console.log('CDM', this.state.objectives);
  }

  handleStatusChange = (status, id) => {
    axios
      .post('/api/changeStatus', { status, id })
      .then(results => console.log('results', results));

    this.setState({
      statusButton: !this.state.statusButton
    });
  };

  render() {
    const { classes } = this.props;

    const objectives = this.state.activeObjectives.map((e, i) => {
      return (
        <ObjectiveCards
          key={e.id}
          id={e.id}
          headline={e.headline}
          status={e.task_status}
          dueDate={e.due_date}
          owner={e.owner}
          description={e.description}
          frequency={e.frequency}
          handleStatusChange={this.handleStatusChange}
        />
      );
    });

    console.log(this.state);
    return (
      <div className={classes.root}>
        <TopBar pageName="Objectives" />
        {/* <ObjectiveCards /> */}
        {objectives}
      </div>
    );
  }
}

Objectives.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Objectives);

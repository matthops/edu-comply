import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    width: '97%',
    display: 'grid',
    paddingLeft: '20px'
  },
  paper: {
    padding: theme.spacing.unit * 1.6,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '5.5em',
    display: 'grid',
    gridTemplateColumns: '10px 100px 10px 1fr 10px .25fr 10px',
    gridTemplateRows: '2.8em 1.5em'
  },
  buttonBox: {
    // backgroundColor: "#08A84C",
    gridColumnStart: 6,
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '15px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  headlineBox: {
    gridColumnStart: 4,
    gridRow: 1,
    textAlign: 'justify',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '15px',
    letterSpacing: '1.5px',
    fontWeight: 'bold'
  },
  taskStatusText: {
    gridRowStart: 2,
    gridColumnStart: 6,
    fontFamily: 'Open Sans',
    letterSpacing: '.75px',
    fontSize: '14px'
  },
  ownerBox: {
    gridRowStart: 1,
    gridColumnStart: 2,
    textAlign: 'justify',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '15px',
    letterSpacing: '1.5px',
    fontWeight: 'bold'
  },
  modalContainer: {
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '60%',
    padding: '20px'
  },
  modalInner: {
    fontFamily: 'Open Sans',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '10px'
  }
});

class ObjectiveCards extends Component {
  constructor(props) {
    super();

    this.state = {
      objectiveHeadline: 'Compile all student agreements',
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    const StatusWord = () => {
      const { status } = this.props;
      if (status && status === true) {
        return (
          <div
            className={this.props.classes.buttonBox}
            style={{ backgroundColor: '#08A84C' }}
            onClick={this.handleOpen}
          >
            Complete
          </div>
        );
      } else {
        return (
          <div
            className={this.props.classes.buttonBox}
            style={{ backgroundColor: 'red' }}
            onClick={this.handleOpen}
          >
            {' '}
            Incomplete{' '}
          </div>
        );
      }
    };
    console.log(this.props.id);

    return (
      <h3 className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <div className={classes.ownerBox}>{this.props.owner}</div>

          <div className={classes.headlineBox}>{this.props.headline}</div>

          <StatusWord />

          <div className={classes.taskStatusText}>
            Due Date {this.props.dueDate}
          </div>
        </Paper>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className={classes.modalContainer}>
            <div>
              {' '}
              <h1>{this.props.headline}</h1> <h4>Due {this.props.dueDate}</h4>
            </div>
            <div>{this.props.description}</div>
            <div className={classes.modalInner}>
              <div>
                <h3>Status:</h3>
                {this.props.status ? 'Complete' : 'Incomplete'}
              </div>
              <div>
                {' '}
                <h3>Owner:</h3> <p>{this.props.owner}</p>
              </div>
            </div>
          </div>
        </Modal>
      </h3>
    );
  }
}

ObjectiveCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ObjectiveCards);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { CheckOutlined, Close } from '@material-ui/icons';
import axios from 'axios';

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
    fontWeight: 'bold'
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
    padding: '30px'
  },
  modalInner: {
    fontFamily: 'Open Sans',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 0 20px 0',
    alignItems: 'center'
  },
  modalLight: {
    fontFamily: 'Open Sans',
    color: '#848f99',
    fontSize: '12px'
  },
  modalDark: {
    fontFamily: 'Open Sans',
    fontSize: '20px'
  },
  modalUpper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '20px',
    justifyContent: 'space-between'
  },
  modalHeadline: {
    fontFamily: 'Open Sans',
    fontSize: '30px',
    marginRight: '40px',
    maxWidth: '100%'
  },
  modalUpperInfo: {
    paddingRight: '20px',
    minWidth: '50px'
  },
  button: {
    margin: 'theme.spacing(1)',
    fontFamily: 'Open Sans'
  }
});

class ObjectiveCards extends Component {
  constructor(props) {
    super();

    this.state = {
      objectiveHeadline: 'Compile all student agreements',
      open: false,
      statusButton: false
    };
  }

  componentDidMount() {
    this.setState({
      statusButton: this.props.status
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleButtonClick = () => {
    this.props.handleStatusChange(!this.props.status, this.props.id);
    this.setState({
      statusButton: !this.state.statusButton
    });
  };

  // handleStatusChange = () => {
  //   const { status, id } = this.props;
  //   console.log(status, id);
  //   this.setState({
  //     statusButton: !this.state.statusButton
  //   });
  //   axios
  //     .post('/api/changeStatus', { status, id })
  //     .then(results => console.log('results', results));
  // };

  render() {
    const { classes } = this.props;

    const StatusWord = () => {
      const { statusButton } = this.state;
      if (statusButton && statusButton === true) {
        return (
          <Button
            className={this.props.classes.buttonBox}
            style={{ backgroundColor: '#08A84C' }}
            onClick={this.handleOpen}
          >
            Complete
          </Button>
        );
      } else {
        return (
          <Button
            className={this.props.classes.buttonBox}
            style={{ backgroundColor: 'red' }}
            onClick={this.handleOpen}
          >
            Incomplete
          </Button>
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
            <div className={classes.modalUpper}>
              {' '}
              <div className={classes.modalHeadline}>
                {this.props.headline}
              </div>{' '}
              <Button
                variant="outlined"
                className={classes.button}
                onClick={this.handleButtonClick}
              >
                {this.state.statusButton ? <Close /> : <CheckOutlined />}
                {this.state.statusButton ? ' Mark Incomplete' : 'Mark Complete'}
              </Button>
            </div>
            <div className={classes.modalInner}>
              <div className={classes.modalUpperInfo}>
                <div className={classes.modalLight}> Due Date</div>{' '}
                <div> {this.props.dueDate}</div>
              </div>
              <div className={classes.modalUpperInfo}>
                <div className={classes.modalLight}>Status:</div>
                {this.state.statusButton ? 'Complete' : 'Incomplete'}
              </div>
              <div className={classes.modalUpperInfo}>
                {' '}
                <div className={classes.modalLight}>Owner:</div>{' '}
                {this.props.owner}
              </div>
              <div className={classes.modalUpperInfo}>
                <div className={classes.modalLight}>Frequency:</div>{' '}
                {this.props.frequency}
              </div>
            </div>
            <div className={classes.modalLight}> Description:</div>
            <div>{this.props.description}</div>
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

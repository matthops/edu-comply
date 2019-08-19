import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { ErrorOutline } from '@material-ui/icons';
import { CheckCircle } from '@material-ui/icons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '1%',
    margin: '1%',
    width: '350px',
    height: '300px',
    display: 'grid'
  },
  paper: {
    padding: theme.spacing.unit * 1.5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '350px',
    display: 'grid',
    gridTemplateColumns: '50px 40px 20px 45px 45px 20px 40px 50px',
    gridTemplateRows: '30px 60px 20px 1fr 10px 35px 30px'
  },
  themeBox: {
    gridRowStart: 1,
    gridColumnStart: 1,
    gridColumnEnd: -1,
    textAlign: 'justify',
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '18px',
    color: '#F4F3F3',
    background: 'linear-gradient(90deg, #636C72 60%, #F4F3F3 97%)',
    paddingLeft: '10px',
    paddingTop: '2px',
    maxWidth: '310px'
  },
  totalBox: {
    backgroundColor: '#F4F3F3',
    gridRowStart: 4,
    gridColumnStart: 4,
    gridColumnEnd: 6,
    span: 2,
    // color: "white",
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '10px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  compliantBox: {
    backgroundColor: '#F4F3F3',
    gridRowStart: 4,
    gridRowEnd: 6,
    gridColumnStart: 1,
    gridColumnEnd: 3,
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '10px',
    letterSpacing: '1px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  notCompliantBox: {
    backgroundColor: '#F4F3F3',
    gridRowStart: 4,
    gridColumnStart: 7,
    gridColumnEnd: -1,
    gridRowEnd: 6,
    textTransform: 'uppercase',
    fontFamily: 'Open Sans',
    fontSize: '10px',
    letterSpacing: '1px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  mainNum: {
    fontFamily: 'Open Sans',
    fontSize: '30px',
    color: '#018DBB',
    padding: '5px'
  },
  svgGraph: {
    gridRowStart: 6,
    gridColumnStart: 2,
    gridColumnEnd: 7
  },
  errorStyle: {
    color: 'red',
    fontSize: 42,
    gridRowStart: 6,
    gridColumnStart: 8
  },
  checkStyle: {
    color: 'green',
    fontSize: 42,
    gridRowStart: 6,
    gridColumnStart: 1
  }
});

class ThemeCard extends Component {
  constructor(props) {
    super();
    this.state = {
      translateNum: 60
    };
  }

  render() {
    const { classes, theme } = this.props;
    console.log('theme', theme);
    const percentNum =
      217 *
      (this.props.nonCompliantTotal /
        (this.props.nonCompliantTotal + this.props.compliantTotal));
    // console.log("check", percentNum);

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
          <div className={classes.themeBox}> {theme}</div>

          <div className={classes.totalBox}>
            <div className={classes.mainNum}>{this.props.total}</div>
            Total Objectives
          </div>

          <div className={classes.compliantBox}>
            <div className={classes.mainNum}>{this.props.compliantTotal} </div>
            Compliant
          </div>
          <div className={classes.notCompliantBox}>
            <div className={classes.mainNum}>
              {this.props.nonCompliantTotal}
            </div>
            Not Compliant
          </div>
          <CheckCircle
            className={classes.checkStyle}
            transform="translate(15,0)"
          />
          <div className={classes.svgGraph}>
            <svg width="217" height="27" transform="translate(0,11)">
              <g>
                <rect x="0" y="0" height="20" width="217" fill="green" />
                <rect
                  x="300"
                  y="0"
                  height="20"
                  width="217"
                  fill="red"
                  transform={`translate(-${percentNum + 83},0)`}
                  // transform="translate(-85,0)"
                />
              </g>
            </svg>
          </div>
          <ErrorOutline className={classes.errorStyle} />
        </Paper>
      </div>
    );
  }
}

ThemeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ThemeCard);

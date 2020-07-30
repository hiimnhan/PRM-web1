import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MathJax from 'react-mathjax2';
import PropTypes from 'prop-types';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '20px auto',
  },

  detail: {
    display: 'flex',
    flexDirection: 'column',
  },
  accordionRoot: {
    backgroundColor: 'rgba(97,175,254,.1)',
    borderColor: '#61affe',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightBold,
    color: '#000',
    fontFamily: 'monospace',
    flexBasis: '33.3%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function CalcAccordion(props) {
  const { expression, name, operands = [] } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion classes={{ root: classes.accordionRoot }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id='header'>
          <Typography className={classes.heading}>{expression}</Typography>
          <Typography className={classes.secondaryHeading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: classes.detail }}>
          {operands.map((o) => (
            <div className={classes.root}>
              <Accordion classes={{ root: classes.accordionRoot }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} id='header'>
                  <Typography className={classes.heading}>{o.name}</Typography>
                  <Typography className={classes.secondaryHeading}>
                    {o.description}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{`How to calculate: ${o.expression}`}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

CalcAccordion.propTypes = {
  expression: PropTypes.any,
  name: PropTypes.any,
  operands: PropTypes.any,
};

export default CalcAccordion;

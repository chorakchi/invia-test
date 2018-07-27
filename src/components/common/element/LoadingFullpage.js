import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LogoWathermark from "./../../../asset/image/Logodefault.svg"

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    progress: {
        margin: theme.spacing.unit * 2,
        maxWidth: '50%',

    },
    logoWathermark:{
        width: 250,
        opacity: 0.3
    }
});

class LoadingFullpage extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} size={50} />
                <img src = {LogoWathermark} className={classes.logoWathermark} />
            </div>
        )
    }
}
LoadingFullpage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingFullpage);

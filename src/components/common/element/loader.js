import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styled, {css } from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import LogoWathermark from "./../../../asset/image/Logodefault.svg"

const Container = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
transition: all 0.5s ease;
display: none;
opacity: 0;
${props => props.height && css`
height: ${props.height +'px'};
`}
${props => props.show && css`
display: flex;
opacity:1;
`}
`;
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
    logoWathermark: {
        width: 250,
        opacity: 0.3
    }
});

class LoadingFullpage extends React.Component {
    state={
        show: true
    }

    componentWillReceiveProps(nextProps) {
        this.setState({show: nextProps.show})
        console.log('nextProps.show',nextProps.show);
    }
    render() {
        const { classes } = this.props
        return (
            <Container show={this.state.show} height={this.props.height}>
            <div className={classes.root}>
                <CircularProgress className={classes.progress} size={50} />
                <img src = {LogoWathermark} className={classes.logoWathermark} />
            </div>
            </Container>
        )
    }
}
LoadingFullpage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingFullpage);

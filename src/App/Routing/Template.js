import PropTypes from 'prop-types'

function Template(props) {

    const {

        component,
        showNav = true,
        footer = true
        
    } = props;

    return (
        <>
            { showNav &&
                <></>
            }
            {component}

            { footer &&
                <></>
            }
        </>
    )
}


Template.propTypes = {
    component: PropTypes.element,
    showNav: PropTypes.bool,
    footer: PropTypes.bool
} 


export default Template;
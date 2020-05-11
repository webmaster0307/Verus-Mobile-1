import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectClaimsToDisplay, selectShowHiddenClaims, selectAttestationsCountByClaim } from '../../../../selectors/identity';
import { setActiveClaim, toggleShowHiddenClaims } from '../../../../actions/actionCreators';

const mapStateToProps = (state) => ({
  claims: selectClaimsToDisplay(state),
  showHiddenClaims: selectShowHiddenClaims(state),
  attestationsCountByClaim: selectAttestationsCountByClaim(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setActiveClaim,
      toggleShowHiddenClaims,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);

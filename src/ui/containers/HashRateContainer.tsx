import { connect } from "react-redux";

import {
  fetchHashRateData,
  HASH_RATE,
} from "../../core/actions/hashRateActions";
import { RootState } from "../../core/reducers/rootReducer";
import errorSelectors from "../../core/selectors/errorSelectors";
import { getHashRateData } from "../../core/selectors/hashRateSelectors";
import loadingSelectors from "../../core/selectors/loadingSelectors";
import HashRate from "../components/HashRate";

const mapStateToProps = (state: RootState) => ({
  isLoading: loadingSelectors(state, HASH_RATE.FETCH.REQUEST),
  error: errorSelectors(state, HASH_RATE.FETCH.FAILURE),
  hashRateData: getHashRateData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchHashRateData: () => {
    dispatch(fetchHashRateData.request());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HashRate);

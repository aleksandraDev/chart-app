import { connect } from "react-redux";

import {
  fetchDifficultyData,
  DIFFICULTY,
} from "../../core/actions/difficultyActions";
import { RootState } from "../../core/reducers/rootReducer";
import errorSelectors from "../../core/selectors/errorSelectors";
import { getDifficultyData } from "../../core/selectors/difficultySelectors";
import loadingSelectors from "../../core/selectors/loadingSelectors";
import Difficulty from "../components/Difficulty";

const mapStateToProps = (state: RootState) => ({
  isLoading: loadingSelectors(state, DIFFICULTY.FETCH.REQUEST),
  error: errorSelectors(state, DIFFICULTY.FETCH.FAILURE),
  difficultyData: getDifficultyData(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onFetchDifficultyData: () => {
    dispatch(fetchDifficultyData.request());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Difficulty);

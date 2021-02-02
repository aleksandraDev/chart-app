import { RootState } from "../reducers/rootReducer";

export default (state: RootState, action: string) => state?.error?.[action];

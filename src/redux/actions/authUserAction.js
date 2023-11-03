import { fetchUserRedux } from "../../utils/auth/get_user";
import { setAllDataUser } from "../reducers/auth/authUserReducer";


export const getUser = () => async (dispatch) => {
    return fetchUserRedux().then((result) => {
        console.log(result.data.data,"darifetchredux")
        dispatch(setAllDataUser(result.data.data))
    }).catch((err) => {
        console.error(err, "")

    });
}

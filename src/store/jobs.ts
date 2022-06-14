import {IJob, ISetJobsAction} from "../types";

type IState = {
    list:IJob[]
}

const initialState:IState = {
    list: [],
}

const jobsReducer = (state = initialState, action:ISetJobsAction) => {
    switch (action.type) {
        case "SET_JOBS": {
            return {...state, list:{...action.payload}}
        }
        default :{
            return state
        }
    }
}
export default jobsReducer;
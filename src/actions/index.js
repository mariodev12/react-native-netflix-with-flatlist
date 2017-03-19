import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../constants'
import getDataApi from '../api'

export const getData = () => {
    return {
        type: 'FETCHING_DATA'
    }
}

export const getDataSuccess = data => {
    return {
        type: 'FETCHING_DATA_SUCCESS',
        data
    }
}

export const getDataFailure = () => {
    return {
        type: 'FETCHING_DATA_FAILURE'
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getData())
        getDataApi()
            .then(([response, json]) => {
                dispatch(getDataSuccess(json))
            })
            .catch((err) => console.log(err))
    }
} 
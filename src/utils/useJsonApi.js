import { useState, useEffect, useContext } from 'react';
import { store, StateProvider } from '../context/store';
import { jsonService } from './jsonService';

function useJsonApi() {
    const [isLoading, setIsLoading] = useState(true)
    const [haveErrors, setHaveErrors] = useState(false)
    const { dispatch, state } = useContext(store);

    const makeFetch = async () => {
        setIsLoading(true)
        try {
            const posts = await jsonService.getFirstTen()
            return dispatch({ type: 'UPDATE_POSTS', payload: posts })
        } catch (error) {
            setHaveErrors(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (dispatch) {
            dispatch({ type: 'SET_IS_LOADING', payload: isLoading })
            dispatch({ type: 'SET_HAVE_ERRORS', payload: haveErrors })
        }
    }, [isLoading, haveErrors])

    const fetchPosts = () => makeFetch()
    const submitPost = (data) => makeFetch()

    const actions = {
        fetchPosts,
        submitPost
    }

    return [actions, state]
}

export default useJsonApi
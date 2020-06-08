import * as NewsApi from 'newsapi'
import { useState, useEffect } from 'react';

const newsapi = new NewsApi('4607f217a2004708b76471b06cbcb78a').v2;
const LOADER_TEXTS = {
    title: 'Loading...',
    description: 'Loading...'
}
const MOCK_NEWS = new Array(5).fill(LOADER_TEXTS)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function useNews() {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState(MOCK_NEWS)
    const [haveErrors, setHaveErrors] = useState(false)


    const fetchNew = async () => {
        try {
            const response = await newsapi.topHeadlines({
                language: 'en',
                country: 'us'
            })
            await sleep(3000)
            setItems(response.articles)
            setIsLoading(false)
        } catch (error) {
            setHaveErrors(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNew()
    }, [])

    return [items, isLoading, haveErrors]
}

export default useNews
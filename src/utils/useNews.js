import * as NewsApi from 'newsapi'
import { useState, useEffect } from 'react';

const newsapi = new NewsApi('4607f217a2004708b76471b06cbcb78a').v2;

function useNews() {
    const [isLoading, setIsLoading] = useState(true)
    const [news, setNews] = useState()
    const [haveErrors, setHaveErrors] = useState(false)
    

    const fetchNew = async () => {
        try {
            const response = await newsapi.topHeadlines({
                language: 'en',
                country: 'us'
            })    
            setNews(response.articles)
            setIsLoading(false)
        } catch (error) {
            setHaveErrors(true)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchNew()
    }, [])

    return [news, isLoading, haveErrors]
}

export default useNews
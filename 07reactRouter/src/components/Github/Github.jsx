import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

// For getting Github Follower we need to call Github API, and for calling the github api first we need to load this component, and use useEffact() hook
function Github() {
    // 1st way of fetching data from github using github api using useLoaderData() hook:-
    const data = useLoaderData()

    // 2nd way of fetching data from github using github api:-
/*   // State for showing the github data on the website page
    const [data, setData] = useState([])
    // useEffect() hook
    useEffect(() => {
        // For calling github api need to pass URL of my githib account inside fetch method
      fetch('https://api.github.com/users/Ajayraj9001')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })

    }, [])  */
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

// Github information loading in new Way
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ajayraj9001')
    return response.json()
}
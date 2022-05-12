//import Head from 'next/head'
//import clientPromise from '../lib/mongodb'


const URL = process.env.BASE_URL;

export default function Home({movies: moviesArray}) {

  return (
    <div className="container">
      <h1>Filmes de 2010</h1>
      <ul>
        {moviesArray.map((movie, index) => {
          return <li key={index}> { movie.title }</li>;
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context) {
  //POST
  let res = await fetch(URL + "api/movies", //resposta post
  {
      method: "POST",
      body: JSON.stringify(
        {
        plot:"Three men hammer on an anvil and pass a bottle of beer around.",
        title:"00001 TESTE SQUAD AMARELA",
        fullplot:"A stationary camera looks at a large anvil with a blacksmith behind it...",
        rated:"UNRATED",
        lastupdated:"2015-08-26 00:03:50.133000000",
        year:2010,
        type:"movie",
    }),
  
  });
  res = await res.json();
  // //DELETE
  // let resDelete = await fetch(URL + "api/movies", 
  // {
  //   method: "DELETE"
  // }

  //GET
  const response = await fetch(URL + "api/movies", {
    method: "GET"
  });
  const movies = await response.json();

  return {
    props: { movies }
  }
}

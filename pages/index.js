//import Head from 'next/head'
//import clientPromise from '../lib/mongodb'

import { useEffect, useState } from "react";

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
  const response = await fetch(URL + "api/movies");
  const movies = await response.json();

  return {
    props: { movies }
  }
}

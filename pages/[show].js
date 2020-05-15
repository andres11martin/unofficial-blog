import Link from 'next/link';
import fetch from 'node-fetch'
import React from "react"
import Title from "../components/UI/Title"
import Box1 from "../components/UI/Box1"
import List from "../components/UI/List"
import Layout from "../components/UI/Layout"

const Home = props => {

    return (

        <Layout show={props.show}>
            <Box1>
                <Title>{props.data.name}'s Unofficial Blog</Title>
                <section className="intro">
                    <div className="info">
                        <p>{props.data.summary.replace(/<[^>]*>?/gm, '')}</p>
                        <br />
                        <p>{props.data.genres.length > 0 ? "Genre: " + props.data.genres.join(" / ") : <noimg />}</p>
                        <p>Network: {props.data.network ? props.data.network.name + " - " + props.data.network.country.name : props.data.webChannel.name}</p>
                        <p>Status: {props.data.status}</p>
                        <br />
                    </div>
                    <div className="introImg">{props.data.image ? <img src={props.data.image.original} /> : <div />}</div>
                </section>
            </Box1>
            <List>
                <ul>
                    <li>
                        <Link href="/${props.show}/cast" as={`/${props.show}/cast`}>
                            <a>Cast</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/${props.show}/seasons" as={`/${props.show}/seasons`}>
                            <a>Episodes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/${props.show}/crew" as={`/${props.show}/crew`}>
                            <a>Crew</a>
                        </Link>
                    </li>
                </ul>
            </List>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { show } = context.query
    const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`);
    const data = await res.json();
    console.log("hola" + show);
    return {
        props:
        {
            show: show,
            data
        }
    };
};

export default Home
import Head from "next/head";

type metaData = {
    title: string,
    description: string,
    keywords: string
}

const Meta = ({ title, description, keywords }: metaData) => {
    return ( 
        <Head>
            <title>{title}</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Meta.defaultProps = {
    title: "Next Js Explore",
    description: "This is Next js app",
    keywords: "next js, next js explore"
}
 
export default Meta;
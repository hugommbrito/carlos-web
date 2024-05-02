import React from 'react';
import Instagram from 'instagram-web-api';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

// Define types for the Instagram post and node structure
type InstagramNode = {
    display_resources: { src: string }[];
    edge_media_to_caption: {
        edges: { node: { text?: string } }[];
    };
};

type InstagramPost = {
    node: InstagramNode;
};

interface InstagramPostsProps {
    posts: InstagramPost[];
}

const InstagramPosts: React.FC<InstagramPostsProps> = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h1>Instagram Posts</h1>
            <ul className={styles.list}>
                {posts.map(({ node }, i) => (
                    <li key={i}>
                        <Image src={node.display_resources[0].src} alt="Instagram post" />
                        <p>{node.edge_media_to_caption.edges[0]?.node.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InstagramPosts;

export async function getStaticProps() {
    const client = new Instagram({ username: 'INSTAGRAM_USERNAME', password: 'INSTAGRAM_PASSWORD' });
    await client.login();

    const response = await client.getPhotosByUsername({
        username: 'INSTAGRAM_USERNAME',
    });

    return {
        props: {
            posts: response.user.edge_owner_to_timeline_media.edges as InstagramPost[],
        },
    };
}
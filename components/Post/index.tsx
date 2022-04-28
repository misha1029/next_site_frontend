import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { PostActions } from "../PostActions";

import styles from "./Post.module.scss";


interface PostProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export const Post: React.FC<PostProps> = ({id, title , description, imageUrl}) => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={`/news/${id}`}>
          <a>
            {title}
          </a>
        </Link>
      </Typography>
      <Typography className={styles.info}>
        {description}
      </Typography>
      {imageUrl && <img
        src="https://habrastorage.org/getpro/habr/upload_files/3da/0cd/fbc/3da0cdfbcbc572ed62e827d97c745fe1.jpeg"
        height={400}
        width={600}
        alt={title}
      />
      }
      <PostActions />
    </Paper>
  );
};

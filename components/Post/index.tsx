import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import { PostActions } from "../PostActions";

import styles from "./Post.module.scss";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href="/news/test-123">
          <a>
            Глава Electronic Arts сообщил об отсутствии текущих планов на NFT
          </a>
        </Link>
      </Typography>
      <Typography className={styles.info}>
        Пока истерия с NFT идет полным ходом, игровая индустрия не может
        разобраться, куда это прикрутить и что с этим делать.
      </Typography>
      <Image
        src="https://habrastorage.org/getpro/habr/upload_files/3da/0cd/fbc/3da0cdfbcbc572ed62e827d97c745fe1.jpeg"
        height={400}
        width={600}
      />
      <PostActions />
    </Paper>
  );
};

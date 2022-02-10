import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

import styles from './Post.module.scss';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <a href="#">
        Глава Electronic Arts сообщил об отсутствии текущих планов на NFT
        </a>
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
    </Paper>
  );
};


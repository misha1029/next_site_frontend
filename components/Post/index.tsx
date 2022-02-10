import React from "react";
import { Paper, Typography} from "@material-ui/core";
import Image from "next/image";
import styles from "./Post.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import MessageIcon from "@material-ui/icons/SmsOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MenuIcon from "@material-ui/icons/Menu";

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
              Глава Electronic Arts сообщил об отсутствии текущих планов на NFT
            </Typography>
            <Typography className={styles.info}>
              <div>
                Пока истерия с NFT идет полным ходом, игровая индустрия не может
                разобраться, куда это прикрутить и что с этим делать.
              </div>
            </Typography>
            <Image
              src="https://habrastorage.org/getpro/habr/upload_files/3da/0cd/fbc/3da0cdfbcbc572ed62e827d97c745fe1.jpeg"
              width={600}
              height={400}
            />
          </Paper>
  );
};

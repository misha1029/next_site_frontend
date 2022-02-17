import React from "react";
import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from "@material-ui/icons";
import Link from 'next/link';

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.content}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img
              className={styles.logo}
              src="./static/img/logo1.png"
              alt="Logo"
            />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className={styles.content}>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
            />
            <ArrowBottom />
          </a>
        </Link>

      </div>
    </Paper>
  );
};

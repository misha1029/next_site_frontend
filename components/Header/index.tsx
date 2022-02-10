import React from "react";
import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import styles from "./Header.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import MessageIcon from "@material-ui/icons/SmsOutlined";
import NotificationsIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className={styles.content}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img className={styles.logo} src="./static/img/logo1.png" alt="Logo" />

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
          <NotificationsIcon />
        </IconButton>

          <Avatar
            className={styles.avatar}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
          />
          <ExpandMoreOutlinedIcon/>

      </div>
    </Paper>
  );
};

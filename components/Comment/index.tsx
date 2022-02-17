import React from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://habrastorage.org/getpro/habr/upload_files/3da/0cd/fbc/3da0cdfbcbc572ed62e827d97c745fe1.jpeg"
          alt="Avatar"
        />
        <b>Master Oogway</b>
        <span>5 часов</span>
      </div>
      <Typography className={styles.text}>
        Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью. Трясёт хуже, чем в
        копейке по разьебанной дороге
      </Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={2}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};

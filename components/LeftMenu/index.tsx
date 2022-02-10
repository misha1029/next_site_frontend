import React from "react";
import { Paper, Typography} from "@material-ui/core";
import Image from "next/image";
import styles from "./LeftMenu.module.scss";
import { Button } from "@material-ui/core";
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import MessageIcon from "@material-ui/icons/SmsOutlined";
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

export const LeftMenu: React.FC = () => {
  return (
    <div className = {styles.menu}>
      <ul>
        <li>
          <Button><WhatshotOutlinedIcon/>Лента</Button>
          <Button><MessageIcon/>Сообщение</Button>
          <Button><TrendingUpOutlinedIcon/>Рейтинг News</Button>
          <Button><FormatListBulletedOutlinedIcon/>Подписки</Button>
        </li>
          
      </ul>
    </div>
  );
};

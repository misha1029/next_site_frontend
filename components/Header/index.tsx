import React from "react";
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  List,
  ListItem,
  ClickAwayListener,
} from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from "@material-ui/icons";
import Link from "next/link";
import { AuthDialog } from "../AuthDialog";
import styles from "./Header.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { selectUserData } from "../../redux/slices/user";
import { PostItem } from "../../utils/api/types";
import { Api } from "../../utils/api";




import { destroyCookie } from "nookies";





export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const [authVisible, setAuthVisible] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [posts, setPosts] = React.useState<PostItem[]>([]);
  const [open, setOpen] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const handleChangeInput = async (e) => {
    setSearchValue(e.target.value);
    try {
      const { items } = await Api().post.search({ title: e.target.value });
      setPosts(items);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const refresh = function refresh() {    
    setTimeout(function () {
        location.reload('http://localhost:3000')
    }, 100);
}
  const logout = async ({ token }) => {
    try {
      destroyCookie(null, 'rtoken', {
        path: '/',
      })
      refresh();
    } catch (err) {
      console.warn("Register error", err);
      if (err.response) { 
        console.log(err)
      }
    }
  };

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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div onClick={handleClick} className={styles.searchBlock}>
            <SearchIcon />
            <input
              value={searchValue}
              onChange={handleChangeInput}
              placeholder="Поиск"
            />
            {open ? (
              <Paper className={styles.searchBlockPopup}>
                {posts.length > 0 && (
                  <List>
                    {posts.map((obj) => (
                      <Link key={obj.id} href={`/news/${obj.id}`}>
                        <a>
                          <ClickAwayListener onClickAway={handleClickAway}>
                            <ListItem button>{obj.title}</ListItem>
                          </ClickAwayListener>
                        </a>
                      </Link>
                    ))}
                  </List>
                )}
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>

        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className={styles.content}>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
            <div className="d-flex align-center justify-between">
              <Button onClick={logout} type="submit" color="primary" variant="contained">
                Выйти
              </Button>
            </div>
        {userData ? (
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
        ) : (
          <div className={styles.loginButton} onClick={openAuthDialog}>
            <UserIcon />
            Войти
          </div>
        )}
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};

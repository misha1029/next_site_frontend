import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import {
  SettingsOutlined as SettingsIcon,
  TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

import { Post } from '../../components/Post';
import { MainLayout } from '../../layouts/MainLayout';
import { GetServerSideProps, NextPage } from 'next';
import { Api } from '../../utils/api';
import { ResponseUser } from '../../utils/api/types';
import moment from 'moment'



interface ProfileProps {
  user: ResponseUser;
}

const Profile: NextPage<ProfileProps> = ({ user }) => {
  console.log(user)

  return (
    <MainLayout contentFullWidth hideComments>
      <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              style={{ width: 120, height: 120, borderRadius: 6 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
            />
            <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
              {user.fullName}
            </Typography>
          </div>
          <div>
            <Link href="./settings">
              <Button
                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                variant="contained">
                <SettingsIcon />
              </Button>
            </Link>
            <Button style={{ height: 42 }} variant="contained" color="primary">
              <MessageIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mb-10 mt-10">
          <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>{user.createAt}</Typography>

        <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="mr-20 flex">
          {/* <Post /> */}
        </div>
        <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
          <b>Подписчики</b>
          <div className="d-flex mt-15">
            <Avatar
              className="mr-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
            />
            <Avatar
              className="mr-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
            />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
};

export default Profile;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    console.log(ctx)
    const id = ctx.params.id;
    const user = await Api(ctx).user.getOne(+id);

    return {
      props: {
        user,
      },
    };
  } catch (err) {
    console.log('user post page', err);
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
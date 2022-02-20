import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { PostActions } from '../PostActions';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
    <Paper elevation={0} className={styles.paper}>
      <div style={{ margin: '0 auto', width: 680 }}>
        <Typography variant="h4" className={styles.title}>
            NVIDIA отчиталась о рекордной квартальной и годовой выручке
        </Typography>
        <div>
          <Typography>
          В среду 16 февраля NVIDIA объявила финансовые результаты за четвертый квартал 2022 финансового года (закончился 30 января) и весь 2021 год. Ее выручка за квартал составила рекордную для компании сумму
          </Typography>
          <Typography>
          Чистая прибыль NVIDIA составила $9,7 млрд. При этом недавно компания выплатила неустойку ARM в размере $1,36 млрд из-за запрета регуляторами сделки по приобретению.
          </Typography>
          <Typography>Самолет продолжает полет на высоте примерно 3000 метров.</Typography>
          <Typography>
          Почти половина суммы (примерно $12,4 млрд) приходится на игровое подразделение. На сегмент дата-центров пришлось $10,6 млрд долларов. Остальные пункты прибыли все вместе с трудом дотянули до $4 млрд  –  $2,1 млрд у сегмента профессиональной виртуализации, $566 млн –  у автомобильного и $1,1 млрд пришлись на ОЕМ и другие проекты. Хочется отметить, что в отчете не указано,  как на выручку повлиял майнинг. Но все известно, что продажи «карт для майнеров» в общем принесли компании $550 млн за год. 
          </Typography>
          <div style={{ width: 250, marginLeft: -14 }}>
            <PostActions />
          </div>
          <div className="d-flex justify-between align-center mt-30 mb-30">
            <div className={styles.userInfo}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JhQ7n2CI9Fft6eTOJKdX6E2KkkZ2SXDHrQ&usqp=CAU"
                alt="Avatar"
              />
              <b>Test Testovich</b>
              <span>+1700</span>
            </div>
            <div>
              <Button variant="contained" className="mr-15">
                <MessageIcon />
              </Button>
              <Button variant="contained">
                <UserAddIcon />
                <b className="ml-10">Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

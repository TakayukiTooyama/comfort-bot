import React from 'react';
import { ListItemAvatar, Avatar } from '@material-ui/core';
import Adomin from '../../img/profile-photo.jpg';
import Consumer from '../../img/kawauso.png';

type Props = {
  isQuestion: boolean;
};

const DefaultAvatar = ({ isQuestion }: Props) => {
  return (
    <ListItemAvatar>
      {isQuestion ? (
        <Avatar alt="consumer" src={Consumer} />
      ) : (
        <Avatar alt="adomin" src={Adomin} />
      )}
    </ListItemAvatar>
  );
};

export default DefaultAvatar;

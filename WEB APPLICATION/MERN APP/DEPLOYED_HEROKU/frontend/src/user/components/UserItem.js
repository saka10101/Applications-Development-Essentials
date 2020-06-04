import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/summaries`}>
          <div className="user-item__image">
            <Avatar image={`${process.env.REACT_APP_BACKEND_URL}${props.image}`} alt={' '} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            
            <h3>
              {(props.placeCount) == 'undefined' ? '0': props.placeCount} {props.placeCount === 1 ? 'Summary' : 'Summaries'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;

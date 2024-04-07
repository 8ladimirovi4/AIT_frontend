import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  randomUserSliceActions,
  randomUserSliceSelectors,
} from 'store/redux/randomUserSlice';
import 'pages/randomuser/style.css';
import { useEffect } from 'react';

function RandomUser() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(
    randomUserSliceSelectors.randomUser
  );

  const getUserData = () => {
    dispatch(randomUserSliceActions.getRandomUser(undefined));
  };

  useEffect(() => {
    !!error ? alert('error data loading') : null;
  }, [error]);

  return (
    <div className="page_wrapper">
      <div className="user_card">
        <div className="user_avatar_container">
          <img
            className="user_avatar"
            src={
              !!data.picture.large
                ? data.picture.large
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Gb2Vp1PsX87h_NXxv0rFymeInTPT6YxEM8ZlA9g27g&s'
            }
            alt=""
          />
        </div>
        <div className="user_info_container">
          <div className="user_credentials_container">
            <span>{data.name.first}</span>
            <span>{data.name.last}</span>
          </div>
          <div className="user_email_container">
            <span>{data.email}</span>
          </div>
        </div>
        <div
          className="btn_get_user"
          style={{
            backgroundColor: isLoading ? 'lightgray' : 'lightblue',
            borderColor: isLoading ? 'lightgray' : 'rgb(31, 171, 218)',
            cursor: isLoading ? 'wait' : 'pointer',
          }}
          onClick={getUserData}
        >
          Get User Info
        </div>
      </div>
    </div>
  );
}

export default RandomUser;

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  randomUserSliceActions,
  randomUserSliceSelectors,
} from 'store/redux/randomUserSlice';
import { useEffect } from 'react';
import {
  BtnGetUser,
  PageWrapper,
  UserAvatar,
  UserAvatarContainer,
  UserCard,
  UserCredentials,
  UserCredentialsContainer,
  UserEmailContainer,
  UserInfoContainer,
} from './styles';

function RandomUser() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(
    randomUserSliceSelectors.randomUser
  );

  const getUserData = () => {
    if (isLoading) return;
    dispatch(randomUserSliceActions.getRandomUser(undefined));
  };

  useEffect(() => {
    !!error ? alert('error data loading') : null;
  }, [error]);

  const imageURL = !!data.picture.large
    ? data.picture.large
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Gb2Vp1PsX87h_NXxv0rFymeInTPT6YxEM8ZlA9g27g&s';

  return (
    <PageWrapper>
      <UserCard>
        <UserAvatarContainer>
          <UserAvatar src={imageURL} alt="avatar.jpg" />
        </UserAvatarContainer>
        <UserInfoContainer>
          <UserCredentialsContainer>
            <UserCredentials>{data.name.first}</UserCredentials>
            <UserCredentials>{data.name.last}</UserCredentials>
          </UserCredentialsContainer>
          <UserEmailContainer>
            <UserCredentials>{data.email}</UserCredentials>
          </UserEmailContainer>
        </UserInfoContainer>
        <BtnGetUser isLoading={isLoading} onClick={getUserData}>
          Get User Info
        </BtnGetUser>
      </UserCard>
    </PageWrapper>
  );
}

export default RandomUser;

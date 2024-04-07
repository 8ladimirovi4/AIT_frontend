import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px;
  border: 3px solid lightblue;
  border-radius: 10px;
  width: 600px;
  height: 500px;
  background-color: lightcyan;
`;

export const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

export const UserCredentialsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 400px;
  font-size: xx-large;
  font-weight: 600;
  border: 2px solid lightblue;
  border-radius: 5px;
  height: 50px;
`;

export const UserCredentials = styled.span``;

export const UserEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  font-size: x-large;
  font-weight: 400;
  border: 2px solid lightblue;
  border-radius: 5px;
  height: 50px;
`;

export const BtnGetUser = styled.div<{ isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'lightblue'};
  border: 2px solid rgb(31, 171, 218);
  width: 150px;
  height: 50px;
  border-radius: 15px;
  font-size: x-large;
  border-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'rgb(31, 171, 218)'};
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};

  &:hover{
    background-color: ${({ isLoading }) =>
    isLoading ? 'lightgray' : 'rgb(31, 171, 218)'};
  }
`;

export interface RandomUserState {
  data: RandomUser;
  isLoading: boolean;
  error: any;
}

export interface RandomUser {
  id: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

export interface RandomUserAction {
  results: [
    {
      id: string;
      name: {
        first: string;
        last: string;
      };
      picture: {
        large: string;
      };
      email: string;
    },
  ];
}

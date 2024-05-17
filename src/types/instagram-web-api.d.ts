declare module 'instagram-web-api' {
  interface InstagramOptions {
    username: string;
    password: string;
  }

  interface ClientOptions {
      login(): Promise<void>;
      getPhotosByUsername(options: { username: string }): Promise<any>;
  }

  class Instagram implements ClientOptions {
    constructor(options: InstagramOptions);
    login(): Promise<void>; // Ensure this method is declared
    getPhotosByUsername(options: { username: string }): Promise<any>;
  }

  export = Instagram;
}
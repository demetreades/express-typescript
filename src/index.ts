import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import PostController from '@/components/post/post.controller';
// import UserController from '@/components/user/user.controller';

validateEnv();

const app = new App(
  [
    new PostController(),
    // new UserController(),
  ],
  Number(process.env.PORT)
);

app.listen();

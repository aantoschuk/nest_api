import { Blog } from 'src/blog/blog.entity';
import { Users } from 'src/users/user.entity';

export const config = () => ({
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Blog, Users],
    synchronize: true,
    ssl: { rejectUnauthorized: false },
  },
});
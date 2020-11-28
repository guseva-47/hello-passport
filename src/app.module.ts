import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { UsersModule as UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { TabletopModule } from './tabletop/tabletop.module';
import { configModule } from './configure.root';
import { UserFriendsController } from './user/user-friends.controller';
import { UserTabletopsController } from './user/user-tabletops.controller';
import { TrueRandomeModule } from './true-randome/true-randome.module';
import { winstoneConfig } from './winston.configure.root';

const MONGODB_WRITE_CONNECTION_STRING = 'mongodb://localhost:27017/nest-write'

@Module({
    imports: [
        configModule,
        winstoneConfig,
        MongooseModule.forRoot(
            MONGODB_WRITE_CONNECTION_STRING,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        ),
        TabletopModule,
        AuthModule,
        UserModule,
        TrueRandomeModule,
    ],
    controllers: [AppController, UserFriendsController, UserTabletopsController],
    providers: [Logger]
})
export class AppModule { }